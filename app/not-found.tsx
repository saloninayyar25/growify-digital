import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <h1>This page has moved or never existed.</h1>
        <p className="lede">Try the work, services or contact pages instead.</p>
        <div className="btn-row" style={{ marginTop: 28 }}>
          <Link href="/" className="btn">Go to homepage</Link>
          <Link href="/work" className="btn ghost">See case studies</Link>
        </div>
      </div>
    </section>
  );
}
