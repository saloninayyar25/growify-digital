# Growify Reimagined: website prototype

A working redesign of growify.in that positions Growify as an integrated **growth + commerce + AI + product** company for luxury, couture and fine jewellery brands. Built for the Growify AI Generalist practical assignment.

**Live prototype:** https://growify-saloni-nayyar.vercel.app/

> Prototype only. It is `noindex` and does not touch the live growify.in site.

## Stack
- Next.js 15 (App Router, static generation), React 19, TypeScript
- Plain CSS design system (`app/globals.css`), self-hosted variable fonts (Syne, Instrument Sans via Fontsource)
- Vercel Analytics + a GTM-compatible `dataLayer` event layer
- No CMS yet: all content lives in `lib/content.ts`

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Deploy to Vercel
1. Push this folder to a Git repo and import it at vercel.com/new (framework: Next.js, no settings needed), **or**
2. `npx vercel` from this folder.

Optional environment variable:
- `ENQUIRY_WEBHOOK_URL`: the enquiry form POSTs leads here (CRM inbound URL, Zapier/Make hook).

## Pages
| Route | What it is |
|---|---|
| `/` | Homepage: hero, roster, interactive S.C.A.L.E. system, proof, products, model, ecosystem, office teaser, insights, enquiry |
| `/services`, `/services/[slug]` | Hub + 6 service landing pages with FAQ schema and preset enquiry forms |
| `/work`, `/work/[slug]` | Case-study hub + 3 designed case studies (Mahima Mahajan, Ridhiiee Suuri, Ridhi Mehra) |
| `/products`, `/products/lookify` | Product hub + Lookify page (try-on demo, plans, outbound link) |
| `/products/rossify`, `/products/craftify` | Structured placeholders with required-inputs checklist (noindex) |
| `/partners` | Ecosystem by category, Partner vs Integration labels (LimeChat, QuickReply, Razorpay, ...) |
| `/life-at-growify` | **Bonus**: interactive scroll-driven office tour with hotspots, floor plan, autoplay and a low-power fallback |
| `/industries/*`, `/about`, `/careers`, `/insights/*`, `/contact` | Remaining architecture |
| `/strategy` | Audit, positioning, sitemap, SEO plan, case pipeline, analytics, AI workflow (noindex) |

## Editing content
- Add a case study: append to `caseStudies` in `lib/content.ts`. The page, cards, sitemap and schema update automatically.
- Add a service / product / partner / industry: same file, same pattern.
- Launch checklist: set `site.prototype = false`, supply official logos, confirm partner designations and flagged case-study figures.

## Assets
Photography comes from the supplied Growify Growth Deck and office walkthrough video, compressed to AVIF (~170 KB total). Client campaign imagery requires each brand's approval before public use.
