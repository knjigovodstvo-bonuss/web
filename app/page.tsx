import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Knjigovodstvo za poduzetnike koji žele miran san.
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Pouzdano vođenje poslovnih knjiga, PDV, plaće i savjetovanje. Transparentno, pristupačno, na vrijeme.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/kontakt" className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Zatraži ponudu</Link>
            <Link href="/cjenik" className="px-5 py-3 rounded-xl border border-gray-300 hover:border-brand-400">Pogledaj cjenik</Link>
          </div>
          <ul className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <li>✅ Fiksne cijene</li>
            <li>✅ Online proces</li>
            <li>✅ Brz odgovor</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-brand-50 to-white border rounded-2xl p-10">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 border rounded-xl bg-white">PDV prijave</div>
            <div className="p-4 border rounded-xl bg-white">Plaće i doprinosi</div>
            <div className="p-4 border rounded-xl bg-white">Financijska izvješća</div>
            <div className="p-4 border rounded-xl bg-white">Savjetovanje</div>
          </div>
        </div>
      </div>
    </section>
  )
}
