import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CaseCard from "@/components/CaseCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getCase, industries, services } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return {};
  return meta({ title: `E-commerce growth for ${i.name.toLowerCase()} brands`, description: `${i.short} Shopify, performance marketing, WhatsApp sales and retention from Growify.`, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: i.name, path: `/industries/${i.slug}` }];
  const work = i.related.map(getCase).filter(Boolean);
  return (
    <>
      <PageHero crumbs={crumbs} title={`Growth for ${i.name.toLowerCase()}`} lede={i.short} />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What this category needs</h2>
            <ul className="checklist" style={{ marginTop: 20 }}>{i.needs.map((n) => <li key={n}>{n}</li>)}</ul>
            <p className="small muted" style={{ marginTop: 24 }}>Template page. Category-specific copy, FAQs and proof to be added from account teams.</p>
          </div>
          <div className="panel">
            <h3>Services that matter most here</h3>
            <ul className="contact-list" style={{ marginTop: 12 }}>{services.slice(0, 5).map((s) => <li key={s.slug}><Link className="link" href={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul>
          </div>
        </div>
      </section>
      {work.length > 0 && (
        <section className="section-tight" style={{ background: "var(--lilac)" }}>
          <div className="wrap"><h2 style={{ marginBottom: 32 }}>Related work</h2><div className="case-grid">{work.map((c) => <CaseCard key={c!.slug} c={c!} />)}</div></div>
        </section>
      )}
      <CtaBand label={`industry_${i.slug}_cta`} />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
