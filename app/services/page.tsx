import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Services: Shopify, performance marketing, WhatsApp, sales and SEO",
  description: "Growify's SCALE system for luxury brands: Shopify builds, Meta and Google ads, WhatsApp and email retention, sales desks, SEO, and a data and AI layer underneath.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="We don't sell services. We scale brands online." lede="Five connected stages, one accountable team. Start with the stage that hurts most; we connect the rest as you grow." />
      <section className="section">
        <div className="wrap grid-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="tile" data-track="service_click" data-track-label={s.slug}>
              <span className="letter" aria-hidden="true">{s.letter}</span>
              <span className="tags"><span className="tag">{s.stage}</span>{s.signature && <span className="tag mint">Signature</span>}</span>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand label="services_cta" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
