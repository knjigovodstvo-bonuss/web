export const metadata = { title: "O nama — Bonuss" };

export default function AboutPage() {
  const highlights = [
    { title: "Točni i pravovremeni izvještaji", description: "Svaki mjesec znate gdje stoji vaše poslovanje." },
    { title: "Jasna komunikacija", description: "Bez žargona i skrivenih troškova – sve dogovaramo unaprijed." },
    { title: "Digitalna razmjena dokumenata", description: "Dokumente šaljete elektronički, a mi ih obrađujemo isti dan." },
  ];

  const businessInfo = [
    { label: "Naziv", value: "Bonuss, obrt za knjigovodstvene usluge" },
    { label: "Adresa", value: "Dubrovačka 59, 21000 Split, Hrvatska" },
    { label: "Telefon", value: "+385 97 744 44 56", href: "tel:+385977444456" },
    { label: "E-mail", value: "knjigovodstvobonuss@gmail.com", href: "mailto:knjigovodstvobonuss@gmail.com" },
  ];

  return (
    <section className="container py-16">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">O nama</h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Bonuss je malo, posvećeno knjigovodstvo fokusirano na obrtnike, j.d.o.o. i d.o.o.
          Naš cilj je da poduzetnici imaju miran san uz transparentnu uslugu bez skrivenih troškova.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-surface-900/40 p-5 shadow-lg shadow-black/20 hover:border-brand-400/60 transition"
          >
            <div className="h-10 w-10 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-300 font-semibold mb-4">
              •
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-white">Podaci o poslovanju</h2>
        <div className="space-y-3">
          {businessInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 rounded-xl border border-white/10 bg-surface-800/50 px-4 py-3"
            >
              <span className="text-sm uppercase tracking-wide text-slate-500">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="text-lg text-brand-300 hover:text-brand-200 transition">
                  {item.value}
                </a>
              ) : (
                <span className="text-lg text-slate-200">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
