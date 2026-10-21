import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { insights } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Insights: guides for luxury fashion e-commerce",
  description: "Practical guides on Shopify, performance marketing, WhatsApp selling, international expansion and AI for luxury fashion and jewellery brands.",
  path: "/insights",
});

export default function InsightsPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Field notes for luxury e-commerce." lede="Guides, comparisons and playbooks from the teams running growth systems for designer labels." />
      <section className="section">
        <div className="wrap grid-3">
          {insights.map((a) => {
            const inner = (<><span className="tag line" style={{ alignSelf: "flex-start" }}>{a.status === "published" ? `Guide, ${a.read}` : "In the editorial plan"}</span><h3>{a.title}</h3><p>{a.excerpt}</p></>);
            return a.status === "published"
              ? <Link key={a.slug} href={`/insights/${a.slug}`} className="tile">{inner}</Link>
              : <div key={a.slug} className="tile" style={{ opacity: 0.8 }}>{inner}</div>;
          })}
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
