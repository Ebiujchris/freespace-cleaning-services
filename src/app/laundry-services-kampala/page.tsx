import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Leaf,
  MapPin,
  Phone,
  Shirt,
  Sparkles,
} from "lucide-react";
import QuoteForm from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Laundry Services Kampala | FreshSpace Laundry & Cleaning",
  description:
    "Looking for laundry cleaners in Kampala? FreshSpace offers laundry cleaning and ironing for homes across Kampala and Wakiso. Request an estimate.",
  keywords: [
    "laundry cleaners Kampala",
    "laundry services in Kampala",
    "laundry and ironing Kampala",
    "laundry cleaning Wakiso",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laundry and ironing services in Kampala and Wakiso",
  serviceType: "Laundry cleaning and ironing",
  provider: {
    "@type": "Organization",
    name: "FreshSpace Laundry & Cleaning Services",
  },
  areaServed: [
    { "@type": "City", name: "Kampala" },
    { "@type": "AdministrativeArea", name: "Wakiso" },
  ],
};

const laundryCare = [
  {
    icon: Shirt,
    title: "Laundry, handled with care",
    description:
      "Get help with everyday laundry so clothes and household linens are ready to wear or put away.",
  },
  {
    icon: Sparkles,
    title: "Ironing for a finished feel",
    description:
      "Add ironing when you want workwear, school clothes, or other pieces looking neat and ready.",
  },
  {
    icon: BadgeCheck,
    title: "A service that fits your week",
    description:
      "Tell us about the load, your area, and preferred timing. We will confirm the scope and estimate with you.",
  },
];

