import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export default function CaseCard({ c }: { c: CaseStudy }) {
  const m = c.metrics[0];
  return (
    <Link href={`/work/${c.slug}`} className="case-card" data-track="case_click" data-track-label={c.slug}>
      <div className="img"><img src={c.image} alt={c.imageAlt} loading="lazy" decoding="async" /></div>
      <div className="meta"><span>{c.brand}</span><span>{c.category}</span></div>
      <h3>{c.title}</h3>
      <div className="big"><strong>{m.value}</strong><span>{m.label}</span></div>
    </Link>
  );
}
