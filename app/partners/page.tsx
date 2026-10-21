import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { partnerCategories, partners } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Partners and integrations: Meta, Shopify, Razorpay, LimeChat, QuickReply",
  description: "The commerce ecosystem Growify sets up and runs for luxury brands: advertising, Shopify, payments, WhatsApp engagement and CRM.",
  path: "/partners",
});

export default function PartnersPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="The ecosystem behind every order." lede="We choose platforms for what they do for your customer: faster payment, quicker replies, better data. Formal partnerships are labelled separately from integrations we deploy." />
      <section className="section">
        <div className="wrap">
          <div className="tags" style={{ marginBottom: 32 }}>
            <span className="tag mint">Partner: formal commercial relationship</span>
            <span className="tag">Integration: platform we implement and run</span>
          </div>
          {partnerCategories.map((cat) => (
            <div key={cat.key} className="partner-cat">
              <div><h2 style={{ fontSize: "1.8rem" }}>{cat.key}</h2><p className="muted" style={{ marginTop: 8 }}>{cat.value}</p></div>
              <div className="partner-list">
                {partners.filter((p) => p.category === cat.key).map((p) => (
                  <div key={p.name} className="partner">
                    <span className="mono" aria-hidden="true">{p.name.slice(0, 2)}</span>
                    <div>
                      <h3>{p.name} <span className={`tag ${p.relation === "partner" ? "mint" : ""}`} style={{ fontSize: "0.72rem" }}>{p.relation === "partner" ? "Partner" : "Integration"}</span></h3>
                      <p>{p.note}</p>
                      <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="small link" data-track="partner_outbound" data-track-label={p.name}>Visit site</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="small muted" style={{ marginTop: 32 }}>Logos are shown as monograms until official partner assets and designations are confirmed with each company.</p>
        </div>
      </section>
      <CtaBand title="Not sure which stack fits your brand?" body="We audit your current tools and recommend what to keep, replace or connect, before you spend on anything new." label="partners_cta" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
