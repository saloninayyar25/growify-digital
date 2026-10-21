"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { track } from "./Analytics";

type Hotspot = { x: number; y: number; title: string; body: string };
type Room = { id: string; name: string; body: string; frames: string[]; hotspot?: Hotspot; map: [number, number] };

// Frames are stills from Growify's own office walkthrough video, in the order the camera moves.
// Room names are indicative and should be confirmed with the Growify team.
export const rooms: Room[] = [
  { id: "reception", name: "Reception", map: [18, 92], frames: ["room-00"], body: "Every brand visit starts here. The wall reads Your Growth Partner, which is the job description in three words.", hotspot: { x: 40, y: 22, title: "Your Growth Partner", body: "The sign on the wall. Our philosophy says the same thing another way: we grow when you grow." } },
  { id: "studio", name: "The studio walk", map: [42, 92], frames: ["room-05"], body: "Open shelving and planters divide the space without walls, so strategy, creative and tech can see each other work.", hotspot: { x: 80, y: 42, title: "No closed departments", body: "Website, media and sales teams share one floor so a launch never waits on a hand-off email." } },
  { id: "cabins", name: "Glass cabins", map: [70, 80], frames: ["room-13"], body: "Glass-fronted cabins for focused work and leadership calls. Even here, nothing is behind a closed wall.", hotspot: { x: 72, y: 48, title: "Built by operators", body: "Founded by Rishab Mehra and Disha Bhatnagar, who design performance-led growth systems across brand, UX, sales and revenue." } },
  { id: "floor", name: "The long floor", map: [70, 52], frames: ["room-20", "room-23"], body: "One floor, more than 100 people. Strategists, developers, marketers, creatives and client success sit a short walk apart.", hotspot: { x: 58, y: 58, title: "100+ people, one floor", body: "Growify started as a small team of problem solvers in 2019 and grew into this floor in Chattarpur." } },
  { id: "bays", name: "Team bays", map: [52, 34], frames: ["room-29"], body: "The bays run on the client calendar: wedding season, sale launches and international time zones.", hotspot: { x: 62, y: 62, title: "18+ hours of CRM support", body: "Sales and CRM coverage stretches across time zones so international buyers get answers while they are still deciding." } },
  { id: "conference", name: "Conference room", map: [30, 34], frames: ["room-31"], body: "Where business reviews, launch plans and creative critiques happen, with clients in the room or on the screen.", hotspot: { x: 52, y: 50, title: "Client reviews", body: "Space for business reviews and launch planning with brand teams, in person or on screen." } },
  { id: "huddle", name: "Huddle corner", map: [14, 52], frames: ["room-34", "room-38"], body: "Stand-ups, quick reviews and a swing chair for a quieter minute between campaigns.", hotspot: { x: 50, y: 60, title: "Room to think", body: "Informal corners for quick reviews and pairing between teams." } },
  { id: "pantry", name: "Pantry bar", map: [14, 14], frames: ["room-41"], body: "The long counter for chai, lunch and the conversations that turn into the next idea.", hotspot: { x: 44, y: 70, title: "One long table", body: "Lunch and chai at a shared counter keep teams talking across departments." } },
];

const IMG_RATIO = 16 / 9;

function useLowPowerPreference() {
  const [low, setLow] = useState<boolean | null>(null);
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = !!conn && (conn.saveData || ["slow-2g", "2g"].includes(conn.effectiveType ?? ""));
    setLow(rm || slow);
  }, []);
  return low;
}

export default function OfficeTour() {
  const low = useLowPowerPreference();
  const [mode, setMode] = useState<"immersive" | "guided" | null>(null);
  useEffect(() => { if (low !== null && mode === null) setMode(low ? "guided" : "immersive"); }, [low, mode]);

  const switchMode = (m: "immersive" | "guided") => { setMode(m); track("tour_mode", { mode: m }); };

  if (mode === "immersive") return <Immersive onGuided={() => switchMode("guided")} />;
  return <Guided onImmersive={mode ? () => switchMode("immersive") : undefined} />;
}

