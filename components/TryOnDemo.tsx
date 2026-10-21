"use client";
import { useState } from "react";
import { track } from "./Analytics";

/** Illustrative before/after slider explaining the Lookify flow (not a real Lookify output). */
export default function TryOnDemo() {
  const [split, setSplit] = useState(50);
  const [moved, setMoved] = useState(false);
  return (
    <figure style={{ margin: 0 }}>
      <div className="tryon-demo" style={{ ["--split" as string]: `${split}%` }}>
        <svg className="before" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="500" fill="#e2d5f8" />
          <circle cx="200" cy="130" r="48" fill="#c4b6da" />
          <path d="M120 500 C120 330 150 205 200 205 C250 205 280 330 280 500 Z" fill="#c4b6da" />
          <text x="200" y="470" textAnchor="middle" fontSize="16" fill="#5e5170" fontFamily="sans-serif">Shopper&apos;s photo</text>
        </svg>
        <img className="after" src="/img/ridhiiee-cover.avif" alt="Illustrative result: a model wearing an embroidered ivory kurta" loading="lazy" />
        <div className="handle" aria-hidden="true" />
        <span className="lbl" style={{ left: 14 }}>Before</span>
        <span className="lbl" style={{ right: 14 }}>Try-on</span>
        <input type="range" min={0} max={100} value={split} aria-label="Compare before and after try-on" onChange={(e) => { setSplit(Number(e.target.value)); if (!moved) { setMoved(true); track("product_demo_interact", { product: "lookify" }); } }} />
      </div>
      <figcaption className="small muted" style={{ marginTop: 10 }}>Illustration of the try-on flow. Real outputs are on the live Lookify demo store.</figcaption>
    </figure>
  );
}
