import Link from "next/link";

export default function CtaBand({ title = "Let's look at your growth system together.", body = "A 30-minute review of your store, media and sales desk with a senior strategist. You leave with three priorities, whether or not we work together.", label = "cta_band", service }: { title?: string; body?: string; label?: string; service?: string }) {
  const href = service ? `/contact?service=${service}` : "/contact";
  return (
    <section className="cta-band section-tight">
      <div className="wrap inner">
        <h2>{title}</h2>
        <div>
          <p>{body}</p>
          <div className="btn-row" style={{ marginTop: 20 }}>
            <Link href={href} className="btn light" data-track="cta_click" data-track-label={label}>Book a growth review</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
