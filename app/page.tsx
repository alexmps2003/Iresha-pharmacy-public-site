"use client";

import { useState, type FormEvent } from "react";

const services = [
  {
    icon: "↻",
    title: "Prescription refills",
    description: "Request in minutes, then choose pickup or local delivery.",
    action: "Start a refill",
    href: "#refill",
    tone: "mint",
  },
  {
    icon: "✦",
    title: "Vaccinations",
    description: "Flu, COVID-19, shingles, and routine vaccines.",
    action: "Plan your visit",
    href: "#visit",
    tone: "sky",
  },
  {
    icon: "+",
    title: "Medication reviews",
    description: "One-to-one guidance for a simpler medication routine.",
    action: "Call a pharmacist",
    href: "tel:+15550144300",
    tone: "sand",
  },
];

const wellness = [
  { number: "01", title: "Daily vitamins", description: "Practical picks selected with pharmacist guidance." },
  { number: "02", title: "Cold & allergy", description: "Relief for the season, without the guesswork." },
  { number: "03", title: "Home health", description: "First aid, monitoring, and everyday essentials." },
];

export default function Home() {
  const [refillReady, setRefillReady] = useState(false);

  function handleRefill(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRefillReady(true);
  }

  return (
    <main id="top">
      <header className="site-header shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Harbor Health Pharmacy home">
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>Harbor Health Pharmacy</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#wellness">Wellness</a>
          <a href="#about">About</a>
        </nav>
        <a className="call-pill" href="tel:+15550144300">Call (555) 014-4300</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Your neighborhood pharmacy</p>
            <h1 id="hero-title">Care that feels close to home.</h1>
            <p className="hero-lede">
              Prescriptions, everyday wellness, and trusted advice—ready when you need it.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#refill">Refill a prescription</a>
              <a className="button button-secondary" href="#wellness">Shop wellness</a>
            </div>
            <div className="trust-pills" aria-label="Pharmacy benefits">
              <p><span aria-hidden="true">✓</span> Same-day pickup</p>
              <p><span aria-hidden="true">✓</span> Licensed pharmacists</p>
              <p><span aria-hidden="true">✓</span> Free local delivery</p>
            </div>
          </div>

          <div className="refill-stack" id="refill">
            <form className="quick-refill" onSubmit={handleRefill}>
              <div className="form-topline">
                <div>
                  <p className="kicker">Quick refill</p>
                  <h2>Ready in a few taps.</h2>
                </div>
                <span className="capsule-mark" aria-hidden="true">Rx</span>
              </div>
              <div className="form-fields">
                <label>
                  Prescription number
                  <input name="prescription" inputMode="numeric" placeholder="RX 000000" required />
                </label>
                <label>
                  Date of birth
                  <input name="birthDate" inputMode="numeric" placeholder="MM / DD / YYYY" required />
                </label>
              </div>
              <button className="button button-primary form-button" type="submit">Prepare my refill <span aria-hidden="true">→</span></button>
              <p className="form-privacy">This preview does not transmit or store health information.</p>
              {refillReady && (
                <div className="refill-result" role="status" aria-live="polite">
                  <span aria-hidden="true">✓</span>
                  <p>Details prepared. <a href="tel:+15550144300">Call (555) 014-4300</a> to complete your refill securely.</p>
                </div>
              )}
            </form>
            <div className="hours-bar">
              <span className="clock-mark" aria-hidden="true">◷</span>
              <div><p>Store hours</p><strong>Mon–Fri 8am–8pm · Sat–Sun 9am–5pm</strong></div>
              <p className="open-status"><span aria-hidden="true" /> Open today</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-rail shell" id="services" aria-labelledby="services-title">
        <div className="service-intro">
          <p className="kicker">Pharmacy services</p>
          <h2 id="services-title">Simple care, all in one place.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className={`service-icon ${service.tone}`} aria-hidden="true">{service.icon}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <a href={service.href} aria-label={`${service.action}: ${service.title}`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="care-section shell" aria-labelledby="care-title">
        <div className="care-copy">
          <p className="kicker">Care, on your terms</p>
          <h2 id="care-title">A clearer path to feeling your best.</h2>
          <p>
            No rushed conversations or confusing next steps. Our pharmacists make time for the questions that matter and help coordinate care around your life.
          </p>
          <a className="text-link" href="tel:+15550144300">Talk with a pharmacist <span aria-hidden="true">→</span></a>
        </div>
        <div className="care-board">
          <div className="care-board-orbit" aria-hidden="true" />
          <div className="care-note care-note-main">
            <p className="kicker">A little extra care</p>
            <h3>Medication sync</h3>
            <p>One pickup date for your regular prescriptions, with friendly reminders before they’re ready.</p>
            <a href="tel:+15550144300">Ask us to get started</a>
          </div>
          <div className="care-note care-note-small"><span aria-hidden="true">✓</span><p><strong>Free delivery</strong><br />Within 5 local miles</p></div>
        </div>
      </section>

      <section className="wellness-section" id="wellness" aria-labelledby="wellness-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="kicker">Everyday wellness</p><h2 id="wellness-title">Useful essentials.<br />Thoughtfully chosen.</h2></div>
            <a className="button button-secondary" href="tel:+15550144300">Ask about availability</a>
          </div>
          <div className="wellness-grid">
            {wellness.map((item, index) => (
              <article className={`wellness-card wellness-card-${index + 1}`} key={item.title}>
                <div className="product-art" aria-hidden="true"><span>+</span></div>
                <p className="wellness-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section shell" id="about" aria-labelledby="about-title">
        <article className="pharmacist-card">
          <div className="quote-mark" aria-hidden="true">“</div>
          <blockquote>
            <p id="about-title">Good pharmacy care starts with listening.</p>
            <footer><strong>Dr. Maya Patel, PharmD</strong><span>Pharmacy manager · Harbor Health</span></footer>
          </blockquote>
        </article>
        <article className="visit-card" id="visit">
          <div><p className="kicker">Visit us</p><h2>Close by. Easy to reach.</h2><address>128 Harbor Street<br />Riverton, NY 10014</address></div>
          <dl>
            <div><dt>Phone</dt><dd><a href="tel:+15550144300">(555) 014-4300</a></dd></div>
            <div><dt>Weekdays</dt><dd>8am–8pm</dd></div>
            <div><dt>Weekends</dt><dd>9am–5pm</dd></div>
          </dl>
          <a className="button button-primary" href="https://maps.google.com/?q=128+Harbor+Street+Riverton+NY+10014" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </article>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">+</span><span>Harbor Health Pharmacy</span></a><p>Independent care for prescriptions, wellness, and everyday life.</p></div>
          <div className="footer-links"><a href="#services">Services</a><a href="#wellness">Wellness</a><a href="#about">About us</a><a href="tel:+15550144300">Call the pharmacy</a></div>
        </div>
        <div className="shell footer-bottom"><p>© 2026 Harbor Health Pharmacy</p><p>For medical emergencies, call 911.</p></div>
      </footer>
    </main>
  );
}
