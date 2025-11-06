export const metadata = { title: "O nama — Bonuss" };

export default function AboutPage() {
  return (
    <section className="container py-16 prose">
      <h1>O nama</h1>
      <p>Bonuss je malo, posvećeno knjigovodstvo fokusirano na obrtnike, j.d.o.o. i d.o.o. Radimo transparentno i bez skrivenih troškova.</p>
      <h2>Zašto Bonuss?</h2>
      <ul>
        <li>Točni i pravovremeni izvještaji</li>
        <li>Jasna komunikacija</li>
        <li>Digitalna razmjena dokumenata</li>
      </ul>
      <h2>Podaci o poslovanju</h2>
      <ul>
        <li><strong>Naziv:</strong> Bonuss, obrt za knjigovodstvene usluge</li>
        <li><strong>Adresa:</strong> Dubrovačka 59, 21000 Split, Hrvatska</li>
        <li><strong>Telefon:</strong> <a href="tel:+385977444456">+385 97 744 44 56</a></li>
      </ul>
    </section>
  );
}
