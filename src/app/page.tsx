import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  House,
  Leaf,
  MapPin,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
} from "lucide-react";
import QuoteForm from "@/components/quote-form";

const services = [
  {
    number: "01",
    name: "Laundry & ironing",
    detail: "Freshly washed, neatly folded laundry, with ironing when you need it.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Fresh towels and linen after laundry care",
    icon: Sparkles,
  },
  {
    number: "02",
    name: "Home cleaning",
    detail: "A thoughtful reset for the rooms you live in every day.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A professional cleaner caring for a bright home",
    icon: House,
  },
  {
    number: "03",
    name: "Office cleaning",
    detail: "A fresh, ready-for-work environment for your whole team.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A clean, sunlit modern office",
    icon: Building2,
  },
  {
    number: "04",
    name: "Deep cleaning",
    detail: "Extra attention for the overlooked corners and surfaces.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Cleaning tools prepared for a detailed clean",
    icon: Sparkles,
  },
  {
    number: "05",
    name: "Move-in & move-out",
    detail: "Leave your old place right, or start well in your new one.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A freshly prepared home ready for its next chapter",
    icon: SprayCan,
  },
  {
    number: "06",
    name: "Roof & exterior",
    detail: "Exterior and gutter care for a well-kept property all around.",
    image:
      "https://images.unsplash.com/photo-1635424710928-3d5f8f7f3c9d?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A professional carrying out exterior property maintenance",
    icon: House,
  },
];

const standards = [
  {
    icon: ShieldCheck,
    title: "People you can trust",
    detail: "Respectful, uniformed professionals in your space.",
  },
  {
    icon: CalendarDays,
    title: "Your schedule, respected",
    detail: "Choose a time that works for your home or business.",
  },
  {
    icon: Leaf,
    title: "A considered clean",
    detail: "Careful products and attention to the details that matter.",
  },
];

