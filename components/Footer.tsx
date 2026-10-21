import Link from "next/link";
import { services, site, industries } from "@/lib/content";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo"><LogoMark />growify</Link>
            <p style={{ marginTop: 16, maxWidth: "34ch" }}>
              Growth, commerce, AI and products for luxury, couture and fine jewellery brands. {site.tagline}
            </p>
            <p className="small">
              {site.address.street}, {site.address.city}
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Industries</h3>
            <ul>
              {industries.map((i) => (
                <li key={i.slug}><Link href={`/industries/${i.slug}`}>{i.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link href="/work">Case studies</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/partners">Partners and integrations</Link></li>
              <li><Link href="/about">About and leadership</Link></li>
              <li><Link href="/life-at-growify">Life at Growify</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3>Talk to us</h3>
            <ul>
              <li><a href={`mailto:${site.email}`} data-track="contact_click" data-track-label="footer_email">{site.email}</a></li>
              <li><a href={`tel:${site.phoneHref}`} data-track="contact_click" data-track-label="footer_phone">{site.phone}</a></li>
              <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" data-track="contact_click" data-track-label="footer_whatsapp">WhatsApp us</a></li>
              <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-legal">
          <span>© {new Date().getFullYear()} Growify Digital LLP. Redesign prototype, not the live growify.in site.</span>
          <Link href="/strategy">Strategy and implementation notes</Link>
        </div>
      </div>
    </footer>
  );
}
