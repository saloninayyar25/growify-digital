import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CaseCard from "@/components/CaseCard";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { getCase, getService, lc, partners, services, site } from "@/lib/content";
import { breadcrumbLd, faqLd, meta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) return {};
  return meta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: s.name, path: `/services/${s.slug}` }];
  const work = s.relatedWork.map(getCase).filter(Boolean);
  const tools = s.tools.map((t) => partners.find((p) => p.name.startsWith(t.split(" ")[0])) ?? { name: t, note: "" });
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero crumbs={crumbs} title={s.name} lede={s.promise} letter={s.letter === "+" ? "AI" : s.letter}>
        <div className="btn-row">
          <a href="#enquire" className="btn" data-track="cta_click" data-track-label={`service_hero_${s.slug}`}>Book a growth review</a>
          {work[0] && <Link href={`/work/${work[0]!.slug}`} className="btn ghost">See it in action</Link>}
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>The problem we solve</h2>
            <p className="lede" style={{ marginTop: 16 }}>{s.problem}</p>
          </div>
          <div className="panel">
            <h3>What&apos;s included</h3>
            <ul className="checklist" style={{ marginTop: 18 }}>{s.includes.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap split">
          <div>
            <h2>How we work</h2>
            <p className="muted" style={{ marginTop: 16, maxWidth: "44ch" }}>Every engagement follows the same sequence, so you always know what happens next and who owns it.</p>
          </div>
          <ol className="steps">{s.process.map((p) => <li key={p.title}><div><b>{p.title}</b><p>{p.body}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: 24 }}>Platforms we use for this</h2>
          <div className="tags">{tools.map((t) => <Link key={t.name} href="/partners" className="tag" style={{ fontSize: "1rem", padding: "8px 16px" }}>{t.name}</Link>)}</div>
        </div>
      </section>

      {work.length > 0 && (
        <section className="section" style={{ background: "var(--lilac)" }}>
          <div className="wrap">
            <div className="head"><h2>Results from this service</h2><p>Case studies where {lc(s.name)} was part of the system.</p></div>
            <div className="case-grid">{work.map((c) => <CaseCard key={c!.slug} c={c!} />)}</div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap split">
          <h2>Questions brands ask us</h2>
          <div>{s.faqs.map((f) => <details key={f.q} className="faq"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="enquiry section" id="enquire">
        <div className="wrap enquiry-grid">
          <div>
            <h2>Talk to a {lc(s.name)} specialist.</h2>
            <p className="lede" style={{ marginTop: 16 }}>Tell us about your brand. A specialist in {lc(s.name)} will reply within one working day.</p>
            <h3 style={{ marginTop: 36 }}>Connected stages</h3>
            <ul className="contact-list">{others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`} className="link">{o.stage}: {o.name}</Link></li>)}</ul>
          </div>
          <EnquiryForm preset={s.slug} source={`service_${s.slug}`} />
        </div>
      </section>

      <JsonLd data={[
        breadcrumbLd(crumbs),
        faqLd(s.faqs),
        { "@context": "https://schema.org", "@type": "Service", name: s.name, serviceType: s.name, description: s.metaDescription, provider: { "@id": `${site.url}/#org` }, areaServed: ["IN", "US", "AE", "GB", "CA"], audience: { "@type": "BusinessAudience", audienceType: "Luxury fashion, couture and fine jewellery brands" } },
      ]} />
    </>
  );
}
