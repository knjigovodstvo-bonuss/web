import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bonuss — Accounting & Bookkeeping",
  description: "Professional bookkeeping for small businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container flex items-center justify-between h-16">
            <Link href="/" className="font-semibold text-brand-700">Bonuss</Link>
            <ul className="flex gap-6 text-sm">
              <li><Link href="/o-nama" className="hover:text-brand-700">O nama</Link></li>
              <li><Link href="/cjenik" className="hover:text-brand-700">Cjenik</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-700">Kontakt</Link></li>
              <li><Link href="/privatnost" className="hover:text-brand-700">Privatnost</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t mt-16">
          <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Bonuss</p>
            <p className="text-gray-500">Izrada: Mihaela MJ</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
