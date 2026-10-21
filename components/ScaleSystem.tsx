"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { lc, services } from "@/lib/content";
import { track } from "./Analytics";

const stages = services.filter((s) => s.letter !== "+");
const intel = services.find((s) => s.letter === "+")!;

export default function ScaleSystem() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = stages[active];

  const select = (i: number) => {
    setActive(i);
    track("scale_stage_view", { stage: stages[i].stage });
  };
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = stages.length;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) { e.preventDefault(); select(next); tabs.current[next]?.focus(); }
  };

  return (
    <section className="scale section" aria-labelledby="scale-h">
      <div className="wrap">
        <div className="head">
          <h2 id="scale-h">One growth system, five stages. We run all of them.</h2>
          <p>Most agencies sell one stage. Luxury brands lose orders in the gaps between them, so we own the whole journey from storefront to repeat purchase.</p>
        </div>
        <div className="scale-grid">
          <div className="scale-tabs" role="tablist" aria-label="Growify SCALE system" aria-orientation="vertical">
            {stages.map((st, i) => (
              <button
                key={st.slug}
                ref={(el) => { tabs.current[i] = el; }}
                role="tab"
                id={`tab-${st.slug}`}
                aria-selected={i === active}
                aria-controls="scale-panel"
                tabIndex={i === active ? 0 : -1}
                className="scale-tab"
                onClick={() => select(i)}
                onMouseEnter={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="letter" aria-hidden="true">{st.letter}</span>
                <span className="name"><b>{st.stage}</b><small>{st.name}</small></span>
                {st.signature && <span className="tag mint">Signature</span>}
              </button>
            ))}
          </div>
          <div className="scale-panel" role="tabpanel" id="scale-panel" aria-labelledby={`tab-${s.slug}`}>
            <span className="tag">{s.stage}</span>
            <h3>{s.promise}</h3>
            <p>{s.problem}</p>
            <ul>{s.includes.slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul>
            <Link href={`/services/${s.slug}`} className="btn light" data-track="cta_click" data-track-label={`scale_${s.slug}`}>
              Explore {lc(s.name)}
            </Link>
          </div>
        </div>
        <div className="intel-bar">
          <span><strong>Underneath every stage: data, AI and automation.</strong> Dashboards, integrations and our own products.</span>
          <Link href={`/services/${intel.slug}`} className="link" style={{ color: "var(--mint)" }}>See the intelligence layer</Link>
        </div>
      </div>
    </section>
  );
}
