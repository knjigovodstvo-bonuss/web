export const metadata = { title: "Privatnost — Bonuss" };

export default function PrivacyPage() {
  const sections = [
    {
      title: "Podaci koje prikupljamo",
      items: ["Ime i prezime", "E-mail adresa", "Poruka", "Telefon (ako ga pošaljete)"],
    },
    {
      title: "Svrha obrade",
      body: "Koristimo ih isključivo za odgovor na vaš upit, pripremu ponude i obavezno vođenje interne evidencije.",
    },
    {
      title: "Kako čuvamo podatke",
      body: "Podaci se čuvaju na sigurnim servisima u Europskoj uniji i dostupni su samo ovlaštenim osobama.",
    },
  ];

  return (
    <section className="container py-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Pravila privatnosti</h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          U nastavku saznajte koje podatke prikupljamo putem kontakt forme, zašto ih obrađujemo i kako možete zatražiti
          njihovo brisanje.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-white/10 bg-surface-900/40 p-6 shadow-lg shadow-black/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">{section.title}</h2>
            {section.items ? (
              <ul className="grid gap-3 text-slate-300 md:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface-800/50 px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(245,97,17,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-300 leading-relaxed">{section.body}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl rounded-2xl border border-brand-400/40 bg-brand-500/10 p-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Vaša prava</h2>
        <p className="text-slate-200">
          U svakom trenutku možete zatražiti pregled, ispravak ili brisanje podataka. Pišite nam na{" "}
          <a
            href="mailto:knjigovodstvo.bonus@gmail.com"
            className="text-brand-200 underline hover:text-brand-100 transition"
          >
            knjigovodstvo.bonus@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
