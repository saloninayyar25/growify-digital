"use client";
import { useEffect, useRef, useState } from "react";
import { services, site } from "@/lib/content";
import { track } from "./Analytics";

const needs = [
  ...services.map((s) => ({ value: s.slug, label: s.stage === "Intelligence" ? "Data and AI" : s.name.replace(" and conversion support", "").replace(" website development", " website") })),
  { value: "lookify", label: "Lookify try-on" },
];
const bands = ["Pre-launch", "Under ₹10L / month", "₹10L–50L / month", "₹50L–2Cr / month", "₹2Cr+ / month"];

type Errors = Partial<Record<"name" | "email" | "phone" | "needs", string>>;

export default function EnquiryForm({ preset, compact = false, source = "contact" }: { preset?: string; compact?: boolean; source?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [selected, setSelected] = useState<string[]>(preset ? [preset] : []);
  const started = useRef(false);

  useEffect(() => {
    if (preset) setSelected([preset]);
  }, [preset]);

  const onFocus = () => {
    if (!started.current) { started.current = true; track("form_start", { form: source }); }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      revenue: String(fd.get("revenue") || ""),
      message: String(fd.get("message") || "").trim(),
      needs: selected,
      source,
      company_url: String(fd.get("company_url") || ""), // honeypot
    };
    const errs: Errors = {};
    if (!data.name) errs.name = "Enter your name so we know who to ask for.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Enter a valid work email, like name@brand.com.";
    if (data.phone && data.phone.replace(/\D/g, "").length < 10) errs.phone = "Enter a 10-digit number, or leave this empty.";
    if (!compact && data.needs.length === 0) errs.needs = "Pick at least one area so the right strategist replies.";
    setErrors(errs);
    if (Object.keys(errs).length) { track("form_error", { form: source, fields: Object.keys(errs).join(",") }); return; }

    setState("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
      track("generate_lead", { form: source, needs: data.needs.join(","), revenue_band: data.revenue });
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="form-ok" role="status">
        <h3>Enquiry received.</h3>
        <p style={{ margin: 0 }}>A senior strategist will reply within one working day. Need us sooner? <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} onFocus={onFocus} noValidate aria-label="Growth review enquiry">
      <div className="row">
        <div className="field">
          <label htmlFor={`${source}-name`}>Your name</label>
          <input id={`${source}-name`} name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${source}-name-err` : undefined} />
          {errors.name && <span className="err" id={`${source}-name-err`}>{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${source}-email`}>Work email</label>
          <input id={`${source}-email`} name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? `${source}-email-err` : undefined} />
          {errors.email && <span className="err" id={`${source}-email-err`}>{errors.email}</span>}
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor={`${source}-phone`}>Phone or WhatsApp <span className="hint">(optional)</span></label>
          <input id={`${source}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} />
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
        <div className="field">
          <label htmlFor={`${source}-website`}>Brand website <span className="hint">(optional)</span></label>
          <input id={`${source}-website`} name="website" type="url" inputMode="url" placeholder="https://" />
        </div>
      </div>
      {!compact && (
        <>
          <fieldset className="field">
            <legend>What do you need help with?</legend>
            <div className="chips">
              {needs.map((n) => (
                <label key={n.value}>
                  <input type="checkbox" checked={selected.includes(n.value)} onChange={(e) => setSelected((s) => e.target.checked ? [...s, n.value] : s.filter((x) => x !== n.value))} />
                  <span>{n.label}</span>
                </label>
              ))}
            </div>
            {errors.needs && <span className="err">{errors.needs}</span>}
          </fieldset>
          <div className="field">
            <label htmlFor={`${source}-revenue`}>Current online revenue <span className="hint">(optional, helps us prepare)</span></label>
            <select id={`${source}-revenue`} name="revenue" defaultValue="">
              <option value="">Prefer not to say</option>
              {bands.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor={`${source}-message`}>Anything we should know? <span className="hint">(optional)</span></label>
            <textarea id={`${source}-message`} name="message" placeholder="Markets, launch dates, what's not working today" />
          </div>
        </>
      )}
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      <div className="btn-row" style={{ alignItems: "center" }}>
        <button type="submit" className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Request my growth review"}</button>
        <span className="small muted">Reply within one working day. No spam, ever.</span>
      </div>
      {state === "error" && <p className="err" role="alert">We couldn&apos;t send that. Check your connection and try again, or email {site.email}.</p>}
    </form>
  );
}
