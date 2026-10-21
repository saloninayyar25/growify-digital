import Link from "next/link";
import { notFound } from "next/navigation";
import BarChart from "@/components/BarChart";
import CaseCard from "@/components/CaseCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { caseStudies, getCase, getService, site } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) return {};
  return meta({ title: `${c.brand}: ${c.title}`, description: `${c.summary} ${c.metrics[0].value} ${c.metrics[0].label}.`, path: `/work/${c.slug}`, image: c.image });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: c.brand, path: `/work/${c.slug}` }];
  const svc = c.services.map(getService).filter(Boolean);
  const next = caseStudies.filter((x) => x.slug !== c.slug);

  return (
    <article>
      <header className="case-hero">
        <div className="img"><img src={c.image} alt={c.imageAlt} fetchPriority="high" /></div>
        <div className="txt">
          <nav className="small muted" aria-label="Breadcrumb"><Link href="/work">Work</Link> / {c.brand}</nav>
          <span className="brand">{c.brand}</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.6vw, 4rem)" }}>{c.title}</h1>
          <p className="lede" style={{ color: "var(--plum)" }}>{c.summary}</p>
          <div className="tags">{svc.map((s) => <Link key={s!.slug} href={`/services/${s!.slug}`} className="tag" style={{ background: "var(--paper)" }}>{s!.name}</Link>)}</div>
        </div>
      </header>

      <section className="section-tight">
        <div className="wrap">
          <h2 className="sr-only">Results</h2>
          <div className="metrics">{c.metrics.map((m) => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div>
          <p className="small muted" style={{ marginTop: 12 }}>Source: Growify Growth Deck, 2026. Pending client approval for publication.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap split">
          <div>
            <h2>Business context</h2>
            <p className="lede" style={{ marginTop: 16 }}>{c.context}</p>
          </div>
          <div className="panel">
            <h3>The challenge</h3>
            <ul className="checklist" style={{ marginTop: 16 }}>{c.challenges.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {c.timeline && (
        <section className="section-tight">
          <div className="wrap split">
            <h2>Seven years, step by step</h2>
            <ol className="steps">{c.timeline.map((t) => <li key={t}><p style={{ color: "var(--ink)" }}>{t}</p></li>)}</ol>
          </div>
        </section>
      )}

      <section className="section" style={{ background: "var(--plum)", color: "var(--on-dark)" }}>
        <div className="wrap">
          <div className="head"><h2 style={{ color: "#fff" }}>The system Growify built</h2><p style={{ color: "var(--on-dark-muted)" }}>Scope of work across the engagement.</p></div>
          <div className="grid-2">
            {c.approach.map((a) => (
              <div key={a.title} className="panel dark" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)" }}>
                <h3 style={{ color: "#fff" }}>{a.title}</h3>
                <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>{a.items.map((i) => <li key={i} style={{ marginBottom: 6 }}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Outcomes</h2>
            <p className="lede" style={{ marginTop: 16 }}>{c.outcome}</p>
            {c.image2 && <img src={c.image2} alt={c.image2Alt ?? ""} loading="lazy" style={{ marginTop: 28, borderRadius: 4, maxHeight: 420, objectFit: "cover", width: "100%" }} />}
          </div>
          <div style={{ display: "grid", gap: 20, alignContent: "start" }}>
            {c.chart && <BarChart {...c.chart} />}
            <aside className="validation" aria-label="Data notes">
              <strong>Data to validate before publishing</strong>
              <ul>{c.dataNotes.map((d) => <li key={d}>{d}</li>)}</ul>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand title={`Build a system like ${c.brand}'s.`} label={`case_${c.slug}_cta`} service={c.services[0]} />

      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>More stories</h2>
          <div className="case-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>{next.map((n) => <CaseCard key={n.slug} c={n} />)}</div>
        </div>
      </section>

      <JsonLd data={[breadcrumbLd(crumbs), { "@context": "https://schema.org", "@type": "Article", headline: `${c.brand}: ${c.title}`, description: c.summary, image: `${site.url}${c.image}`, author: { "@id": `${site.url}/#org` }, publisher: { "@id": `${site.url}/#org` }, about: c.brand }]} />
    </article>
  );
}
