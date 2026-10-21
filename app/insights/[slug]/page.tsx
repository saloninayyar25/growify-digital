import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { insights, site } from "@/lib/content";
import { breadcrumbLd, faqLd, meta } from "@/lib/seo";

const faqs = [
  { q: "How long does a custom Shopify build take for a luxury brand?", a: "It depends on catalogue size, integrations and markets. Scope it after an audit of your current site, collections and enquiry flow rather than from a template estimate." },
  { q: "Can we start with a template and go custom later?", a: "Yes, if the information architecture is planned properly from the start. Collections, URLs and tracking that are designed well survive a later redesign without losing search rankings." },
  { q: "Is Shopify suitable for made-to-order couture?", a: "Yes. Made-to-order flows, appointment booking, WhatsApp enquiries and international pricing can all run on Shopify with the right apps and custom sections." },
];

export function generateStaticParams() {
  return insights.filter((a) => a.status === "published").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug && x.status === "published");
  if (!a) return {};
  return meta({ title: "Custom vs template Shopify for luxury brands", description: "How luxury fashion and jewellery labels should choose between a fully custom, semi-custom or template Shopify build, with a simple decision framework.", path: `/insights/${a.slug}` });
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug && x.status === "published");
  if (!a) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: "Custom vs template Shopify", path: `/insights/${a.slug}` }];
  return (
    <article>
      <PageHero crumbs={crumbs} title={a.title} lede={a.excerpt}>
        <p className="small muted" style={{ marginTop: 16 }}>Growify editorial team. {a.read} read.</p>
      </PageHero>
      <section className="section">
        <div className="wrap prose">
          <p>Your storefront is the first place a luxury customer meets your brand, often before a store visit or a trunk show. Growify has delivered 500+ websites across couture fashion, fine jewellery, home décor, wellness and lifestyle, and the most common early question is how much to build from scratch.</p>
          <p>There are three sensible answers. The right one depends on what your brand experience needs to do, not on what a competitor launched last season.</p>

          <h2>1. Fully custom</h2>
          <p>Bespoke design and development, crafted from scratch to reflect the brand&apos;s identity and experience.</p>
          <ul>
            <li><strong>Choose it when</strong> the website is itself part of the product: couture houses, heritage jewellers, labels with strong editorial storytelling.</li>
            <li><strong>Watch for</strong> a longer timeline and a bigger maintenance commitment. Budget for ongoing optimisation, not just launch.</li>
          </ul>

          <h2>2. Semi-custom</h2>
          <p>A template foundation enhanced with brand-led design and custom sections.</p>
          <ul>
            <li><strong>Choose it when</strong> you need a premium look quickly and most of the value sits in product pages, collections and checkout.</li>
            <li><strong>Watch for</strong> theme limits on international markets, filtering and made-to-order flows. Check them before you commit.</li>
          </ul>

          <h2>3. Template</h2>
          <p>Pre-designed layouts for a quick launch and cost efficiency.</p>
          <ul>
            <li><strong>Choose it when</strong> you are validating demand, launching a diffusion line or need to be live before a season.</li>
            <li><strong>Watch for</strong> looking like everyone else. Invest the saving in photography and product copy.</li>
          </ul>

          <div className="callout">
            <strong>A simple test.</strong> If a visitor saw your homepage with the logo removed, would they still know it is you? If that matters to sales, go custom or semi-custom. If it does not yet, a template plus great product imagery is the faster route to revenue.
          </div>

          <h2>What matters more than the build type</h2>
          <ul>
            <li><strong>Architecture before design.</strong> Plan collections, URLs, filters and markets first. They decide search visibility and how easily customers find pieces.</li>
            <li><strong>Enquiry paths.</strong> Luxury buyers ask questions. Make WhatsApp, appointment and sizing help visible on product pages.</li>
            <li><strong>Speed on mobile.</strong> Much of luxury browsing now happens on phones. Compress imagery, limit apps and measure Core Web Vitals.</li>
            <li><strong>Tracking from day one.</strong> Without clean analytics you cannot tell whether the new site works.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {faqs.map((f) => <details key={f.q} className="faq"><summary>{f.q}</summary><p>{f.a}</p></details>)}

          <p style={{ marginTop: 32 }}>Related: <Link href="/services/shopify-website-development" className="link">Shopify website development</Link>, <Link href="/work/ridhiiee-suuri" className="link">Ridhiiee Suuri case study</Link>.</p>
        </div>
      </section>
      <CtaBand title="Not sure which build fits?" body="We'll audit your current store and recommend custom, semi-custom or template, with reasons." service="shopify-website-development" label="article_cta" />
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faqs), { "@context": "https://schema.org", "@type": "Article", headline: a.title, datePublished: a.date, author: { "@type": "Organization", name: site.name }, publisher: { "@id": `${site.url}/#org` }, mainEntityOfPage: `${site.url}/insights/${a.slug}` }]} />
    </article>
  );
}
