import { NextResponse } from "next/server";

/**
 * Enquiry endpoint. In production, forward to the CRM (e.g. Kommo) and notify the sales desk on WhatsApp/email.
 * Set ENQUIRY_WEBHOOK_URL in Vercel to forward submissions to any webhook (Zapier, Make, CRM inbound URL).
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }

  if (body.company_url) return NextResponse.json({ ok: true }); // honeypot: silently accept bots
  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ ok: false, error: "Name and a valid email are required" }, { status: 422 });

  const lead = {
    name, email,
    phone: String(body.phone ?? "").slice(0, 40),
    website: String(body.website ?? "").slice(0, 200),
    revenue: String(body.revenue ?? "").slice(0, 60),
    needs: Array.isArray(body.needs) ? body.needs.map(String).slice(0, 10) : [],
    message: String(body.message ?? "").slice(0, 2000),
    source: String(body.source ?? "unknown").slice(0, 60),
    received_at: new Date().toISOString(),
  };

  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  if (hook) {
    try { await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }); }
    catch (e) { console.error("enquiry webhook failed", e); }
  } else {
    console.info("enquiry", { ...lead, email: lead.email.replace(/(.).+@/, "$1***@") });
  }
  return NextResponse.json({ ok: true });
}
