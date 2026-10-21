import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Careers at Growify: e-commerce, marketing and AI roles in Delhi",
  description: "Join Growify in Chattarpur, New Delhi. Roles across Shopify development, performance marketing, CRM and sales, creative and AI.",
  path: "/careers",
});

const teams = [
  { name: "Commerce and Shopify", body: "Designers and developers building storefronts for luxury labels." },
  { name: "Performance marketing", body: "Media buyers and analysts running Meta and Google for high-AOV brands." },
  { name: "CRM and sales", body: "Sales specialists handling enquiries across WhatsApp, Instagram and calls, across time zones." },
  { name: "Creative and social", body: "Storytellers, designers and content creators for fashion and jewellery." },
  { name: "Data, AI and product", body: "Builders behind dashboards, automation and products like Lookify." },
  { name: "Client success", body: "Partners who own the relationship and the results." },
];

export default function CareersPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Build growth systems for brands you know." lede="We look for builders: people who move from a business problem to a working solution.">
        <div className="btn-row">
          <a href={`mailto:${site.email}?subject=Careers%20at%20Growify`} className="btn" data-track="cta_click" data-track-label="careers_apply">Send your profile</a>
          <Link href="/life-at-growify" className="btn ghost">Take the office tour</Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Teams</h2><p>Open roles will be listed here from the ATS feed. Until then, write to us with the team you want to join.</p></div>
          <div className="grid-3">{teams.map((t) => <div key={t.name} className="tile"><h3>{t.name}</h3><p>{t.body}</p></div>)}</div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
