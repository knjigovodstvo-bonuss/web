import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-[96px] font-black tracking-tight text-brand-500 mb-6 leading-none drop-shadow-[0_10px_30px_rgba(245,97,17,0.45)]">
            BONUSS
          </h1>
          <p className="uppercase text-xs tracking-[0.3em] text-slate-500 mb-6">
            Obrt za knjigovodstvene usluge
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Knjigovodstvo za poduzetnike koji žele miran san.
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            Pouzdano vođenje poslovnih knjiga, PDV, plaće i savjetovanje. Transparentno, pristupačno, na vrijeme.
          </p>
          <div className="mt-10">
            <Link
              href="/kontakt"
              className="px-6 py-3 rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 inline-block"
            >
              Zatraži ponudu
            </Link>
          </div>
          <ul className="mt-10 grid md:grid-cols-3 gap-4 text-sm text-slate-300">
            <li>✔ Fiksne cijene</li>
            <li>✔ Online proces</li>
            <li>✔ Brz odgovor</li>
          </ul>
        </div>
        <div className="bg-surface-700/60 border border-white/10 rounded-2xl p-10 shadow-2xl shadow-black/30">
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-100">
            <div className="p-4 border border-white/10 rounded-xl bg-surface-900/40">PDV prijave</div>
            <div className="p-4 border border-white/10 rounded-xl bg-surface-900/40">Plaće i doprinosi</div>
            <div className="p-4 border border-white/10 rounded-xl bg-surface-900/40">Financijska izvješća</div>
            <div className="p-4 border border-white/10 rounded-xl bg-surface-900/40">Savjetovanje</div>
          </div>
        </div>
      </div>
    </section>
  )
}
