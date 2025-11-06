import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs"; // Ensure Node runtime for server SDKs

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
  company: z.string().max(0).optional(), // honeypot: must be empty
});

const resend = new Resend(process.env.RESEND_API_KEY);

function htmlEmail(data: z.infer<typeof Schema>) {
  return `
  <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.6; color:#0b1020">
	<h2 style="margin:0 0 16px">Nova poruka s weba (Bonuss)</h2>
	<table style="border-collapse:collapse; width:100%">
	  <tbody>
		<tr><td style="padding:8px 0; width:120px; color:#666">Ime</td><td>${escapeHtml(data.name)}</td></tr>
		<tr><td style="padding:8px 0; color:#666">E-mail</td><td>${escapeHtml(data.email)}</td></tr>
		${data.phone ? `<tr><td style="padding:8px 0; color:#666">Telefon</td><td>${escapeHtml(data.phone)}</td></tr>` : ""}
	  </tbody>
	</table>
	<hr style="margin:16px 0; border:none; border-top:1px solid #e5e7eb"/>
	<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
  </div>`;
}

function escapeHtml(s: string) {
  return s
	.replaceAll("&", "&amp;")
	.replaceAll("<", "&lt;")
	.replaceAll(">", "&gt;")
	.replaceAll('"', "&quot;")
	.replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  let body: unknown;
  try {
	body = await req.json();
  } catch {
	return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
	return NextResponse.json(
	  { ok: false, error: "Validation failed", details: parsed.error.flatten() },
	  { status: 422 }
	);
  }

  const data = parsed.data;

  if (typeof data.company === "string" && data.company.length > 0) {
	return NextResponse.json({ ok: true }, { status: 204 });
  }

  if (!process.env.RESEND_API_KEY) {
	return NextResponse.json(
	  { ok: false, error: "Server is not configured (missing RESEND_API_KEY)" },
	  { status: 500 }
	);
  }

  try {
	await resend.emails.send({
	  from: "Bonuss Website <onboarding@resend.dev>",
	  to: "knjigovodstvobonuss@gmail.com",
	  reply_to: data.email,
	  subject: "Nova poruka s Bonuss weba",
	  text: `Ime: ${data.name}\nE-mail: ${data.email}\nTelefon: ${data.phone ?? "-"}\n\nPoruka:\n${data.message}`,
	  html: htmlEmail(data),
	});

	return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
	console.error("Resend error:", err);
	return NextResponse.json(
	  { ok: false, error: "Failed to send message" },
	  { status: 502 }
	);
  }
}
