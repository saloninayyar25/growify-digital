import Link from "next/link";
import { caseStudies, futureCases, products, services } from "@/lib/content";
import { meta } from "@/lib/seo";

export const metadata = meta({
  title: "Strategy and implementation notes",
  description: "Audit, positioning, sitemap, SEO plan, case study pipeline, products, analytics, office experience and AI workflow behind the Growify redesign prototype.",
  path: "/strategy",
  noindex: true,
});

const toc = [
  ["summary", "Summary"],
  ["audit", "Audit of growify.in"],
  ["positioning", "Positioning"],
  ["competitors", "Competitor inspiration"],
  ["journeys", "Audiences and journeys"],
  ["sitemap", "Sitemap and priorities"],
  ["seo", "SEO plan"],
  ["cases", "Case studies"],
  ["products", "Products and integrations"],
  ["conversion", "Conversion and analytics"],
  ["office", "Office experience (bonus)"],
  ["ai", "AI workflow"],
  ["gaps", "Assumptions and open items"],
];

const T = ({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) => (
  <div className="table-wrap">
    <table>
      <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

export default function StrategyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb"><span><Link href="/">Home</Link> /</span><span aria-current="page">Strategy notes</span></nav>
          <h1>Reimagine Growify: strategy and implementation.</h1>
          <p className="lede">Submission notes for the AI Generalist practical assignment. Everything here is reflected in the working prototype on this site.</p>
          <p className="small muted" style={{ marginTop: 12 }}>Prepared October 2026. Sources: Growify AI Generalist brief, Growify Growth Deck, office walkthrough video, growify.in, lookify.in, Shopify App Store, afaqs (May 2023), Outlook India (October 2026), competitor websites.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap doc">
          <nav className="doc-toc" aria-label="Contents"><ol>{toc.map(([id, l]) => <li key={id}><a href={`#${id}`}>{l}</a></li>)}</ol></nav>
          <div className="doc-body">

            <section id="summary">
              <h2>Summary</h2>
              <p>Growify&apos;s current site describes a services agency. The business it actually runs is closer to an outsourced growth department for luxury labels: it builds the store, runs acquisition, staffs the sales desk, owns retention and reporting, ships its own software, and is paid in line with client sales. The redesign makes that visible.</p>
              <ul>
                <li><strong>Positioning:</strong> &quot;Luxury grows on systems, not campaigns.&quot; Growify is the growth, commerce, AI and product partner for couture, fine jewellery and lifestyle brands. We grow when you grow.</li>
                <li><strong>Structure:</strong> the deck&apos;s own S.C.A.L.E. framework (Setup, Capture, Activate, Lead, Establish) becomes the services IA, with Data, AI and automation as the layer underneath.</li>
                <li><strong>Proof:</strong> three designed case studies built from the deck, each with sourced metrics and an explicit &quot;data to validate&quot; box. Nine future stories with data requirements.</li>
                <li><strong>Products:</strong> Lookify presented as a live product with a clear link to lookify.in; Rossify and Craftify as clearly marked placeholders with an input checklist.</li>
                <li><strong>Built:</strong> a Next.js site deployed on Vercel with 30+ statically generated pages, structured data, sitemap, enquiry API, analytics events and an interactive office tour.</li>
              </ul>
            </section>

            <section id="audit">
              <h2>Audit of growify.in</h2>
              <p>Reviewed October 2026 (homepage and Tech page). Speed was not lab-measured from this environment; run PageSpeed Insights on the live URL to baseline Core Web Vitals before launch.</p>
              <T head={["Area", "What we found", "Impact", "Fix in prototype"]} rows={[
                ["Messaging", "Hero reads \"We change brands through\" followed by counters whose numbers don't render in text; tagline \"We Grow, When You Grow!\" sits without explanation.", "Visitors cannot say what Growify does in five seconds. Search engines see no clear H1 value proposition.", "One clear H1, a plain-language subline naming services, categories and the business model."],
                ["Service naming", "Setup, Show, Start, Sky, Suggest. \"Sky\" and \"Suggest\" are opaque; the deck uses a different framework (S.C.A.L.E.).", "Inconsistent story between sales deck and website; weak keyword targeting.", "S.C.A.L.E. used everywhere, each stage mapped to a plain-language service page."],
                ["Information architecture", "Nav mixes About, Case Studies, Services, Tech, Referral Program, Careers, Media (with PR linking to #).", "Dead links and no industry or product sections; no route for product buyers.", "Services, Work, Products, Partners, About, Insights, plus Industries and Life at Growify."],
                ["Proof", "~50 unnamed client logos; three testimonials, two unattributed; case studies in a carousel.", "Logos without outcomes do not persuade premium buyers; unattributed quotes reduce trust.", "Named roster as text, case pages with context, approach, metrics and sources."],
                ["Products", "No mention of Lookify, Rossify or Craftify.", "Growify is not seen as a technology builder.", "Products section, Lookify product page, placeholders for the other two."],
                ["Partners", "Tech page lists partners, but the Razorpay heading carries Shiprocket's description.", "Credibility risk; partnership vs integration unclear.", "Category-led ecosystem with explicit Partner vs Integration labels."],
                ["Conversion", "Almost every CTA goes to WhatsApp; a pop-up asks \"What brings you here?\"; one generic form.", "No qualification, no tracking of lead source or service interest.", "Service-specific forms with presets, revenue band, honeypot, analytics events; WhatsApp kept as secondary."],
                ["Mobile UX and visuals", "Dense logo grids and carousels; cookie banner, pop-up and cart drawer compete on load.", "Cluttered first screen on phones.", "Single hero, no pop-ups, sticky header with one CTA, layouts tested at 390px."],
              ]} />
            </section>

            <section id="positioning">
              <h2>Positioning</h2>
              <h3>Value proposition</h3>
              <p><strong>For</strong> luxury, couture, bridal and fine jewellery brands that sell high-AOV pieces online in India and abroad, <strong>Growify is</strong> the growth partner that builds and runs the whole online business: storefront, media, sales conversations, retention, data and AI products. <strong>Unlike</strong> agencies that sell one channel and report on clicks, <strong>we</strong> own outcomes across the journey and are rewarded when the brand grows.</p>
              <h3>Differentiators, in order of strength</h3>
              <ol>
                <li><strong>Outcome-aligned model.</strong> &quot;We grow when you grow&quot;; Outlook (Oct 2026) reports earnings tied to a share of sales. Confirm how to state this publicly.</li>
                <li><strong>Sales desk, not just marketing.</strong> Trained teams handling enquiries 18+ hours a day; rare among agencies and directly tied to high-AOV conversion.</li>
                <li><strong>Luxury specialism.</strong> A roster competitors cannot copy: Tarun Tahiliani, Gaurav Gupta, Rahul Mishra, House of Masaba and more.</li>
                <li><strong>Own technology.</strong> Lookify is live on the Shopify App Store; Rossify and Craftify extend the product story.</li>
                <li><strong>International execution.</strong> Clients selling into seven countries, with time-zone sales coverage.</li>
              </ol>
              <h3>Voice</h3>
              <p>Confident, specific, quiet. Short sentences, numbers with sources, no superlatives without proof. The deck&apos;s phrases (&quot;precision over volume&quot;, &quot;we don&apos;t sell services, we scale brands online&quot;) are kept because they are already Growify&apos;s.</p>
            </section>

            <section id="competitors">
              <h2>Competitor inspiration</h2>
              <T head={["Company", "What they do well", "What Growify should take"]} rows={[
                ["Charle (UK, Shopify Plus)", "Positions a proprietary platform (CSignal) above services; numbered services each with its own page; headline proof metrics.", "Lead with own technology (Lookify) and give every service its own landing page. Avoid unqualified metrics: theirs carry no timeframe."],
                ["Swanky (UK/AU/FR, Shopify Plus)", "Simple Launch / Grow IA; named client case studies tagged by service type; partner tier stated.", "Service tags on every case study and a two-tier IA. State Shopify partner tier once confirmed."],
                ["GoKwik (India, commerce tech)", "Maps six products to journey stages (identify, target, engage, convert, retain); Book a demo everywhere; compliance badges.", "Map services and products onto one journey (our S.C.A.L.E.). Make the product CTA a demo, the service CTA a review."],
                ["Lookify (Growify's own)", "Clear product promise, transparent pricing, live demo store.", "Reuse its clarity on growify.in and link to it rather than duplicating it."],
              ]} />
            </section>

            <section id="journeys">
              <h2>Audiences and target journeys</h2>
              <T head={["Audience", "What they need to believe", "Journey on the new site"]} rows={[
                ["Founder or CEO of a designer label (₹1Cr+ online, wants to scale or go international)", "Growify understands luxury and can own growth end to end, abroad as well as in India.", "Home hero → roster → S.C.A.L.E. → Mahima Mahajan case → Book a growth review (preset: performance)."],
                ["Marketing or e-commerce head with a specific problem (site, ads, WhatsApp)", "This team is expert in my channel and plugs into my stack.", "Search lands on /services/[stage] → FAQs and platforms → related case → service-preset form."],
                ["Heritage jeweller or new luxury D2C launching online", "They can build a premium store fast and bring the first customers.", "/industries/fine-jewellery or Insights guide → Shopify service → Ridhiiee Suuri case → form."],
                ["Shopify merchant looking for try-on", "Lookify is real, priced clearly and easy to install.", "/products/lookify → try-on demo → lookify.in or enterprise demo form."],
                ["Candidate", "This is a serious, growing team worth joining.", "Life at Growify office tour → Careers → email application."],
              ]} />
            </section>

            <section id="sitemap">
              <h2>Sitemap and priorities</h2>
              <p>Priority reflects revenue impact first, then search value. &quot;Built&quot; pages are working in this prototype; &quot;Structured&quot; pages use a working template that needs final copy.</p>
              <T head={["URL", "Purpose and key sections", "Priority", "Status"]} rows={[
                ["/", "Hero and value prop, roster, S.C.A.L.E. system, proof, products, model, ecosystem, office teaser, insights, enquiry", "P1", "Built"],
                ["/services, /services/[stage] (6)", "Problem, inclusions, process, platforms, related cases, FAQs (FAQPage schema), preset form", "P1", "Built"],
                ["/work, /work/[brand] (3)", "Hero, metrics with source, context, challenge, system built, outcomes chart, data-validation box, CTA, more stories", "P1", "Built"],
                ["/products, /products/lookify", "Status labels, try-on demo, how it works, features, plans, in-store, enquiry", "P1", "Built"],
                ["/products/rossify, /products/craftify", "Placeholder layout and input checklist; noindex until filled", "P2", "Structured"],
                ["/partners", "Categories (advertising, commerce, payments, engagement, CRM), Partner vs Integration labels", "P2", "Built"],
                ["/contact", "Growth review form with presets via ?service=, direct contacts, what happens next", "P1", "Built"],
                ["/life-at-growify", "Interactive office tour, culture, careers CTA", "P2", "Built"],
                ["/about", "Story, founders, stats, leadership grid, recognition", "P2", "Built (bios to supply)"],
                ["/industries, /industries/[category] (4)", "Category needs, relevant services, related work", "P2", "Structured"],
                ["/insights, /insights/[slug]", "Editorial hub; one full guide with Article and FAQ schema", "P2", "1 built, 5 planned"],
                ["/careers", "Teams, open roles feed (ATS), apply", "P3", "Structured"],
                ["/strategy", "These notes (noindex)", "n/a", "Built"],
              ]} />
              <p>Main navigation: Services, Work, Products, Partners, About, Insights, plus a persistent &quot;Book a growth review&quot; button. Footer adds Industries, Life at Growify and Careers.</p>
            </section>

            <section id="seo">
              <h2>SEO plan</h2>
              <h3>Keyword and landing-page map</h3>
              <p>Clusters are grouped by intent. Search volumes and difficulty should be pulled from Search Console and a keyword tool at kickoff; they are not estimated here.</p>
              <T head={["Cluster", "Example queries", "Intent", "Landing page"]} rows={[
                ["Luxury / fashion e-commerce agency", "ecommerce agency for luxury brands india; digital marketing agency for fashion designers", "Commercial", "/ and /industries/luxury-fashion-couture"],
                ["Shopify", "shopify development agency delhi; shopify plus agency india; shopify website for fashion brand", "Commercial", "/services/shopify-website-development"],
                ["Paid media", "performance marketing agency for fashion brands; meta ads agency for luxury brands", "Commercial", "/services/performance-marketing"],
                ["Retention", "whatsapp marketing for fashion brands; klaviyo agency india", "Commercial", "/services/whatsapp-email-marketing"],
                ["Sales support", "outsourced sales team for fashion brand; whatsapp sales support ecommerce", "Commercial", "/services/sales-conversion-support"],
                ["SEO", "seo agency for fashion ecommerce; jewellery website seo", "Commercial", "/services/seo-social-media"],
                ["AI-led growth", "ai for fashion ecommerce; ecommerce analytics dashboard", "Informational / commercial", "/services/data-ai-automation, Insights"],
                ["Virtual try-on", "virtual try on shopify app; ai virtual try on for clothing india", "Commercial / product", "/products/lookify (canonical product page stays on lookify.in)"],
                ["Proof", "[brand] website case study; international expansion indian couture", "Navigational / research", "/work/[brand]"],
                ["Editorial", "custom vs template shopify; how to sell bridal wear online abroad", "Informational", "/insights/[slug]"],
              ]} />
              <h3>Technical priorities</h3>
              <ul>
                <li><strong>Crawl and index:</strong> generated sitemap.xml and robots.txt; noindex for placeholders and /strategy; canonical tags on every page.</li>
                <li><strong>Redirects:</strong> 301 map from legacy Shopify URLs (/pages/*, /blogs/*) in next.config; extend after a full crawl of growify.in.</li>
                <li><strong>Schema:</strong> Organization, WebSite, ProfessionalService, Service, BreadcrumbList, FAQPage, Article, SoftwareApplication (implemented).</li>
                <li><strong>Images:</strong> pre-compressed AVIF (all 18 site images total about 170 KB), explicit sizes, lazy-loading below the fold, descriptive alt text.</li>
                <li><strong>Core Web Vitals:</strong> static generation, self-hosted variable fonts, no client JS on content pages beyond header, form and tracker; tour assets load only for adjacent rooms.</li>
                <li><strong>Mobile usability:</strong> 48px touch targets, no pop-ups, tested at 390px width.</li>
                <li><strong>AI-search visibility:</strong> plain-language answers, FAQ blocks, sourced figures and consistent entity data (name, founders, address) so assistants can cite Growify accurately.</li>
              </ul>
              <h3>Sample metadata</h3>
              <T head={["Page", "Title", "Description"]} rows={[
                ["/", "Growify | Growth, commerce and AI for luxury fashion brands", "Growify is a New Delhi e-commerce growth partner for luxury fashion, couture and fine jewellery brands: Shopify builds, Meta and Google ads, WhatsApp and email retention, sales desks, data and AI products like Lookify."],
                ...services.slice(0, 2).map((s) => [`/services/${s.slug}`, s.metaTitle, s.metaDescription]),
                ["/products/lookify", "Lookify: AI virtual try-on for Shopify fashion brands", "Lookify lets shoppers see a garment on themselves from one photo, right on the Shopify product page. Built by Growify. Plans from free."],
              ]} />
              <h3>Editorial opportunities</h3>
              <ul>
                <li>Comparisons: custom vs semi-custom vs template Shopify (published); Shopify vs WooCommerce for couture; LimeChat vs QuickReply for luxury WhatsApp selling.</li>
                <li>Playbooks: end-of-season sale calendar; selling Indian couture to the US and Middle East; bridal season media planning.</li>
                <li>Proof-led: anonymised benchmarks from Growify&apos;s 476+ brands (with approval); Lookify pilot results.</li>
                <li>FAQs per service and per industry; glossary of luxury e-commerce terms (RTS, AOV, MBO) for AI citation.</li>
              </ul>
              <h3>Measuring SEO after launch</h3>
              <ul>
                <li>Baseline before launch: indexed pages, impressions, clicks, average position by cluster, organic enquiries.</li>
                <li>Monthly: non-brand impressions and clicks per cluster (Search Console), organic sessions to service pages, organic-sourced form submissions (generate_lead with source), Core Web Vitals field data.</li>
                <li>Quarterly: rankings for the mapped landing pages, AI-assistant citations sampled for ten target questions, backlinks from press.</li>
              </ul>
            </section>

            <section id="cases">
              <h2>Case studies</h2>
              <p>Built pages: {caseStudies.map((c, i) => <span key={c.slug}>{i > 0 && ", "}<Link className="link" href={`/work/${c.slug}`}>{c.brand}</Link></span>)}. Each follows context, challenge, approach, scope, visual proof, outcomes and CTA. No figures were invented; inconsistencies found in the deck are listed on each page for the account team.</p>
              <h3>Future story pipeline and data needs</h3>
              <T head={["Theme", "Brand", "Angle", "Data needed from account team"]} rows={futureCases.map((f) => [f.theme, f.brand, f.angle, f.dataNeeded.join("; ")])} />
            </section>

            <section id="products">
              <h2>Products and integrations</h2>
              <ul>
                <li><strong>Lookify</strong> (live): verified on the Shopify App Store (developer Growify Digital, launched 25 Feb 2026) and lookify.in. Page includes an illustrative try-on slider, steps, features, plans and a clear outbound link. Note a different app named &quot;Lookify - Virtual Try-On&quot; by another developer exists on the App Store; brand search should point to the correct listing.</li>
                <li><strong>Rossify and Craftify</strong> (placeholders): no public information found. Pages show the final layout with bracketed slots and an input checklist; noindex until filled. An unrelated Shopify app called &quot;Craftify AI&quot; exists, so naming should be checked.</li>
                <li><strong>LimeChat, QuickReply.ai, Razorpay</strong>: presented under Engagement and Payments with customer value. All are labelled Integration until official designations, logos and naming are confirmed. Meta is the only relationship labelled Partner (public announcement, May 2023). Pagey and Clocal are excluded as instructed.</li>
                <li>Making technology understandable: short product video, embedded demo, measured pilot story, and use-case stories per category (bridal, menswear, international).</li>
              </ul>
              <p>Product inputs required: {products.filter((p) => p.status !== "live").map((p) => p.name).join(" and ")} positioning, features, screenshots, pricing, availability, URL and logo; Lookify in-store hardware and pilot data.</p>
            </section>

            <section id="conversion">
              <h2>Conversion and analytics</h2>
              <ul>
                <li>One primary action everywhere: Book a growth review. Products use Book a demo. WhatsApp, phone and email are always available as secondary routes.</li>
                <li>Service pages preset the form (?service=), so leads arrive pre-qualified and routed.</li>
                <li>Low-friction form: name and email required; everything else optional; revenue band for qualification; inline errors; honeypot spam trap; webhook forwarding to the CRM via ENQUIRY_WEBHOOK_URL.</li>
              </ul>
              <T head={["Event (dataLayer)", "Fires when", "Used for"]} rows={[
                ["cta_click", "Any primary or secondary CTA (label identifies placement)", "CTA placement performance"],
                ["form_start / form_error / generate_lead", "First field focus / validation failure / successful submit", "Form funnel and friction"],
                ["contact_click", "WhatsApp, phone or email link", "Direct-contact demand"],
                ["scale_stage_view, service_click, case_click", "Exploring services and proof", "Content that assists conversion"],
                ["product_click, product_demo_interact, product_outbound", "Lookify engagement", "Product interest"],
                ["tour_room_view, tour_hotspot, tour_mode, tour_autoplay", "Office tour usage", "Bonus engagement and mobile fallback rate"],
                ["scroll_depth", "25 / 50 / 75 / 100%", "Page engagement"],
              ]} />
              <p>KPIs: qualified enquiries per month by service and source; enquiry-to-meeting rate; case-study-assisted leads; organic share of leads; Lookify demo requests. Vercel Analytics is wired for page views; add GTM/GA4 on the dataLayer at launch.</p>
              <p>Maintainability: all services, cases, products, partners and industries live in one typed content file (lib/content.ts). Adding a case study or service is one object; pages, sitemap and internal links update automatically. A headless CMS (Sanity or Shopify metaobjects) can replace the file later without changing templates.</p>
            </section>

            <section id="office">
              <h2>Office experience (bonus)</h2>
              <p>Built at <Link className="link" href="/life-at-growify">/life-at-growify</Link> from Growify&apos;s 44-second office walkthrough.</p>
              <ul>
                <li><strong>Approach:</strong> ten stills extracted at the moments the camera reaches each space (reception, studio walk, glass cabins, long floor, team bays, conference room, huddle corner, pantry), compressed to about 9 KB each as AVIF.</li>
                <li><strong>Interaction:</strong> scroll drives a sticky stage; each room crossfades in and a slow dolly (scale and drift) recreates camera movement. Hotspots open short stories; a schematic floor plan, progress bar, previous/next buttons and a guided auto-play let visitors jump around. Ends with careers and contact CTAs.</li>
                <li><strong>Mobile and performance:</strong> works with touch scroll; hotspots are re-projected for portrait crops; only adjacent rooms load; total tour weight under 90 KB.</li>
                <li><strong>Fallback:</strong> prefers-reduced-motion, Save-Data or 2G connections automatically get a simple room-by-room list (also the no-JavaScript render). A Simple view toggle is always available.</li>
                <li><strong>Next step:</strong> with the full video hosted on a CDN, swap stills for scroll-scrubbed video encoded with frequent keyframes (H.264, 720p, ~2–3 MB) and add team portraits per room.</li>
              </ul>
            </section>

            <section id="ai">
              <h2>AI workflow</h2>
              <h3>Tools used</h3>
              <ul>
                <li><strong>Claude (agentic workspace):</strong> reading the brief and deck, analysing the office video, web research, writing copy and code, QA and deployment.</li>
                <li><strong>pdftoppm / pdfimages, ffmpeg, Pillow:</strong> rendering deck pages, extracting photography, pulling video frames and compressing everything to AVIF.</li>
                <li><strong>Next.js 15, React 19, TypeScript:</strong> the site. <strong>Playwright (Chromium):</strong> responsive screenshots, the walkthrough video and the PDF. <strong>Vercel:</strong> hosting and deployment.</li>
              </ul>
              <h3>Example prompts and workflows</h3>
              <pre>{`1. "Read both PDFs. Summarise Growify's business, every deliverable and how it will be scored."
2. "Extract one frame per second from office-tour.mp4 as a labelled contact sheet; identify distinct spaces and timestamps."
3. "Fetch growify.in and list nav, sections, CTAs and messaging weaknesses, quoting headlines verbatim."
4. "Who publishes the Lookify Shopify app? Confirm developer, launch date, pricing."
5. "Turn the deck's case studies into structured data. Flag any figure that is internally inconsistent instead of fixing it."
6. "Build a typed content model so services, cases and products generate pages, sitemap and schema."
7. "Screenshot every page at 390px and 1440px; list layout bugs; fix; repeat."`}</pre>
              <h3>Where information was verified</h3>
              <ul>
                <li>Company facts, stats, services and case figures: Growify Growth Deck (supplied).</li>
                <li>Current site content: growify.in homepage and /pages/tech, fetched October 2026.</li>
                <li>Lookify: apps.shopify.com/lookify (developer Growify Digital) and lookify.in.</li>
                <li>Meta partnership and founders&apos; backgrounds: afaqs, 22 May 2023. Award and business model: Outlook India, 10 October 2026.</li>
                <li>LimeChat and QuickReply.ai capabilities: their documentation and independent reviews.</li>
                <li>Competitors: charle.co.uk, swankyagency.com, gokwik.co.</li>
              </ul>
              <h3>What I decided, not the AI</h3>
              <ul>
                <li>Using the deck&apos;s S.C.A.L.E. framework rather than inventing a new one, so sales and web tell the same story.</li>
                <li>Not &quot;correcting&quot; inconsistent deck numbers; surfacing them for validation instead.</li>
                <li>Labelling every relationship except Meta as Integration until confirmed.</li>
                <li>Keeping the prototype noindex so it cannot compete with the live site.</li>
              </ul>
              <h3>What remains unfinished</h3>
              <ul>
                <li>Official Growify logo files and partner logos (monograms used).</li>
                <li>Rossify and Craftify content; Lookify in-store details; leadership bios.</li>
                <li>Client approval for named results and imagery; resolution of flagged data points.</li>
                <li>CRM connection for the form (webhook ready), GTM/GA4 container, cookie consent.</li>
                <li>Full legacy URL crawl for the redirect map; Lighthouse baseline of the current site.</li>
                <li>Remaining insight articles; industry page copy; careers ATS feed.</li>
              </ul>
            </section>

            <section id="gaps">
              <h2>Assumptions and open items</h2>
              <ul>
                <li>Revenue-share or outcome-linked engagement is referenced only as &quot;we grow when you grow&quot;; exact public wording needs approval.</li>
                <li>Contact number uses the deck (+91 88004 61296); the current site lists a different WhatsApp number. Confirm which is primary.</li>
                <li>Photography is from the supplied deck and office video and is assumed cleared for Growify&apos;s own website; client campaign imagery needs each brand&apos;s approval.</li>
                <li>Office room names are indicative, based on what is visible in the video.</li>
                <li>The 500+ websites figure (service slide) and 476+ brands figure (about slide) are both used as stated in the deck.</li>
              </ul>
            </section>

          </div>
        </div>
      </section>
    </>
  );
}
