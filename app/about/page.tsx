import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { stats, statsSource } from "@/lib/content";
import { breadcrumbLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "About Growify: founders, story and how we work",
  description: "Founded in 2019 by Rishab Mehra and Disha Bhatnagar, Growify is a 100+ person growth partner for luxury, couture and fine jewellery brands in New Delhi.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];
  return (
    <>
      <PageHero crumbs={crumbs} title="We didn't start big. We started with intent." lede="What began as a small team of problem solvers in 2019 is now a 100+ person team in Chattarpur, New Delhi, working with luxury labels in India and abroad." />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Our story</h2>
            <p>When the world paused during COVID, brands were forced to rethink how they operated. That is when we stepped in, helping designer labels move online, scale digitally and navigate uncertainty.</p>
            <p>That phase defined our purpose. Over time we strengthened our capabilities and our commitment: what started as limited support has grown into 18+ hours of daily CRM support.</p>
            <p>Today we don&apos;t see ourselves as a marketing agency. We are strategic partners, thinking a step ahead, building brands, solving problems and growing together.</p>
          </div>
          <figure style={{ margin: 0 }}>
            <img src="/img/founders.avif" alt="Growify founders Rishab Mehra and Disha Bhatnagar seated at a table" loading="lazy" style={{ borderRadius: 4 }} />
            <figcaption className="small muted" style={{ marginTop: 10 }}>Founders Rishab Mehra and Disha Bhatnagar. Growify is built by operators who design performance-led growth systems across brand, UX, sales and revenue.</figcaption>
          </figure>
        </div>
      </section>
      <section className="section-tight" style={{ background: "var(--lilac)" }}>
        <div className="wrap">
          <div className="metrics">{stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div>
          <p className="small muted" style={{ marginTop: 12 }}>Source: {statsSource}.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Leadership</h2>
            <p className="muted" style={{ marginTop: 16 }}>Structured profiles for each leader. Bios beyond public information need approval.</p>
          </div>
          <div className="grid-2">
            <div className="tile"><h3>Rishab Mehra</h3><p>Co-founder. Previously founded tech startups Skippo and Musejam (afaqs, 2023).</p></div>
            <div className="tile"><h3>Disha Bhatnagar</h3><p>Co-founder. Digital marketing, UI/UX and brand development; featured in BW Businessworld&apos;s 2023 visionary entrepreneurs list.</p></div>
            <div className="tile"><h3>[Head of Growth]</h3><p>[Name, role, one-line focus. To be supplied.]</p></div>
            <div className="tile"><h3>[Head of Technology]</h3><p>[Name, role, one-line focus. To be supplied.]</p></div>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ marginBottom: 20 }}>Recognition and press</h2>
          <ul className="checklist">
            <li>Top Performing Agency for Luxury and Fashion Brands, Outlook Business Spotlight Achievers Awards 2026 (Outlook India, October 2026)</li>
            <li>Meta agency partnership announced, May 2023 (afaqs)</li>
          </ul>
          <img src="/img/team.avif" alt="Group photo of the Growify team" loading="lazy" style={{ marginTop: 40, borderRadius: 4, width: "100%" }} />
          <p style={{ marginTop: 20 }}><Link href="/life-at-growify" className="link">Take the office tour</Link></p>
        </div>
      </section>
      <CtaBand label="about_cta" />
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
