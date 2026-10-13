import Link from "next/link";
import { ChevronDown, Leaf, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { serviceMenuLinks } from "@/lib/services";

export default function SiteHeader({ pricingHref = "/#pricing" }: { pricingHref?: string }) {
  return (
    <>
      <div className="service-strip">
        <div className="container strip-inner">
          <span><MapPin size={13} /> {business.serviceArea}</span>
          <span className="strip-note">A cleaner space starts with one conversation.</span>
          <a href={business.phoneHref}><Phone size={13} /> {business.phoneNumber}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="FreshSpace home">
            <span className="brand-mark"><Leaf size={21} strokeWidth={2.3} /></span>
            <span className="brand-copy"><strong>FreshSpace</strong><small>LAUNDRY &amp; CLEANING SERVICES</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <div className="services-nav-item">
              <Link className="services-nav-trigger" href="/#services">All services <ChevronDown size={14} /></Link>
              <div className="services-dropdown">
                <div className="services-dropdown-panel">
                  {serviceMenuLinks.map((service) => (
                    <Link href={service.href} key={service.href}>{service.label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href={pricingHref}>Pricing</Link>
            <Link href="/#approach">Our approach</Link>
          </nav>
          <div className="header-actions">
            <details className="header-call-popover">
              <summary className="button button-small button-green"><Phone size={15} /> Call us</summary>
              <div className="header-call-panel"><span>Call FreshSpace</span><a href={business.phoneHref}>{business.phoneNumber}</a></div>
            </details>
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <details className="mobile-services-menu">
                <summary>All services <ChevronDown size={14} /></summary>
                <div>{serviceMenuLinks.map((service) => <Link href={service.href} key={service.href}>{service.label}</Link>)}</div>
              </details>
              <Link href={pricingHref}>Pricing</Link>
              <Link href="/#approach">Our approach</Link>
              <Link href="/#quote">Send an enquiry</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
