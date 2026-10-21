"use client";
import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

/** Push an analytics event to the GTM-compatible dataLayer. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page: window.location.pathname, ...params });
  if (process.env.NODE_ENV !== "production") console.info("[track]", event, params);
}

/** Delegated click tracking: any element with data-track="event" data-track-label="..." is recorded. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      track(el.dataset.track!, { label: el.dataset.trackLabel, href: el.getAttribute("href") ?? undefined });
    };
    document.addEventListener("click", onClick);
    // Scroll depth (25/50/75/100) for engagement measurement
    const marks = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement;
      const pct = Math.round(((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100);
      [25, 50, 75, 100].forEach((m) => {
        if (pct >= m && !marks.has(m)) { marks.add(m); track("scroll_depth", { percent: m }); }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { document.removeEventListener("click", onClick); window.removeEventListener("scroll", onScroll); };
  }, []);
  return null;
}
