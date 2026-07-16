const services = [
  {
    icon: "Rx",
    title: "Prescription medicines",
    description: "Call ahead to check the availability of your prescribed medicine before visiting.",
    tone: "mint",
  },
  {
    icon: "+",
    title: "Over-the-counter care",
    description: "Everyday pharmacy products for common health and wellness needs.",
    tone: "sky",
  },
  {
    icon: "○",
    title: "Health essentials",
    description: "Personal care, first-aid, and practical items for home and family.",
    tone: "sand",
  },
];

const essentials = [
  { number: "01", title: "Everyday wellness", description: "Vitamins, supplements, and general wellness essentials." },
  { number: "02", title: "Cold & allergy", description: "Common seasonal products—call to confirm current stock." },
  { number: "03", title: "Home & personal care", description: "First-aid and personal-care items for everyday needs." },
];

const PHONE_LINK = "tel:+94771184083";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Iresha+Pharmacy+Puttalam+Road+Wennappuwa+Sri+Lanka";

export default function Home() {
  return (
    <main id="top">
      <div className="local-banner">
        <p>Wennappuwa, Puttalam District</p>
        <a href={PHONE_LINK}>Call 077 118 4083</a>
      </div>

      <header className="site-header shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Iresha Pharmacy home">
          <span className="brand-mark" aria-hidden="true">+</span>
          <span><strong>Iresha Pharmacy</strong><small>ඉරේෂා ෆාමසි</small></span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#essentials">Essentials</a>
          <a href="#location">Location</a>
        </nav>
        <a className="call-pill" href={PHONE_LINK}>Call 077 118 4083</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Puttalam Road · Wennappuwa</p>
            <h1 id="hero-title">Trusted pharmacy care, close to home.</h1>
            <p className="hero-lede">Prescription medicines and everyday health essentials for the Wennappuwa community.</p>
            <p className="sinhala-line" lang="si">ඔබේ පවුලේ සුවසෙතට විශ්වාසනීය සේවාව.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={PHONE_LINK}>Call the pharmacy</a>
              <a className="button button-secondary" href={MAP_LINK} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
            </div>
            <div className="trust-pills" aria-label="Pharmacy information">
              <p><span aria-hidden="true">✓</span> Pharmacy in Wennappuwa</p>
              <p><span aria-hidden="true">✓</span> Medicines & health essentials</p>
              <p><span aria-hidden="true">✓</span> Call ahead for availability</p>
            </div>
          </div>

          <aside className="contact-stack" aria-label="Quick contact">
            <div className="contact-card">
              <div className="contact-topline">
                <div><p className="kicker">Need a medicine?</p><h2>Check before you travel.</h2></div>
                <span className="capsule-mark" aria-hidden="true">Rx</span>
              </div>
              <p className="contact-copy">Call Iresha Pharmacy to ask about medicine availability and current opening hours.</p>
              <a className="phone-action" href={PHONE_LINK}><span><small>Phone</small><strong>077 118 4083</strong></span><b aria-hidden="true">→</b></a>
              <div className="contact-facts">
                <p><span>Location</span><strong>Puttalam Road, Wennappuwa</strong></p>
                <p><span>Opening hours</span><strong>Please call to confirm</strong></p>
              </div>
            </div>
            <div className="road-bar">
              <span className="pin-mark" aria-hidden="true">●</span>
              <div><p>Find us</p><strong>Puttalam Road · Wennappuwa · 61170</strong></div>
              <a href={MAP_LINK} target="_blank" rel="noreferrer">Map ↗</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="service-rail shell" id="services" aria-labelledby="services-title">
        <div className="service-intro">
          <p className="kicker">At the pharmacy</p>
          <h2 id="services-title">Everyday care, made easier.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className={`service-icon ${service.tone}`} aria-hidden="true">{service.icon}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <a href={PHONE_LINK} aria-label={`Call about ${service.title}`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="community-section shell" aria-labelledby="community-title">
        <div className="community-copy">
          <p className="kicker">Local and easy to reach</p>
          <h2 id="community-title">Serving Wennappuwa from Puttalam Road.</h2>
          <p>Iresha Pharmacy is listed as a private pharmacy in Wennappuwa, within Sri Lanka&apos;s North Western Province. For the most reliable information on stock and opening times, call the pharmacy directly.</p>
          <a className="text-link" href={PHONE_LINK}>Call 077 118 4083 <span aria-hidden="true">→</span></a>
        </div>
        <div className="location-board">
          <div className="route-line" aria-hidden="true"><span /><span /><span /></div>
          <div className="location-note location-note-main">
            <p className="kicker">Your visit</p>
            <h3>Puttalam Road</h3>
            <p>Wennappuwa, Puttalam District<br />North Western Province, Sri Lanka</p>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">Open directions</a>
          </div>
          <div className="location-note location-note-small"><span aria-hidden="true">☎</span><p><strong>Save the number</strong><br />077 118 4083</p></div>
        </div>
      </section>

      <section className="essentials-section" id="essentials" aria-labelledby="essentials-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="kicker">Pharmacy essentials</p><h2 id="essentials-title">Helpful basics for everyday health.</h2></div>
            <a className="button button-secondary" href={PHONE_LINK}>Check availability</a>
          </div>
          <div className="essentials-grid">
            {essentials.map((item, index) => (
              <article className={`essential-card essential-card-${index + 1}`} key={item.title}>
                <div className="product-art" aria-hidden="true"><span>+</span></div>
                <p className="essential-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="stock-note">Product availability changes. Please call Iresha Pharmacy before travelling for a specific item.</p>
        </div>
      </section>

      <section className="about-section shell" id="location" aria-labelledby="location-title">
        <article className="identity-card">
          <div className="identity-cross" aria-hidden="true">+</div>
          <div><p className="kicker">Iresha Pharmacy</p><h2 id="location-title">A local pharmacy for Wennappuwa.</h2><p>Conveniently located along the A3 Puttalam Road corridor, serving the town&apos;s everyday medicine and pharmacy needs.</p></div>
        </article>
        <article className="visit-card">
          <div><p className="kicker">Visit or call</p><h2>Plan your pharmacy visit.</h2><address>Puttalam Road<br />Wennappuwa 61170<br />Sri Lanka</address></div>
          <dl>
            <div><dt>Phone</dt><dd><a href={PHONE_LINK}>077 118 4083</a></dd></div>
            <div><dt>District</dt><dd>Puttalam</dd></div>
            <div><dt>Hours</dt><dd>Call to confirm</dd></div>
          </dl>
          <a className="button button-primary" href={MAP_LINK} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </article>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">+</span><span><strong>Iresha Pharmacy</strong><small>Puttalam Road, Wennappuwa</small></span></a><p>Prescription medicines and everyday pharmacy essentials in Wennappuwa.</p></div>
          <div className="footer-links"><a href="#services">Services</a><a href="#essentials">Essentials</a><a href="#location">Location</a><a href={PHONE_LINK}>Call 077 118 4083</a></div>
        </div>
        <div className="shell footer-bottom"><p>© 2026 Iresha Pharmacy</p><p>For emergencies, contact your local emergency service.</p></div>
      </footer>
    </main>
  );
}
