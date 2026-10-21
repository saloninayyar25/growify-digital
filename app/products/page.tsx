import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { products, services } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Products: Lookify AI virtual try-on, Rossify and Craftify",
  description: "Growify builds technology for fashion e-commerce. Lookify is an AI virtual try-on app for Shopify; Rossify and Craftify are in development.",
  path: "/products",
});

export default function ProductsPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Technology built from client problems." lede="Services solve a brand's problem once. Products solve it for every brand. Here is what is live today and what is coming." />
      <section className="product-band section">
        <div className="wrap prod-grid">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className={`prod ${p.status === "live" ? "live" : "pending"}`} data-track="product_click" data-track-label={p.slug}>
              <span className={`tag status ${p.status === "live" ? "mint" : "line"}`} style={p.status === "live" ? undefined : { color: "var(--on-dark-muted)", borderColor: "rgba(255,255,255,.3)" }}>{p.status === "live" ? "Live" : "In development"}</span>
              <h3>{p.name}</h3>
              <p>{p.status === "live" ? p.description : "Placeholder until the product team supplies positioning, features and availability."}</p>
              <span className="foot">{p.status === "live" ? "Explore Lookify" : "See what we need to publish"}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>How services, products and partners fit together</h2>
            <p className="lede" style={{ marginTop: 16 }}>Clear status labels so nobody buys something that is not available yet.</p>
          </div>
          <div className="table-wrap" style={{ margin: 0 }}>
            <table>
              <thead><tr><th>Layer</th><th>What it is</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Services</td><td>{services.length} connected services, delivered by Growify teams</td><td>Available now</td></tr>
                <tr><td>Products</td><td>Lookify (AI try-on for Shopify)</td><td>Live, self-serve and enterprise</td></tr>
                <tr><td>Products</td><td>Rossify, Craftify</td><td>In development, register interest</td></tr>
                <tr><td>Partners</td><td>Third-party platforms we set up and run</td><td>Available through services</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBand title="Want try-on or AI in your store?" label="products_cta" service="lookify" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
