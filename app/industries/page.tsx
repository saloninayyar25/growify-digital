import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Industries: luxury fashion, bridal, fine jewellery and lifestyle",
  description: "E-commerce growth for luxury fashion and couture, bridal and occasion wear, fine jewellery and premium lifestyle brands.",
  path: "/industries",
});

export default function IndustriesPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="Built for categories where every order matters." lede="We are a niche partner on purpose. Our playbooks are written for high-AOV, made-to-order and occasion-led buying." />
      <section className="section">
        <div className="wrap grid-2">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="tile">
              <h3>{i.name}</h3>
              <p>{i.short}</p>
              <ul className="checklist" style={{ marginTop: 8 }}>{i.needs.map((n) => <li key={n}>{n}</li>)}</ul>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand label="industries_cta" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