export default function Home() {
  return (
    <>
      <div className="service-strip">
        <div className="container strip-inner">
          <span><MapPin size={13} /> Kampala &amp; Wakiso, Uganda</span>
          <span className="strip-note">A cleaner space starts with one conversation.</span>
          <a href="tel:+256700123456"><Phone size={13} /> +256 700 123 456</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="FreshSpace home">
            <span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span>
            <span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="/laundry-services-kampala">Laundry</a>
            <a href="#approach">Our approach</a>
            <a href="#quote">Service areas</a>
          </nav>
          <div className="header-actions">
            <a className="button button-small button-green header-call" href="tel:+256700123456"><Phone size={15} /> Call us</a>
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="/laundry-services-kampala">Laundry</a>
              <a href="#approach">Our approach</a>
              <a href="#quote">Service areas</a>
              <a href="#quote">Get a quote <ArrowRight size={15} /></a>
            </nav>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line"></span> A cleaner kind of care</p>
              <h1>Laundry services in <span>Kampala.</span></h1>
              <p className="hero-description">Laundry cleaning and ironing, alongside thoughtful home and office care across Kampala and Wakiso. Local people, dependable service, and a fresh start for your space.</p>
              <div className="hero-actions">
                <a className="button button-green" href="/laundry-services-kampala">Explore laundry care <ArrowRight size={17} /></a>
                <a className="text-link" href="#services">All cleaning services <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-icon"><BadgeCheck size={19} /></span><span><strong>Locally rooted. Professionally ready.</strong><small>Serving homes and businesses across Kampala &amp; Wakiso.</small></span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo" role="img" aria-label="A cleaner refreshing a comfortable, sunlit home" />
              <div className="photo-tag"><span className="tag-leaf"><Sparkles size={17} /></span><span><strong>Make room for living</strong><small>We’ll take care of the clean.</small></span></div>
              <div className="photo-caption"><span className="caption-dot"></span> FRESH SPACE, EVERY DAY</div>
            </div>
            <div className="hero-index"><span>01</span><span className="index-rule"></span><span>04</span></div>
          </div>
        </section>

        <section className="trust-band" aria-label="Our service standards">
          <div className="container trust-grid">
            {standards.map(({ icon: Icon, title, detail }) => (
              <article className="trust-item" key={title}>
                <span className="trust-icon"><Icon size={21} strokeWidth={1.8} /></span>
                <div><h2>{title}</h2><p>{detail}</p></div>
              </article>
            ))}
            <a className="trust-link" href="#approach">The FreshSpace way <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading services-heading">
              <div><p className="eyebrow"><span className="eyebrow-line"></span> A place for everything</p><h2>Good clean.<br /><span>Good feeling.</span></h2></div>
              <div className="heading-aside"><p>From your first cup of coffee to your last meeting of the day, we help keep your space feeling its best.</p><a className="text-link" href="#quote">Find your kind of clean <ArrowRight size={16} /></a></div>
            </div>
            <div className="service-grid">
              {services.map(({ number, name, detail, image, imageAlt, icon: Icon }) => (
                  <a className="service-card" href={name === "Laundry & ironing" ? "/laundry-services-kampala" : "#quote"} key={name}>
                  <div className="service-photo" role="img" aria-label={imageAlt} style={{ backgroundImage: `url('${image}')` }}>
                    <span className="service-number">{number}</span>
                    <span className="service-icon"><Icon size={18} /></span>
                  </div>
                  <div className="service-card-copy"><div><h3>{name}</h3><p>{detail}</p></div><span className="service-arrow"><ArrowRight size={17} /></span></div>
                </a>
              ))}
            </div>
            <div className="services-foot"><span>Not sure what you need?</span><a href="#quote">Tell us a little about your space <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-photo" role="img" aria-label="Careful hands polishing a clean surface" />
          <div className="approach-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> More than a checklist</p>
            <h2>Care shows<br />in the <span>details.</span></h2>
            <p className="approach-description">A good clean is personal. We take time to understand your space, agree on what matters, and leave things feeling considered, calm, and ready for what comes next.</p>
            <ul className="approach-list">
              <li><Check size={16} /> A clear plan before we arrive</li>
              <li><Check size={16} /> Careful attention to high-touch areas</li>
              <li><Check size={16} /> A simple handover when the work is done</li>
            </ul>
            <a className="button button-light" href="#quote">Meet your fresh start <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="steps-section section-pad">
          <div className="container">
            <div className="section-heading steps-heading"><div><p className="eyebrow"><span className="eyebrow-line"></span> Easy from the start</p><h2>Three steps to<br /><span>feeling fresh.</span></h2></div><p className="steps-intro">No guesswork, no fuss. Just a clear conversation and a clean that fits your day.</p></div>
            <div className="steps-grid">
              <article className="step-card"><span className="step-number">01 <span></span></span><CalendarDays size={23} /><h3>Tell us what you need</h3><p>Share a few details about your space, preferred date, and the kind of clean you have in mind.</p></article>
              <article className="step-card"><span className="step-number">02 <span></span></span><MessagesSquare size={23} /><h3>Get a clear estimate</h3><p>We’ll review the details with you and confirm the right scope and final price before scheduling.</p></article>
              <article className="step-card"><span className="step-number">03 <span></span></span><Sparkles size={23} /><h3>Enjoy the reset</h3><p>Our team arrives ready to work, with care for your space and a thoughtful final check.</p></article>
            </div>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="quote-decor decor-one"></div><div className="quote-decor decor-two"></div>
          <div className="container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> Your space, your way</p>
              <h2>Let’s make<br />room for <span>better.</span></h2>
              <p>Tell us a little about your clean. We’ll prepare a starting estimate, then confirm all the details with you personally.</p>
              <div className="quote-contact"><span className="contact-icon"><Phone size={17} /></span><span><small>Prefer to talk?</small><a href="tel:+256700123456">+256 700 123 456</a></span></div>
              <div className="coverage-note"><MapPin size={16} /><span>Currently welcoming requests in Kampala and Wakiso.</span></div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="closing-band">
          <div className="container closing-inner"><span className="closing-mark"><Leaf size={25} /></span><div><p>There’s a little more room to breathe.</p><span>Let’s find the right clean for your space.</span></div><a className="button button-green" href="#quote">Start a conversation <ArrowRight size={16} /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span><span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span></a><p>Laundry and thoughtful cleaning for the spaces that make your day.</p><span className="footer-location"><MapPin size={14} /> Kampala &amp; Wakiso, Uganda</span></div>
          <div className="footer-links"><h2>Explore</h2><a href="#services">Our services</a><a href="#approach">Our approach</a><a href="#quote">Get an estimate</a></div>
          <div className="footer-links"><h2>Get in touch</h2><a href="tel:+256700123456">+256 700 123 456</a><a href="mailto:hello@freshspace.ug">hello@freshspace.ug</a><span>Monday – Saturday<br />8:00 am – 6:00 pm</span></div>
          <a className="footer-cta" href="#quote"><span>Have a space in mind?</span><strong>Let’s talk <ArrowRight size={17} /></strong></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 FreshSpace Laundry &amp; Cleaning Services</span><span>Clean spaces. A little more breathing room.</span></div>
      </footer>
    </>
  );
}
