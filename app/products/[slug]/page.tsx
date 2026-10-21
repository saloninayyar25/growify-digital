import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import TryOnDemo from "@/components/TryOnDemo";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { getProduct, products, site } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return p.status === "live"
    ? meta({ title: "Lookify: AI virtual try-on for Shopify fashion brands", description: "Lookify lets shoppers see a garment on themselves from one photo, right on the Shopify product page. Built by Growify. Plans from free.", path: `/products/${p.slug}` })
    : meta({ title: `${p.name} by Growify`, description: `${p.name} is a Growify product in development.`, path: `/products/${p.slug}`, noindex: true });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: p.name, path: `/products/${p.slug}` }];

  if (p.status !== "live") {
    return (
      <>
        <PageHero crumbs={crumbs} title={p.name} lede={p.description}>
          <div className="tags" style={{ marginTop: 20 }}><span className="tag line">In development</span><span className="tag line">Content placeholder</span></div>
        </PageHero>
        <section className="section">
          <div className="wrap split">
            <div>
              <h2>How this page will look</h2>
              <ol className="steps" style={{ marginTop: 24 }}>
                <li><div><b>Positioning</b><p>[One line: who it is for and the result it delivers]</p></div></li>
                <li><div><b>Product demo</b><p>[30–60 second screen recording or interactive walkthrough]</p></div></li>
                <li><div><b>Features</b><p>[Three to five features with screenshots]</p></div></li>
                <li><div><b>Proof</b><p>[Pilot result or approved customer quote]</p></div></li>
                <li><div><b>Pricing and availability</b><p>[Plans, beta or waitlist]</p></div></li>
              </ol>
            </div>
            <div className="panel">
              <h3>Inputs needed from the product team</h3>
              <ul className="checklist pending" style={{ marginTop: 18 }}>{p.inputsNeeded?.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </section>
        <section className="enquiry section" id="enquire">
          <div className="wrap enquiry-grid">
            <div><h2>Register interest in {p.name}.</h2><p className="lede" style={{ marginTop: 16 }}>We&apos;ll let you know when it opens for early brands.</p></div>
            <EnquiryForm compact source={`product_${p.slug}`} />
          </div>
        </section>
        <JsonLd data={breadcrumbLd(crumbs)} />
      </>
    );
  }

  return (
    <>
      <PageHero crumbs={crumbs} title="Lookify: the online fitting room." lede={p.description}>
        <div className="btn-row">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn" data-track="product_outbound" data-track-label="lookify_site">Try the live demo on lookify.in</a>
          <a href="#enquire" className="btn ghost" data-track="cta_click" data-track-label="lookify_book_demo">Book an enterprise demo</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap tryon">
          <TryOnDemo />
          <div>
            <h2>Before they buy it, they see it on.</h2>
            <p className="lede" style={{ marginTop: 16 }}>Luxury shoppers hesitate on fit and drape. Lookify answers that question on the product page, in seconds.</p>
            <ol className="steps" style={{ marginTop: 24 }}>{p.steps?.map((s) => <li key={s.title}><div><b>{s.title}</b><p>{s.body}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--lilac)" }}>
        <div className="wrap split">
          <div>
            <h2>Built right into your store</h2>
            <p className="muted" style={{ marginTop: 16 }}>Listed on the Shopify App Store by Growify Digital, launched February 2026.</p>
          </div>
          <ul className="checklist">{p.features?.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Start free. Scale as you grow.</h2><p>Plans as listed on lookify.in, October 2026. Check the live site for current pricing.</p></div>
          <div className="plans">{p.plans?.map((pl) => <div key={pl.name}><span className="small muted">{pl.name}</span><strong>{pl.price}</strong><span className="small">{pl.detail}</span></div>)}</div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap split">
          <div className="panel dark">
            <h3 style={{ color: "#fff" }}>In-store try-on</h3>
            <p style={{ marginTop: 12 }}>Lookify can extend from the website to flagship stores, letting walk-in clients try pieces that are not on the rail. Details of hardware, pilots and staff flow are being confirmed with the product team.</p>
            <span className="tag mint" style={{ marginTop: 8, display: "inline-block" }}>Details to confirm</span>
          </div>
          <div className="panel line">
            <h3>Making the technology easy to understand</h3>
            <ul className="checklist" style={{ marginTop: 16 }}>
              <li>A 30-second product video at the top of this page</li>
              <li>An embedded demo product so visitors try it without leaving</li>
              <li>A measured pilot case study with conversion and return-rate deltas</li>
              <li>Short use-case stories: bridal, menswear, international shoppers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="enquiry section" id="enquire">
        <div className="wrap enquiry-grid">
          <div>
            <h2>Talk to us about Lookify for your brand.</h2>
            <p className="lede" style={{ marginTop: 16 }}>Enterprise volumes, white-label and setup support for luxury catalogues.</p>
            <p style={{ marginTop: 20 }}><a href={p.url} target="_blank" rel="noopener noreferrer" className="link">Visit lookify.in</a></p>
          </div>
          <EnquiryForm preset="lookify" source="product_lookify" />
        </div>
      </section>

      <JsonLd data={[breadcrumbLd(crumbs), { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Lookify: AI Virtual Try-On", applicationCategory: "BusinessApplication", operatingSystem: "Web, Shopify", url: p.url, publisher: { "@id": `${site.url}/#org` }, offers: { "@type": "AggregateOffer", priceCurrency: "INR", lowPrice: "0", highPrice: "9999" } }]} />
    </>
  );
}
