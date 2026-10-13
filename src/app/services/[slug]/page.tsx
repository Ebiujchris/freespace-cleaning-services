import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { ArrowRight, BadgeCheck, Leaf, MapPin, Phone, ShieldCheck } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import SiteHeader from "@/components/site-header";
import { business } from "@/lib/business";
import { servicePages } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.name} in Kampala & Wakiso | FreshSpace`,
    description: service.description,
    keywords: [
      `${service.name.toLowerCase()} Kampala`,
      `${service.name.toLowerCase()} Wakiso`,
      `cleaning services ${service.name.toLowerCase()} Kampala`,
    ],
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Kampala and Wakiso`,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: business.name,
    },
    areaServed: [
      { "@type": "City", name: "Kampala" },
      { "@type": "AdministrativeArea", name: "Wakiso" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader pricingHref="#pricing" />
      <main>
        <div className="container service-breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/#services">All services</Link><span>/</span><span>{service.name}</span>
        </div>
        <section className="hero-section">
          <div className="container hero-grid service-detail-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line"></span> FreshSpace services</p>
              <h1>{service.name} in <span>Kampala.</span></h1>
              <p className="hero-description">{service.introduction}</p>
              <div className="hero-actions">
                <a className="button button-green" href="#service-enquiry">Ask about this service <ArrowRight size={17} /></a>
                <Link className="text-link" href="/#services">All services <ArrowRight size={16} /></Link>
              </div>
              <div className="hero-note"><span className="note-icon"><BadgeCheck size={19} /></span><span><strong>Serving Kampala &amp; Wakiso</strong><small>We confirm scope, availability, and price before booking.</small></span></div>
            </div>
            <div className="hero-visual">
              <div
                className="hero-photo service-detail-photo"
                role="img"
                aria-label={service.imageAlt}
                style={{ backgroundImage: `linear-gradient(0deg,rgba(10,35,42,.12),transparent 46%), url('${service.image}')` }}
              />
              <div className="photo-tag"><span className="tag-leaf"><ShieldCheck size={17} /></span><span><strong>Care tailored to your space</strong><small>Agree the details before we begin.</small></span></div>
            </div>
          </div>
        </section>

        <section className="section-pad service-detail-section">
          <div className="container service-detail-layout">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> What to expect</p><h2>A clear plan<br /><span>for your space.</span></h2></div>
            <div className="service-detail-copy">
              <p>{service.description}</p>
              <ul>{service.details.map((detail) => <li key={detail}><BadgeCheck size={17} />{detail}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="container pricing-inner">
            <div><p className="eyebrow"><span className="eyebrow-line"></span> Straightforward pricing</p><h2>Know the price<br /><span>before booking.</span></h2></div>
            <div className="pricing-copy"><p>Pricing depends on the service details, space, and location. Tell us what you need and we’ll confirm the scope and price with you before scheduling.</p><a className="text-link" href="#service-enquiry">Ask about pricing <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="quote-section" id="service-enquiry">
          <div className="quote-decor decor-one"></div><div className="quote-decor decor-two"></div>
          <div className="container quote-layout">
            <div className="quote-copy">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> Ask about {service.name.toLowerCase()}</p>
              <h2>Let’s discuss<br /><span>your space.</span></h2>
              <p>Send a few details and the FreshSpace team will follow up to discuss availability and pricing.</p>
              <div className="quote-contact"><span className="contact-icon"><Phone size={17} /></span><span><small>Prefer to talk?</small><a href={business.phoneHref}>{business.phoneNumber}</a></span></div>
              <div className="coverage-note"><MapPin size={16} /><span>{business.serviceArea}</span></div>
            </div>
            <QuoteForm initialService={service.formService} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><Link className="brand brand-footer" href="/"><span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span><span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span></Link><p>{business.name} in Kampala and Wakiso.</p><span className="footer-location"><MapPin size={14} />{business.serviceArea}</span></div>
          <div className="footer-links"><h2>Explore</h2><Link href="/#services">All services</Link><Link href="/#pricing">Pricing</Link><Link href="/laundry-services-kampala">Laundry &amp; ironing</Link></div>
          <div className="footer-links"><h2>Get in touch</h2><a href={business.phoneHref}>{business.phoneNumber}</a><a href={`mailto:${business.email}`}>{business.email}</a><span>{business.hours}</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 {business.name}</span><span>Clean spaces. A little more breathing room.</span></div>
      </footer>
    </>
  );
}
