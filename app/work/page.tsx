import PageHero from "@/components/PageHero";
import CaseCard from "@/components/CaseCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { caseStudies, futureCases } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Case studies: luxury fashion e-commerce growth",
  description: "How Growify scaled couture and lifestyle labels: international expansion, Shopify builds, WhatsApp sales desks and retention, with sourced results.",
  path: "/work",
});

export default function WorkPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Work", path: "/work" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Built on ideas, driven by growth." lede="Business context, the system we built and the numbers that moved. Figures are as reported in the Growify Growth Deck and marked where they still need client sign-off." />
      <section className="section">
        <div className="wrap case-grid">{caseStudies.map((c) => <CaseCard key={c.slug} c={c} />)}</div>
      </section>
      <section className="section-tight" style={{ background: "var(--lilac)" }}>
        <div className="wrap">
          <div className="head"><h2>Coming next</h2><p>Stories in production with our account teams. Filter by the problem you are trying to solve.</p></div>
          <div className="grid-3">
            {futureCases.slice(0, 6).map((f) => (
              <div key={f.theme} className="tile">
                <span className="tag line" style={{ alignSelf: "flex-start" }}>{f.theme}</span>
                <h3>{f.brand}</h3>
                <p>{f.angle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Want results like these?" label="work_cta" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
