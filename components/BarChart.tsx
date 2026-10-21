type Props = { title: string; data: { label: string; value: number }[]; note?: string };

/** Accessible SVG bar chart. Latest period highlighted in mint (the deck's convention). */
export default function BarChart({ title, data, note }: Props) {
  const W = 420, H = 240, pad = { t: 28, b: 32, l: 8, r: 8 };
  const max = Math.max(...data.map((d) => d.value)) * 1.1;
  const bw = (W - pad.l - pad.r) / data.length;
  return (
    <figure className="chart" style={{ margin: 0 }}>
      <h3>{title}</h3>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}: ${data.map((d) => `${d.label} ${d.value}%`).join(", ")}`}>
        <line x1={pad.l} x2={W - pad.r} y1={H - pad.b} y2={H - pad.b} stroke="var(--rule)" />
        {data.map((d, i) => {
          const h = ((H - pad.t - pad.b) * d.value) / max;
          const x = pad.l + i * bw + bw * 0.18;
          const y = H - pad.b - h;
          return (
            <g key={d.label}>
              <rect className={`bar${i === data.length - 1 ? " hi" : ""}`} x={x} y={y} width={bw * 0.64} height={h} rx={4} />
              <text className="v" x={x + bw * 0.32} y={y - 8} textAnchor="middle">{d.value}%</text>
              <text x={x + bw * 0.32} y={H - 10} textAnchor="middle">{d.label}</text>
            </g>
          );
        })}
      </svg>
      {note && <figcaption className="small muted" style={{ marginTop: 8 }}>{note}</figcaption>}
    </figure>
  );
}
