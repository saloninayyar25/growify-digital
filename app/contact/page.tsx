import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { services, site } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Contact Growify: book a growth review",
  description: "Book a 30-minute growth review with a Growify strategist, or reach us on WhatsApp, phone or email. Chattarpur, New Delhi.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const sp = await searchParams;
  const preset = sp.service && (services.some((s) => s.slug === sp.service) || sp.service === "lookify") ? sp.service : undefined;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Book a growth review." lede="Thirty minutes with a senior strategist. We look at your store, media and sales desk, then give you three priorities, whether or not we work together." />
      <section className="section">
        <div className="wrap enquiry-grid">
          <div>
            <h2 style={{ fontSize: "1.8rem" }}>Prefer to talk now?</h2>
            <ul className="contact-list">
              <li>WhatsApp or call: <a href={`tel:${site.phoneHref}`} data-track="contact_click" data-track-label="contact_phone">{site.phone}</a> (<a href={site.whatsapp} target="_blank" rel="noopener noreferrer" data-track="contact_click" data-track-label="contact_whatsapp">open WhatsApp</a>)</li>
              <li>Email: <a href={`mailto:${site.email}`} data-track="contact_click" data-track-label="contact_email">{site.email}</a></li>
              <li>Visit: Growify Digital LLP, {site.address.street}, {site.address.city}</li>
            </ul>
            <div className="panel" style={{ marginTop: 32 }}>
              <h3>What happens next</h3>
              <ol className="steps" style={{ marginTop: 12 }}>
                <li><div><b>We reply within a working day</b><p>With two or three slots for the review.</p></div></li>
                <li><div><b>We study your brand first</b><p>Store, ads library, search presence and enquiry flow.</p></div></li>
                <li><div><b>You get three priorities</b><p>Written up after the call, yours to keep.</p></div></li>
              </ol>
            </div>
          </div>
          <EnquiryForm preset={preset} source="contact" />
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
