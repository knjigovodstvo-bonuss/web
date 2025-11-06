export const metadata = { title: "Privatnost — Bonuss" };

export default function PrivacyPage() {
  return (
    <section className="container py-16 prose">
      <h1>Pravila privatnosti</h1>
      <p>Ova stranica opisuje kako prikupljamo i obrađujemo podatke pristigle putem kontakt forme.</p>
      <h2>Podaci koje prikupljamo</h2>
      <ul>
        <li>Ime i prezime</li>
        <li>E-mail adresa</li>
        <li>Poruka</li>
      </ul>
      <h2>Svrha obrade</h2>
      <p>Isključivo za odgovor na upit i izradu ponude.</p>
      <h2>Kontakt</h2>
      <p>Za zahtjeve oko privatnosti, javite se na: <a href="mailto:knjigovodstvobonuss@gmail.com">knjigovodstvobonuss@gmail.com</a></p>
    </section>
  );
}