function Guided({ onImmersive }: { onImmersive?: () => void }) {
  return (
    <section className="tour guided" aria-label="Office tour, guided list">
      <div className="wrap">
        <div className="head">
          <h2 style={{ color: "#fff" }}>Walk the floor, room by room.</h2>
          <p style={{ color: "var(--on-dark-muted)" }}>A lightweight version of the tour for reduced motion and slower connections.
            {onImmersive && <> <button className="tour-mode" onClick={onImmersive} style={{ marginLeft: 8 }}>Switch to walkthrough</button></>}
          </p>
        </div>
        <div className="guided-list">
          {rooms.map((r, i) => (
            <figure key={r.id}>
              <img src={`/office/${r.frames[0]}.avif`} alt={`${r.name} at the Growify office`} loading={i < 2 ? "eager" : "lazy"} decoding="async" width={880} height={495} />
              <figcaption><b>{r.name}</b><span>{r.body}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Immersive({ onGuided }: { onGuided: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const [room, setRoom] = useState(0);
  const [frame, setFrame] = useState(0);
  const [pop, setPop] = useState(false);
  const [box, setBox] = useState({ w: 1, h: 1 });
  const [auto, setAuto] = useState(false);
  const reduce = useRef(false);
  const seen = useRef(new Set<string>());
  const n = rooms.length;

  useEffect(() => { reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);

  const measure = useCallback(() => setBox({ w: window.innerWidth, h: window.innerHeight }), []);
  useEffect(() => { measure(); window.addEventListener("resize", measure); return () => window.removeEventListener("resize", measure); }, [measure]);

  // Scroll -> room, frame and camera dolly
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      const f = Math.min(n - 0.0001, p * n);
      const i = Math.floor(f);
      const local = f - i;
      const r = rooms[i];
      const fi = Math.min(r.frames.length - 1, Math.floor(local * r.frames.length));
      setRoom(i);
      setFrame(fi);
      const img = imgRefs.current[r.frames[fi]];
      if (img && !reduce.current) {
        const seg = r.frames.length;
        const lp = local * seg - fi; // progress within this frame
        img.style.transform = `scale(${1.03 + lp * 0.12}) translate3d(0, ${lp * -1.2}%, 0)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [n]);

  useEffect(() => {
    setPop(false);
    const id = rooms[room].id;
    if (!seen.current.has(id)) { seen.current.add(id); track("tour_room_view", { room: id, index: room + 1 }); }
  }, [room]);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + ((i + 0.08) / n) * total;
    window.scrollTo({ top, behavior: reduce.current ? "auto" : "smooth" });
  }, [n]);

  // Guided auto-tour: advances every 4.5s until the visitor takes over
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      setRoom((r) => { const next = r + 1; if (next >= n) { setAuto(false); return r; } goTo(next); return r; });
    }, 4500);
    const stop = () => setAuto(false);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    return () => { clearInterval(t); window.removeEventListener("wheel", stop); window.removeEventListener("touchstart", stop); window.removeEventListener("keydown", stop); };
  }, [auto, goTo, n]);

  // Map hotspot % (relative to 16:9 image) onto an object-fit: cover viewport
  const r = rooms[room];
  let hs: { left: number; top: number } | null = null;
  if (r.hotspot) {
    const vr = box.w / box.h;
    let rw = box.w, rh = box.h, ox = 0, oy = 0;
    if (vr < IMG_RATIO) { rw = box.h * IMG_RATIO; ox = (box.w - rw) / 2; } else { rh = box.w / IMG_RATIO; oy = (box.h - rh) / 2; }
    const left = ox + (r.hotspot.x / 100) * rw, top = oy + (r.hotspot.y / 100) * rh;
    if (left > box.w * 0.08 && left < box.w * 0.92 && top > box.h * 0.22 && top < box.h * 0.7) hs = { left, top };
    else hs = { left: box.w * 0.5, top: box.h * 0.45 };
  }

  const allFrames = rooms.flatMap((rm, ri) => rm.frames.map((f, fi) => ({ f, ri, fi })));

  return (
    <section className="tour" aria-label="Interactive office tour">
      <div className="tour-track" ref={trackRef} style={{ height: `${n * 100}svh` }}>
        <div className="tour-stage">
          {allFrames.map(({ f, ri, fi }) => {
            const near = Math.abs(ri - room) <= 1;
            return (
              <div key={f} className={`frame${ri === room && fi === frame ? " on" : ""}`} aria-hidden={!(ri === room && fi === frame)}>
                {near && <img ref={(el) => { imgRefs.current[f] = el; }} src={`/office/${f}.avif`} alt={ri === room && fi === frame ? `${rooms[ri].name} at the Growify office` : ""} decoding="async" width={880} height={495} />}
              </div>
            );
          })}

          {r.hotspot && hs && (
            <div className={`hotspot ${hs.left > box.w * 0.6 ? "right" : hs.left < box.w * 0.4 ? "left" : ""}`} style={{ left: hs.left, top: hs.top }}>
              <button aria-expanded={pop} aria-label={`About ${r.hotspot.title}`} onClick={() => { setPop((p) => !p); track("tour_hotspot", { room: r.id }); }} />
              {pop && <div className="pop" role="dialog" aria-label={r.hotspot.title}><b>{r.hotspot.title}</b>{r.hotspot.body}</div>}
            </div>
          )}

          <div className="minimap" aria-label="Floor plan">
            <svg viewBox="0 0 100 106" role="group">
              <rect x="4" y="4" width="92" height="98" rx="6" fill="none" stroke="rgba(255,255,255,.25)" />
              <polyline points={rooms.map((rm) => rm.map.join(",")).join(" ")} fill="none" stroke="rgba(255,255,255,.35)" strokeDasharray="2 3" />
              {rooms.map((rm, i) => (
                <g key={rm.id} className="node" onClick={() => goTo(i)} role="button" tabIndex={0} aria-label={`Go to ${rm.name}`} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && goTo(i)}>
                  <circle cx={rm.map[0]} cy={rm.map[1]} r={i === room ? 6 : 4} fill={i === room ? "#7df0c6" : "rgba(255,255,255,.7)"} />
                </g>
              ))}
            </svg>
            <p className="small" style={{ margin: "6px 0 0", color: "var(--on-dark-muted)" }}>Floor plan (schematic)</p>
          </div>

          <div className="tour-ui">
            <div className="tour-top">
              <span className="tour-count" aria-live="polite">Room {room + 1} of {n}</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="tour-mode" onClick={() => { setAuto((a) => !a); if (!auto) track("tour_autoplay"); }}>{auto ? "Pause tour" : "Play guided tour"}</button>
                <button className="tour-mode" onClick={onGuided}>Simple view</button>
              </div>
            </div>
            <div>
              <div className="tour-caption">
                <h2>{r.name}</h2>
                <p>{r.body}</p>
              </div>
              <div className="tour-bottom" style={{ marginTop: 24 }}>
                <div className="tour-progress" aria-label="Rooms">
                  {rooms.map((rm, i) => (
                    <button key={rm.id} aria-label={rm.name} aria-current={i === room} onClick={() => goTo(i)}><span /></button>
                  ))}
                </div>
                <div className="tour-ctrl">
                  <button aria-label="Previous room" onClick={() => goTo(Math.max(0, room - 1))} disabled={room === 0}>‹</button>
                  <button aria-label="Next room" onClick={() => goTo(Math.min(n - 1, room + 1))} disabled={room === n - 1}>›</button>
                </div>
              </div>
              {room === n - 1 && (
                <div className="btn-row" style={{ marginTop: 20 }}>
                  <Link href="/careers" className="btn light" data-track="cta_click" data-track-label="tour_careers">See open roles</Link>
                  <Link href="/contact" className="btn ghost-light" data-track="cta_click" data-track-label="tour_contact">Visit us for a growth review</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