export default function LaundryServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="service-strip">
        <div className="container strip-inner">
          <span><MapPin size={13} /> Kampala &amp; Wakiso, Uganda</span>
          <span className="strip-note">Laundry and ironing, made easier.</span>
          <a href="tel:+256700123456"><Phone size={13} /> +256 700 123 456</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="FreshSpace home">
            <span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span>
            <span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/laundry-services-kampala">Laundry</Link>
            <Link href="/#approach">Our approach</Link>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+256700123456"><Phone size={15} /> Call us</a>
            <a className="button button-small button-green" href="#laundry-quote">Get an estimate <ArrowRight size={15} /></a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid laundry-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line"></span> Laundry care, close to home</p>
              <h1>Laundry services in <span>Kampala.</span></h1>
              <p className="hero-description">Make laundry day feel lighter. FreshSpace offers laundry cleaning and ironing for homes across Kampala and Wakiso, with an estimate confirmed around your needs.</p>
              <div className="hero-actions">
                <a className="button button-green" href="#laundry-quote">Request laundry service <ArrowRight size={17} /></a>
                <Link className="text-link" href="/#services">All cleaning services <ArrowRight size={16} /></Link>
              </div>
              <div className="hero-note"><span className="note-icon"><BadgeCheck size={19} /></span><span><strong>Serving Kampala &amp; Wakiso</strong><small>Share your area and preferred date to get started.</small></span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo laundry-hero-photo" role="img" aria-label="Freshly laundered linen ready to be folded" />
              <div className="photo-tag"><span className="tag-leaf"><Sparkles size={17} /></span><span><strong>A little more breathing room</strong><small>Let us take laundry off your list.</small></span></div>
              <div className="photo-caption"><span className="caption-dot"></span> FRESH, FOLDED, READY</div>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Laundry service details">
          <div className="container trust-grid laundry-trust-grid">
            <article className="trust-item"><span className="trust-icon"><Shirt size={21} /></span><div><h2>Everyday laundry</h2><p>Care for the clothing and linens you use most.</p></div></article>
            <article className="trust-item"><span className="trust-icon"><Sparkles size={21} /></span><div><h2>Ironing available</h2><p>Add a neat finish for the pieces that need it.</p></div></article>
            <article className="trust-item"><span className="trust-icon"><MapPin size={21} /></span><div><h2>Local service area</h2><p>Request service in Kampala and Wakiso.</p></div></article>
          </div>
        </section>

        <section className="section-pad laundry-details">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow"><span className="eyebrow-line"></span> More time for your day</p><h2>Laundry care,<br /><span>made personal.</span></h2></div>
              <p className="steps-intro">From your weekly clothes to the ironing pile that keeps growing, tell us what would make laundry easier and we will work out the details with you.</p>
            </div>
            <div className="steps-grid laundry-care-grid">
              {laundryCare.map(({ icon: Icon, title, description }, index) => (
                <article className="step-card" key={title}>
                  <span className="step-number">0{index + 1} <span></span></span>
                  <Icon size={23} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section laundry-approach">
          <div className="approach-photo laundry-approach-photo" role="img" aria-label="Fresh laundry arranged neatly in a clean home" />
          <div className="approach-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> Simple from the start</p>
            <h2>Tell us about<br /><span>your laundry.</span></h2>
            <p className="approach-description">Let us know your location, the laundry or ironing you need, and when you would like help. We will review the request and confirm availability and pricing before anything is booked.</p>
            <ul className="approach-list">
              <li><Check size={16} /> Request a one-time or regular service</li>
              <li><Check size={16} /> Get an estimate before confirming</li>
              <li><Check size={16} /> Speak directly with our team on WhatsApp</li>
            </ul>
            <a className="button button-light" href="#laundry-quote">Get a laundry estimate <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="quote-section laundry-quote-section" id="laundry-quote">
          <div className="quote-decor decor-one"></div><div className="quote-decor decor-two"></div>
          <div className="container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> Laundry service in Kampala</p>
              <h2>Let’s lighten<br /><span>laundry day.</span></h2>
              <p>Tell us what needs washing or ironing and where you are. We will prepare a starting estimate and confirm the service details with you.</p>
              <div className="quote-contact"><span className="contact-icon"><Phone size={17} /></span><span><small>Prefer to talk?</small><a href="tel:+256700123456">+256 700 123 456</a></span></div>
              <div className="coverage-note"><MapPin size={16} /><span>Currently welcoming requests in Kampala and Wakiso.</span></div>
            </div>
            <QuoteForm initialService="laundry" />
          </div>
        </section>

        <section className="laundry-faq section-pad">
          <div className="container laundry-faq-layout">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> Laundry questions</p><h2>Good to <span>know.</span></h2></div>
            <div className="laundry-faq-list">
              <details><summary>What laundry services can I request?</summary><p>Request laundry cleaning, folding, and ironing. Include any preferences in your WhatsApp message so the team can confirm the scope.</p></details>
              <details><summary>Which areas do you serve?</summary><p>FreshSpace is currently welcoming laundry and cleaning requests across Kampala and Wakiso. Share your neighborhood so the team can confirm availability.</p></details>
              <details><summary>How much does laundry service cost?</summary><p>The estimate depends on the size of the load and the service requested. Send the details through the form and FreshSpace will confirm pricing before booking.</p></details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><Link className="brand brand-footer" href="/"><span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span><span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span></Link><p>FreshSpace Laundry &amp; Cleaning Services for Kampala and Wakiso.</p><span className="footer-location"><MapPin size={14} /> Kampala &amp; Wakiso, Uganda</span></div>
          <div className="footer-links"><h2>Explore</h2><Link href="/">Home</Link><Link href="/#services">All services</Link><a href="#laundry-quote">Get a laundry estimate</a></div>
          <div className="footer-links"><h2>Get in touch</h2><a href="tel:+256700123456">+256 700 123 456</a><a href="mailto:hello@freshspace.ug">hello@freshspace.ug</a><span>Monday – Saturday<br />8:00 am – 6:00 pm</span></div>
          <a className="footer-cta" href="#laundry-quote"><span>Ready for laundry day?</span><strong>Let’s talk <ArrowRight size={17} /></strong></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 FreshSpace Laundry &amp; Cleaning Services</span><span>Clean spaces. A little more breathing room.</span></div>
      </footer>
    </>
  );
}