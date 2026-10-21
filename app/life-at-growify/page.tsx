import Link from "next/link";
import OfficeTour from "@/components/OfficeTour";
import JsonLd from "@/components/JsonLd";
import { principles } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Life at Growify: take the office tour",
  description: "Walk through the Growify office in Chattarpur, New Delhi: an interactive tour of the floor where 100+ strategists, developers, marketers and sales teams work.",
  path: "/life-at-growify",
});

export default function LifePage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Life at Growify", path: "/life-at-growify" }];
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link> /</span><span aria-current="page">Life at Growify</span></nav>
          <h1>Come inside. Scroll to walk the floor.</h1>
          <p className="lede">Eight stops through our office in Chattarpur, New Delhi, built from a real walkthrough of the space. Tap the glowing points to learn more, or play the guided tour.</p>
          <p className="small muted" style={{ marginTop: 12 }}>Room labels are indicative. Reduced-motion and slow connections get a lightweight version automatically.</p>
        </div>
      </section>
      <OfficeTour />
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>What working here is like</h2>
            <p className="lede" style={{ marginTop: 16 }}>Strategists, developers, marketers, creatives and client success teams solve commercial problems end to end, for some of India&apos;s best-known labels.</p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link href="/careers" className="btn" data-track="cta_click" data-track-label="life_careers">See open roles</Link>
            </div>
          </div>
          <div className="bubbles" aria-label="Values">{principles.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
