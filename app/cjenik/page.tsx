import Link from "next/link";

export const metadata = { title: "Cjenik — Bonuss" };

export default function PricingPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold text-white">Cjenik</h1>
      <p className="mt-2 text-slate-300">
        Primjer paketa — prilagodit ćemo prema opsegu vašeg poslovanja.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          {name: "Start", price: "od 70 €", features: ["do 20 dokumenata/mj", "PDV kvartalno", "e-mail podrška"]},
          {name: "Biznis", price: "od 140 €", features: ["do 80 dokumenata/mj", "PDV mjesečno", "prioritetna podrška"]},
          {name: "Pro", price: "po ponudi", features: [">80 dokumenata/mj", "plaće", "izvješća i savjetovanje"]},
        ].map((p) => (
          <div key={p.name} className="border border-white/10 rounded-2xl p-6 bg-surface-800/60 shadow-lg shadow-black/20">
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <p className="text-3xl mt-2 text-brand-300">{p.price}</p>
            <ul className="mt-4 text-sm text-slate-300 space-y-2">
              {p.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <Link
              href="/kontakt"
              className="inline-block mt-6 px-4 py-2 rounded-xl bg-brand-500 text-white hover:bg-brand-400 transition"
            >
              Zatraži ponudu
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
