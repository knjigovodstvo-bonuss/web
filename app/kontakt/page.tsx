"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// ---- Validation schema ----
const Schema = z.object({
  name: z.string().min(2, "Upišite ime i prezime"),
  email: z.string().email("Neispravan e-mail"),
  phone: z
    .string()
    .optional()
    .transform((v) => (v ?? "").trim())
    .pipe(z.string().max(40, "Predugačak broj").optional()),
  message: z.string().min(10, "Poruka je prekratka"),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Molimo potvrdite suglasnost s obradom podataka.",
    }),
  }),
  company: z.string().max(0).optional(), // honeypot field
});

type FormData = z.infer<typeof Schema>;

// ---- Component ----
export default function ContactPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverOK, setServerOK] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
      company: "",
    },
  });

  // ---- Submit handler ----
  const onSubmit = async (data: FormData) => {
    setServerError(null);
    setServerOK(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const payload = await res.json().catch(() => ({} as any));

      if (!res.ok) {
        // Validation (422)
        if (res.status === 422 && payload?.details?.fieldErrors) {
          const fieldErrors: Record<string, string[]> =
            payload.details.fieldErrors;
          Object.entries(fieldErrors).forEach(([field, msgs]) => {
            if (msgs?.length) {
              setError(field as keyof FormData, {
                type: "server",
                message: msgs[0],
              });
            }
          });
          throw new Error("Provjerite označena polja.");
        }

        // Other server errors
        throw new Error(
          payload?.error || "Neuspješno slanje poruke. Pokušajte ponovno."
        );
      }

      setServerOK(true);
      reset({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
        company: "",
      });
    } catch (e: any) {
      setServerError(e?.message ?? "Dogodila se greška. Pokušajte ponovno.");
    }
  };

  // ---- Render ----
  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="text-3xl font-semibold">Kontakt</h1>
      <p className="mt-2 text-gray-600">
        Pošaljite upit i javit ćemo se isti dan. Polja označena * su obavezna.
      </p>

      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {serverOK ? "Poruka poslana." : serverError ? serverError : ""}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
        {/* Honeypot field (anti-spam) */}
        <div className="hidden">
          <label>
            Tvrtka
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
            />
          </label>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Ime i prezime *
          </label>
          <input
            id="name"
            autoComplete="name"
            className="w-full border rounded-xl px-3 py-2"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="w-full border rounded-xl px-3 py-2"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-1">
            Telefon (neobavezno)
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="w-full border rounded-xl px-3 py-2"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Poruka *
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border rounded-xl px-3 py-2"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-4 w-4"
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-sm text-gray-700">
            Dajem suglasnost da se moji podaci koriste za odgovor na upit,
            sukladno{" "}
            <a className="underline" href="/privatnost">
              Pravilima privatnosti
            </a>
            . *
          </label>
        </div>
        {errors.consent && (
          <p className="text-sm text-red-600 -mt-2">
            {errors.consent.message}
          </p>
        )}

        <button
          disabled={isSubmitting}
          className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60"
        >
          {isSubmitting ? "Šaljem..." : "Pošalji poruku"}
        </button>

        {serverOK && <p className="text-green-700">Hvala! Uskoro se javljamo.</p>}
        {serverError && <p className="text-red-700">{serverError}</p>}
      </form>

      <p className="text-xs text-gray-500 mt-6">
        Ovu formu štitimo jednostavnim antispamom (honeypot). Za brži kontakt
        pišite na{" "}
        <a
          className="underline"
          href="mailto:knjigovodstvobonuss@gmail.com"
        >
          knjigovodstvobonuss@gmail.com
        </a>
        .
      </p>
    </section>
  );
}