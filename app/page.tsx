const services = [
  {
    icon: "Rx",
    title: "Prescription medicines",
    description:
      "Check the availability of your prescribed medicine before visiting.",
    tone: "mint",
  },
  {
    icon: "+",
    title: "Over-the-counter care",
    description:
      "Everyday pharmacy products for common health and wellness needs.",
    tone: "sky",
  },
  {
    icon: "○",
    title: "Health essentials",
    description:
      "Personal care, first-aid, and practical items for home and family.",
    tone: "teal",
  },
];

const essentials = [
  {
    title: "Everyday wellness",
    description: "Vitamins, supplements, and general wellness essentials.",
  },
  {
    title: "Cold and allergy",
    description: "Common seasonal products; stock can vary from day to day.",
  },
  {
    title: "Home and personal care",
    description: "First-aid and personal-care items for everyday needs.",
  },
];

const PHONE_NUMBER = "071 425 0895";
const PHONE_LINK = "tel:+94714250895";
const WHATSAPP_LINK = "https://wa.me/94714250895";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Iresha+Pharmaceuticals+No.+81%2F1+Chilaw+Road+Wennappuwa+Sri+Lanka";
const EMBED_MAP_LINK =
  "https://www.google.com/maps?q=Iresha+Pharmaceuticals%2C+No.+81%2F1+Chilaw+Road%2C+Wennappuwa%2C+Sri+Lanka&output=embed";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <main id="top">
        <div className="local-banner">
          <p>No. 81/1, Chilaw Road · Wennappuwa</p>
        </div>

        <header className="site-header shell">
          <a className="brand" href="#top" aria-label="Iresha Pharmaceuticals home">
            <span className="brand-mark" aria-hidden="true">
              +
            </span>
            <span>
              <strong>Iresha Pharmaceuticals</strong>
              <small lang="si">ඉරේෂා ෆාමසියුටිකල්ස්</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#essentials">Essentials</a>
            <a href="#location">Location</a>
          </nav>
          <div className="header-actions">
            <a
              className="header-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Message Iresha Pharmaceuticals on WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                <path d="M8.2 8.1c.4 3.7 2.1 5.4 5.8 5.8" />
                <path d="m8.2 8.1 1.3-.7 1.1 2-1.1.8" />
                <path d="m14 13.9.8-1.1 2 1.1-.7 1.3" />
              </svg>
              <span className="header-whatsapp-label">WhatsApp</span>
            </a>
            <a
              className="header-directions"
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Directions <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <section className="hero" id="main-content" aria-labelledby="hero-title">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <h1 id="hero-title">Trusted pharmacy care, close to home.</h1>
              <p className="hero-lede">
                Prescription medicines and everyday health essentials for the
                Wennappuwa community.
              </p>
              <p className="sinhala-line" lang="si">
                ඔබේ පවුලේ සුවසෙතට විශ්වාසනීය සේවාව.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={PHONE_LINK}>
                  Call the pharmacy
                </a>
                <a
                  className="button button-secondary"
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="contact-stack" aria-label="Quick contact">
              <div className="contact-card">
                <div className="contact-topline">
                  <div>
                    <p className="section-label">Medicine availability</p>
                    <h2>Check before you travel.</h2>
                  </div>
                  <span className="capsule-mark" aria-hidden="true">
                    Rx
                  </span>
                </div>
                <p className="contact-copy">
                  Check the key details below before making your journey.
                </p>
                <div className="contact-facts">
                  <p>
                    <span>Phone</span>
                    <strong>{PHONE_NUMBER}</strong>
                  </p>
                  <p>
                    <span>Location</span>
                    <strong>No. 81/1, Chilaw Road, Wennappuwa</strong>
                  </p>
                  <p>
                    <span>Opening hours</span>
                    <strong>Please confirm before visiting</strong>
                  </p>
                </div>
              </div>
              <div className="road-bar">
                <span className="pin-mark" aria-hidden="true">
                  ●
                </span>
                <div>
                  <p>Find us</p>
                  <strong>No. 81/1 · Chilaw Road · Wennappuwa</strong>
                </div>
                <a href={MAP_LINK} target="_blank" rel="noreferrer">
                  Open map ↗
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="service-rail shell"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="service-intro">
            <p className="section-label">At the pharmacy</p>
            <h2 id="services-title">Everyday care, made easier.</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span
                  className={`service-icon ${service.tone}`}
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="community-section shell"
          id="location"
          aria-labelledby="location-title"
        >
          <div className="community-copy">
            <p className="section-label">Local and easy to reach</p>
            <h2 id="location-title">Find us on Chilaw Road.</h2>
            <p>
              Iresha Pharmaceuticals is at No. 81/1, Chilaw Road in Wennappuwa.
              Use the map to plan your route, and check current stock and opening
              times before visiting.
            </p>
          </div>

          <div className="location-board">
            <iframe
              className="location-map"
              src={EMBED_MAP_LINK}
              title="Map showing Iresha Pharmaceuticals on Chilaw Road in Wennappuwa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="location-panel">
              <p className="section-label">Your visit</p>
              <h3>No. 81/1, Chilaw Road</h3>
              <address>
                Chilaw–Colombo Main Road (A3)
                <br />
                Wennappuwa, Sri Lanka
              </address>
              <a href={MAP_LINK} target="_blank" rel="noreferrer">
                Open directions <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="essentials-section"
          id="essentials"
          aria-labelledby="essentials-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-label">Pharmacy essentials</p>
                <h2 id="essentials-title">
                  Helpful basics for everyday health.
                </h2>
              </div>
              <a className="button button-outline" href={PHONE_LINK}>
                Check current stock
              </a>
            </div>

            <div className="essentials-list">
              {essentials.map((item) => (
                <article className="essential-item" key={item.title}>
                  <span aria-hidden="true">+</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <p className="stock-note">
              Product availability changes. Check current stock before travelling
              for a specific item.
            </p>
          </div>
        </section>

        <section className="about-section shell" aria-labelledby="about-title">
          <article className="identity-card">
            <div className="identity-cross" aria-hidden="true">
              +
            </div>
            <div>
              <p className="section-label">Iresha Pharmaceuticals</p>
              <h2 id="about-title">A local pharmacy for Wennappuwa.</h2>
              <p>
                Conveniently located at No. 81/1, Chilaw Road, serving the
                town&apos;s everyday medicine and pharmacy needs.
              </p>
            </div>
          </article>

          <article className="visit-card">
            <div>
              <p className="section-label">Visit details</p>
              <h2>Plan your pharmacy visit.</h2>
              <address>
                No. 81/1, Chilaw Road
                <br />
                Wennappuwa
                <br />
                Sri Lanka
              </address>
            </div>
            <dl>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={PHONE_LINK}>{PHONE_NUMBER}</a>
                </dd>
              </div>
              <div>
                <dt>District</dt>
                <dd>Puttalam</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Confirm before visiting</dd>
              </div>
            </dl>
            <a
              className="button button-primary"
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </article>
        </section>

        <footer className="footer">
          <div className="shell footer-grid">
            <div>
              <a className="brand footer-brand" href="#top">
                <span className="brand-mark" aria-hidden="true">
                  +
                </span>
                <span>
                  <strong>Iresha Pharmaceuticals</strong>
                  <small>No. 81/1, Chilaw Road, Wennappuwa</small>
                </span>
              </a>
              <p>
                Prescription medicines and everyday pharmacy essentials in
                Wennappuwa.
              </p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#services">Services</a>
              <a href="#essentials">Essentials</a>
              <a href="#location">Location</a>
              <a href={MAP_LINK} target="_blank" rel="noreferrer">
                Directions ↗
              </a>
            </nav>
          </div>
          <div className="shell footer-bottom">
            <p>© 2026 Iresha Pharmaceuticals</p>
            <p>For emergencies, contact your local emergency service.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
