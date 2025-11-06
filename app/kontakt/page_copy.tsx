"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2, "Upišite ime"),
  email: z.string().email("Neispravan e-mail"),
  message: z.string().min(10, "Poruka je prekratka"),
});

type FormData = z.infer<typeof Schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormData>({ resolver: zodResolver(Schema)});

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) reset();
  };

  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="text-3xl font-semibold">Kontakt</h1>
      <p className="mt-2 text-gray-600">Pošaljite upit i javit ćemo se isti dan.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm mb-1">Ime i prezime</label>
          <input className="w-full border rounded-xl px-3 py-2" {...register("name")} />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">E-mail</label>
          <input className="w-full border rounded-xl px-3 py-2" {...register("email")} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Poruka</label>
          <textarea rows={5} className="w-full border rounded-xl px-3 py-2" {...register("message")} />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <button disabled={isSubmitting} className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60">
          {isSubmitting ? "Šaljem..." : "Pošalji poruku"}
        </button>

        {isSubmitSuccessful && <p className="text-green-700">Hvala! Uskoro se javljamo.</p>}
      </form>
    </section>
  );
}
