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
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <header className="border-b border-white/10 bg-surface-900/80 backdrop-blur">
          <nav className="container flex items-center justify-between h-16 text-sm">
            <Link href="/" className="font-semibold text-brand-400 tracking-wide">Bonuss</Link>
            <ul className="flex gap-6 text-sm text-slate-200">
              <li><Link href="/o-nama" className="hover:text-brand-300 transition-colors">O nama</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-300 transition-colors">Kontakt</Link></li>
              <li><Link href="/privatnost" className="hover:text-brand-300 transition-colors">Privatnost</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 mt-16 bg-surface-900/80">
          <div className="container py-8 text-sm text-slate-300 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Bonuss</p>
            <p className="text-slate-400">Izrada: Mihaela MJ</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
