/**
 * Single source of truth for site content.
 * Every figure below comes from the Growify Growth Deck (2026) or a cited public source.
 * Anything not yet confirmed is flagged with `pending` so it renders as a visible placeholder.
 */

export const site = {
  name: "Growify Digital",
  shortName: "Growify",
  url: "https://growify.in",
  tagline: "We grow when you grow.",
  description:
    "Growify is a New Delhi e-commerce growth partner for luxury fashion, couture and fine jewellery brands: Shopify builds, Meta and Google ads, WhatsApp and email retention, sales desks, data and AI products like Lookify.",
  email: "info@growify.in",
  phone: "+91 88004 61296",
  phoneHref: "+918800461296",
  whatsapp: "https://wa.me/918800461296",
  address: {
    street: "D-112, 60 Feet Road, Near Dhan Mill, Chattarpur",
    city: "New Delhi",
    region: "Delhi",
    country: "IN",
  },
  instagram: "https://www.instagram.com/growifydigital/",
  linkedin: "https://www.linkedin.com/company/growify-digital/",
  founded: 2019,
  // Set to false at launch on the real domain. Keeps the prototype out of search results.
  prototype: true,
};

export const stats = [
  { value: "476+", label: "brands worked with" },
  { value: "87%", label: "average growth in client sales revenue, FY25" },
  { value: "7", label: "countries our clients sell into" },
  { value: "100+", label: "people on one floor in Chattarpur" },
];
export const statsSource = "Growify Growth Deck, 2026";

export const brands = [
  "Tarun Tahiliani", "Gaurav Gupta", "Rahul Mishra", "House of Masaba", "Meena Bazaar", "Rohit + Rahul Gandhi Khanna",
  "Hazoorilal Legacy", "Symetree", "Ridhi Mehra", "Mahima Mahajan", "Sawan Gandhi", "Aisha Rao", "Saundh",
  "Nitika Gujral", "Ridhiiee Suuri", "Gauri & Nainika", "Angad Singh", "Payal Singhal", "Suneet Varma", "Payal Jain",
  "Studio by Agni", "Heritage Panjab", "Zabella", "Studio East6", "Drishti Chhabra", "Sia Bridal",
];

export type Service = {
  slug: string;
  letter: string;
  stage: string;
  name: string;
  short: string;
  signature?: boolean;
  promise: string;
  problem: string;
  includes: string[];
  process: { title: string; body: string }[];
  tools: string[];
  relatedWork: string[];
  faqs: { q: string; a: string }[];
  keyword: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "shopify-website-development",
    letter: "S",
    stage: "Setup",
    name: "Shopify website development",
    short: "Storefronts that sell like your best boutique, built on Shopify and Shopify Plus.",
    signature: true,
    promise: "A storefront that works as your highest-converting salesperson, not a catalogue.",
    problem:
      "Luxury buyers judge a label by its website before they ever enquire. Slow pages, generic themes and weak product storytelling cost high-ticket orders that never show up in analytics.",
    includes: [
      "Fully custom, semi-custom or template builds, chosen by budget and brand stage",
      "UX and UI design for couture, bridal and fine jewellery catalogues",
      "Shopify and Shopify Plus development, apps and integrations",
      "International storefronts: markets, currencies, duties and shipping",
      "Conversion optimisation and ongoing website maintenance",
      "Search-friendly architecture, schema and Core Web Vitals from day one",
    ],
    process: [
      { title: "Audit", body: "Review analytics, catalogue structure, search visibility and the enquiry funnel." },
      { title: "Architecture", body: "Plan collections, URLs, filters and markets before a single screen is designed." },
      { title: "Design", body: "Brand-led product and story pages, designed mobile first." },
      { title: "Build and launch", body: "Develop, migrate, set up redirects and tracking, then launch with QA." },
      { title: "Optimise", body: "Monthly CRO tests and maintenance against a shared revenue dashboard." },
    ],
    tools: ["Shopify Plus", "Razorpay", "PayU", "Shiprocket", "Klaviyo", "Lookify"],
    relatedWork: ["mahima-mahajan", "ridhiiee-suuri"],
    faqs: [
      { q: "Should a luxury label choose a custom or template Shopify build?", a: "Fully custom suits labels whose brand experience is the product. Semi-custom gives a template foundation with brand-led sections and is faster. Templates suit quick launches and tight budgets. We recommend after an audit, not before." },
      { q: "Can you migrate an existing store without losing search rankings?", a: "Yes. We map every legacy URL to its new home with 301 redirects, preserve metadata and monitor Search Console after launch." },
      { q: "Do you build for international customers?", a: "Yes. Several of our clients sell into the US, Middle East, UK and Canada with market-specific pricing, imagery and shipping." },
    ],
    keyword: "shopify development agency for luxury fashion brands",
    metaTitle: "Shopify Website Development for Luxury & Fashion Brands",
    metaDescription: "Custom and semi-custom Shopify and Shopify Plus stores for couture, bridal and fine jewellery brands, built to convert high-AOV buyers in India and abroad.",
  },
  {
    slug: "performance-marketing",
    letter: "C",
    stage: "Capture",
    name: "Performance marketing",
    short: "Meta and Google campaigns that bring in high-intent buyers, not just traffic.",
    signature: true,
    promise: "Paid media judged on revenue and return, reported market by market.",
    problem:
      "High-AOV purchases rarely happen on the first click. Campaigns optimised for cheap traffic fill the funnel with browsers and hide which markets actually pay back.",
    includes: [
      "Meta Ads: conversion, catalogue and click-to-WhatsApp campaigns",
      "Google Search, Shopping and Performance Max",
      "Market-wise budgets for India, US, Middle East and diaspora audiences",
      "Sale-season and end-of-season playbooks",
      "Creative strategy and testing for luxury audiences",
      "Spend-versus-return dashboards with dynamic budget reallocation",
    ],
    process: [
      { title: "Baseline", body: "Fix tracking, attribution and catalogue feeds first." },
      { title: "Market plan", body: "Decide which countries and categories deserve budget." },
      { title: "Launch", body: "Run structured tests across creative, audience and offer." },
      { title: "Reallocate", body: "Move budget weekly toward markets and products that return." },
    ],
    tools: ["Meta", "Google Ads", "Shopify", "LimeChat", "QuickReply.ai"],
    relatedWork: ["mahima-mahajan", "ridhi-mehra"],
    faqs: [
      { q: "Is Growify a Meta partner?", a: "Growify announced its Meta agency partnership in May 2023, which helps resolve ad account and payment issues faster for clients." },
      { q: "How do you measure performance for high-AOV products?", a: "We track assisted conversions across website, WhatsApp and store enquiries, and report return by market rather than by click." },
    ],
    keyword: "performance marketing agency for fashion brands india",
    metaTitle: "Performance Marketing for Luxury Fashion Brands | Meta & Google Ads",
    metaDescription: "Meta and Google Ads for couture, bridal and fine jewellery brands. Market-wise budgets, click-to-WhatsApp and revenue-first reporting.",
  },
  {
    slug: "whatsapp-email-marketing",
    letter: "A",
    stage: "Activate",
    name: "WhatsApp and email marketing",
    short: "Journeys that turn visitors into buyers and buyers into repeat customers.",
    promise: "Retention that pays for itself through repeat revenue.",
    problem:
      "Luxury customers buy for occasions. Without lifecycle journeys, a bride, a returning collector or an abandoned cart all get the same broadcast, or nothing at all.",
    includes: [
      "Email automations: welcome, browse and cart recovery, post-purchase",
      "WhatsApp flows, broadcasts and catalogue messaging",
      "Pre-launch buzz and sale-time retargeting",
      "CRM segmentation by occasion, market and order value",
      "Loyalty and clienteling journeys for high-value customers",
    ],
    process: [
      { title: "Map", body: "Map the occasions and moments that drive repeat purchase." },
      { title: "Build", body: "Set up flows across email and WhatsApp with clear consent." },
      { title: "Measure", body: "Report repeat revenue contribution, not open rates." },
    ],
    tools: ["Klaviyo", "QuickReply.ai", "LimeChat", "Interakt", "Kommo"],
    relatedWork: ["ridhiiee-suuri", "ridhi-mehra"],
    faqs: [
      { q: "Which WhatsApp platforms do you work with?", a: "We work with established WhatsApp Business API platforms including QuickReply.ai, LimeChat and Interakt, chosen to fit each brand's volume and workflow." },
    ],
    keyword: "whatsapp marketing for fashion brands",
    metaTitle: "WhatsApp & Email Marketing for Luxury Brands",
    metaDescription: "Lifecycle email and WhatsApp journeys for fashion and jewellery brands: cart recovery, sale-time retargeting and repeat-revenue programmes.",
  },
  {
    slug: "sales-conversion-support",
    letter: "L",
    stage: "Lead",
    name: "Sales handling and conversion support",
    short: "Trained sales teams who handle every enquiry with the intent to close.",
    signature: true,
    promise: "Every DM, call and WhatsApp handled like a boutique appointment.",
    problem:
      "Luxury buyers ask before they buy: sizing, customisation, delivery dates, duties. Slow or untrained replies lose orders worth lakhs, often after the ad spend has already worked.",
    includes: [
      "Dedicated sales and CRM teams, including international time zones",
      "18+ hours of daily CRM support coverage",
      "Deep product training for high-AOV and bridal selling",
      "Lead-to-conversion tracking across channels",
      "Escalation mapping and resolution workflows",
      "AI and chat-assisted selling for routine questions",
    ],
    process: [
      { title: "Train", body: "Learn the collection, pricing logic and brand voice." },
      { title: "Staff", body: "Assign a team sized to enquiry volume and markets." },
      { title: "Track", body: "Log every conversation from first message to order." },
    ],
    tools: ["LimeChat", "QuickReply.ai", "Kommo", "Razorpay"],
    relatedWork: ["mahima-mahajan", "ridhi-mehra"],
    faqs: [
      { q: "Do your sales teams represent our brand directly?", a: "Yes. Teams are trained on your collection and voice and work inside your WhatsApp, Instagram and email channels." },
    ],
    keyword: "outsourced sales support for luxury fashion brands",
    metaTitle: "Sales Handling & Conversion Support for Luxury Fashion",
    metaDescription: "Trained sales and CRM teams that answer every WhatsApp, Instagram and call enquiry with the intent to close. 18+ hours of daily coverage.",
  },
  {
    slug: "seo-social-media",
    letter: "E",
    stage: "Establish",
    name: "SEO and social media",
    short: "Long-term visibility in search, AI assistants and social feeds.",
    promise: "Organic demand that compounds while paid media rents attention.",
    problem:
      "When someone searches for a designer lehenga or a bridal jeweller, the brands that appear are the ones that planned for it. AI assistants now answer those questions too, and they cite clear, well-structured sources.",
    includes: [
      "Technical SEO: crawlability, schema, Core Web Vitals",
      "Collection and category page optimisation",
      "Editorial content and guides for high-intent luxury searches",
      "Visibility in AI search assistants through structured, citable content",
      "Social media management and brand storytelling",
    ],
    process: [
      { title: "Research", body: "Map keywords and questions by intent and category." },
      { title: "Fix", body: "Resolve technical issues and structure collections." },
      { title: "Publish", body: "Ship guides, FAQs and proof-led content monthly." },
      { title: "Report", body: "Track rankings, organic revenue and AI citations." },
    ],
    tools: ["Shopify", "Google Search Console", "Meta"],
    relatedWork: ["ridhiiee-suuri"],
    faqs: [
      { q: "How long does SEO take for a fashion brand?", a: "Technical fixes show in weeks; category and editorial rankings usually build over three to six months. We report progress monthly against agreed pages." },
    ],
    keyword: "seo agency for luxury fashion brands",
    metaTitle: "SEO & Social Media for Luxury Fashion and Jewellery Brands",
    metaDescription: "Technical SEO, collection optimisation, editorial content and AI-search visibility for couture, bridal and fine jewellery brands.",
  },
  {
    slug: "data-ai-automation",
    letter: "+",
    stage: "Intelligence",
    name: "Data, AI and automation",
    short: "Dashboards, integrations and AI workflows that run underneath every stage.",
    promise: "One view of what is selling, where, and why.",
    problem:
      "Most brands run ads, store, WhatsApp and offline enquiries in separate tools. Nobody can say which market or channel actually returns, so budgets follow habit.",
    includes: [
      "Custom dashboards: market-wise sales, channel performance, spend versus return",
      "Reporting automation and workflow improvements",
      "CRM and platform integrations",
      "AI-assisted workflows for content, sales replies and operations",
      "Proprietary products: Lookify, Rossify and Craftify",
    ],
    process: [
      { title: "Connect", body: "Bring store, ads, CRM and messaging data together." },
      { title: "Automate", body: "Replace manual reports with scheduled dashboards." },
      { title: "Augment", body: "Add AI where it saves time without risking the brand." },
    ],
    tools: ["Shopify", "Kommo", "Klaviyo", "Meta", "Google Ads", "Lookify"],
    relatedWork: ["mahima-mahajan"],
    faqs: [
      { q: "Do you build software or only use other tools?", a: "Both. We integrate leading platforms and build our own products, starting with Lookify, an AI virtual try-on app for Shopify." },
    ],
    keyword: "ecommerce analytics dashboard for fashion brands",
    metaTitle: "Data, AI & Automation for Fashion E-commerce",
    metaDescription: "Revenue dashboards, reporting automation, integrations and AI workflows for luxury e-commerce brands, plus Growify's own products.",
  },
];

export type Metric = { value: string; label: string; flag?: string };
export type CaseStudy = {
  slug: string;
  brand: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  image2?: string;
  image2Alt?: string;
  services: string[];
  metrics: Metric[];
  context: string;
  challenges: string[];
  approach: { title: string; items: string[] }[];
  timeline?: string[];
  chart?: { title: string; data: { label: string; value: number }[]; note?: string };
  outcome: string;
  dataNotes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mahima-mahajan",
    brand: "Mahima Mahajan",
    title: "Scaling a global couture business",
    category: "International D2C expansion",
    summary:
      "We built the systems, teams and global engine that let a couture label scale profitably across the US and Middle East.",
    image: "/img/mahima-cover.avif",
    imageAlt: "Three models in Mahima Mahajan embroidered green and violet couture against a white panelled wall",
    services: ["performance-marketing", "sales-conversion-support", "data-ai-automation", "shopify-website-development"],
    metrics: [
      { value: "81%", label: "YoY online growth" },
      { value: "2.54x", label: "AOV increase, 2021 to 2025" },
      { value: "251%", label: "international revenue growth per year" },
      { value: "2x", label: "ROI against industry benchmark" },
    ],
    context:
      "Mahima Mahajan is a couture label with demand well beyond India. The brief was to scale the online business consistently, expand into the USA and Middle East, and keep brand experience, fulfilment speed and profitability intact at scale.",
    challenges: [
      "Scale the online business consistently, not season by season",
      "Expand internationally into the USA and Middle East",
      "Maintain brand experience, fulfilment speed and profitability at scale",
    ],
    approach: [
      { title: "International market expansion", items: ["Region-wise awareness and conversion campaigns for the US", "Product mix optimised for US buying behaviour", "Market-specific imagery, styling and cultural nuance for the Middle East", "AI and chat-led assisted selling"] },
      { title: "Merchandising and operations", items: ["Right product mix for domestic versus international", "Ready-to-ship optimisation for faster dispatch", "Standardised order processing and escalation workflows", "Dedicated merchandiser working directly at the factory"] },
      { title: "Sales and support", items: ["International sales teams across time zones", "Deep product training for high-AOV selling", "Escalations converted into long-term loyalty"] },
      { title: "Data and ROI", items: ["Custom dashboard: market-wise sales, channel performance, spend versus return", "Dynamic budget reallocation by geography", "ROI stability maintained for the last 12 months"] },
    ],
    chart: {
      title: "Average YoY sales growth",
      data: [ { label: "2022", value: 178 }, { label: "2023", value: 224 }, { label: "2024", value: 202 }, { label: "2025", value: 60 } ],
    },
    outcome: "A scalable, profitable, globally relevant luxury e-commerce engine. Top performing markets: US, India and Canada.",
    dataNotes: [
      "Deck states \"average international contribution: 251% of total online revenue\". A share cannot exceed 100%; we show 251% as international revenue growth per year (also stated in the deck). Confirm the correct metric.",
      "Headline 81% YoY growth differs from the yearly chart values. Confirm the period each figure covers.",
      "ROI baseline (\"2x industry benchmark\") needs a named benchmark source before publication.",
      "Client approval for named results and imagery required.",
    ],
  },
  {
    slug: "ridhiiee-suuri",
    brand: "Ridhiiee Suuri",
    title: "A digital growth engine built from scratch",
    category: "Shopify build and system-led growth",
    summary:
      "We designed and run the brand's complete digital engine. Growth is capped by production capacity, not demand.",
    image: "/img/ridhiiee-cover.avif",
    imageAlt: "Model in an embroidered ivory kurta and green dupatta against a deep pink wall, Ridhiiee Suuri",
    image2: "/img/ridhiiee-lake.avif",
    image2Alt: "Model in a blush pink chikankari ensemble by a lake",
    services: ["shopify-website-development", "performance-marketing", "whatsapp-email-marketing", "seo-social-media"],
    metrics: [
      { value: "2.4x", label: "customer lifetime value" },
      { value: "2.1x", label: "average order value" },
      { value: "45–55%", label: "revenue from repeat customers" },
      { value: "80–90%", label: "of total brand revenue generated online" },
    ],
    context:
      "Ridhiiee Suuri (Drzya) needed a complete digital business, not a campaign. Growify designed and operates the whole engine for customers in India and abroad.",
    challenges: [
      "Build an online business that becomes the brand's main revenue channel",
      "Grow repeat purchase, not just first orders",
      "Protect profitability and brand equity while scaling",
    ],
    approach: [
      { title: "Commerce", items: ["Shopify website for India and global customers", "Sales strategy and conversion optimisation"] },
      { title: "Acquisition", items: ["Performance marketing on Meta and Google"] },
      { title: "Retention", items: ["Push marketing across WhatsApp, email and CRM"] },
      { title: "Visibility", items: ["SEO and long-term organic growth"] },
    ],
    chart: {
      title: "Average YoY sales growth",
      data: [ { label: "2022", value: 37 }, { label: "2023", value: 6 }, { label: "2024", value: 4 }, { label: "2025", value: 14 } ],
      note: "Average 13% annually over five years. Growth was deliberately capped by production capacity, not demand.",
    },
    outcome: "Brand equity, not just transactions. Stable ROI year on year, with system-led execution as a long-term business partner.",
    dataNotes: [
      "2021 baseline value is unlabeled in the source chart.",
      "Confirm whether \"Drzya by Ridhi Suri\" and \"Ridhiiee Suuri\" should be presented as one brand story.",
      "Client approval for named results and imagery required.",
    ],
  },
  {
    slug: "ridhi-mehra",
    brand: "Ridhi Mehra",
    title: "From digital launch to global couture",
    category: "High-AOV bridal and international sales",
    summary:
      "Seven years of compounding growth: a Shopify launch that became the label's strongest retail and reputation asset.",
    image: "/img/ridhi-cover.avif",
    imageAlt: "Two models in pastel embroidered sarees and jewellery against a carved beige wall, Ridhi Mehra",
    services: ["shopify-website-development", "performance-marketing", "whatsapp-email-marketing", "sales-conversion-support"],
    metrics: [
      { value: "69%", label: "total sales increase over seven years of YoY growth" },
      { value: "7 yrs", label: "continuous partnership" },
      { value: "1", label: "demand cluster turned into a physical store (Hyderabad)" },
      { value: "Rising", label: "AOV driven by bridal and couture" },
    ],
    context:
      "Ridhi Mehra launched on Shopify with Growify and evolved the site continuously over seven years, shifting from India-only sales to international couture and bridal demand.",
    challenges: [
      "Move from ads-led to system-led growth",
      "Sell bridal and couture online to global clients",
      "Separate online purchases from offline couture and store leads",
    ],
    timeline: [
      "Shopify website launched, then continuously evolved over seven years",
      "Gradual shift from India-only to international couture demand",
      "Entry into online bridal sales for global clients",
      "Hyderabad demand cluster identified, later converted into a store",
      "Sales funnel matured from ads-led to system-led growth",
      "The website became the brand's strongest retail and reputation asset",
    ],
    approach: [
      { title: "Commerce and funnel", items: ["Shopify for India and international", "Funnel separation: online purchases versus offline couture and store leads"] },
      { title: "Performance stack", items: ["Meta Ads: conversion and click-to-WhatsApp", "Google Search and Shopping", "Sale-specific end-of-season playbooks"] },
      { title: "Push and retention", items: ["Email automations and WhatsApp flows", "Sale-time retargeting and post-purchase journeys"] },
      { title: "Sales ops", items: ["Dedicated international WhatsApp sales teams", "Time-zone aligned execution", "Lead-to-conversion tracking"] },
    ],
    chart: {
      title: "Average YoY sales growth",
      data: [ { label: "2022", value: 9 }, { label: "2023", value: 14 }, { label: "2024", value: 5 }, { label: "2025", value: 31 } ],
      note: "Earlier years are shown in the source deck with repeated \"2021\" labels, so only 2022 to 2025 are plotted.",
    },
    outcome: "International penetration across the Middle East and tier-2 and tier-3 diaspora markets, with push channels contributing meaningfully to repeat revenue.",
    dataNotes: [
      "Deck states revenue scaled \"by 72M over 7 years\" without a currency. Confirm INR or USD before publishing.",
      "Source chart repeats the 2021 label four times; earlier-year values need re-labelling.",
      "Client approval for named results and imagery required.",
    ],
  },
];

export type FutureCase = { theme: string; brand: string; angle: string; dataNeeded: string[] };
export const futureCases: FutureCase[] = [
  { theme: "Shopify redesign and conversion", brand: "Tarun Tahiliani", angle: "Commerce development and site optimisation; Outlook reports online sales beat target four times over.", dataNeeded: ["Pre/post launch conversion rate and AOV", "Target vs actual online sales by quarter", "Before/after screenshots", "Client quote and approval"] },
  { theme: "Search-friendly custom architecture", brand: "Gaurav Gupta", angle: "Custom website architecture built for discovery and couture storytelling.", dataNeeded: ["Organic sessions and revenue, 12 months pre/post", "Indexed pages and ranking keywords", "Core Web Vitals before/after", "Design system visuals"] },
  { theme: "Luxury customer acquisition", brand: "House of Masaba", angle: "Shopify experience plus cross-channel growth across advertising and lifecycle marketing.", dataNeeded: ["ROAS / MER by channel", "New vs returning customer split", "Creative examples with permission", "Campaign timeline"] },
  { theme: "CRM and reporting automation", brand: "Ridhi Mehra or Mahima Mahajan", angle: "The custom market-wise dashboard and how budget reallocation decisions are made.", dataNeeded: ["Dashboard screenshots (anonymised)", "Hours of manual reporting saved", "Decisions changed by the data", "Tool stack used"] },
  { theme: "High-AOV attribution", brand: "Bridal client (TBC)", angle: "How WhatsApp and store enquiries are attributed back to ads for orders above ₹1 lakh.", dataNeeded: ["Lead-to-order conversion by source", "Average days to purchase", "Share of revenue from assisted sales", "Attribution method"] },
  { theme: "Virtual try-on", brand: "Lookify pilot brand (TBC)", angle: "Measured impact of AI try-on on engagement, add-to-cart and returns.", dataNeeded: ["A/B test design and sample size", "Try-on usage rate", "Conversion and return rate deltas", "Merchant quote"] },
  { theme: "Lifecycle email and WhatsApp", brand: "Ridhiiee Suuri", angle: "Deep dive into the flows behind 45–55% repeat revenue contribution.", dataNeeded: ["Flow-level revenue", "Opt-in growth", "Broadcast vs automated split", "Message examples"] },
  { theme: "Fine jewellery growth and SEO", brand: "Hazoorilal Legacy or Anmol Jewellers", angle: "How a heritage jeweller builds search demand and appointment bookings online.", dataNeeded: ["Ranking keywords and organic revenue", "Appointment / enquiry volume", "Average order value", "Store visits influenced"] },
  { theme: "AI workflows in operations", brand: "Internal (Growify)", angle: "How AI shortens content, reporting and sales-reply cycles for client teams.", dataNeeded: ["Before/after time per task", "Quality checks used", "Tools and prompts", "Client-facing outcomes"] },
];

export type Product = {
  slug: string;
  name: string;
  status: "live" | "in-development";
  oneLiner: string;
  description: string;
  url?: string;
  features?: string[];
  steps?: { title: string; body: string }[];
  plans?: { name: string; price: string; detail: string }[];
  inputsNeeded?: string[];
};

export const products: Product[] = [
  {
    slug: "lookify",
    name: "Lookify",
    status: "live",
    oneLiner: "AI virtual try-on for luxury and fashion brands.",
    description:
      "Lookify lets shoppers see how a garment looks on them from a single photo, right on the Shopify product page. It is built by Growify Digital and listed on the Shopify App Store.",
    url: "https://www.lookify.in/",
    steps: [
      { title: "Shopper taps Try it on", body: "A customisable button sits on the product page without changing the shopping flow." },
      { title: "Uploads one photo", body: "A single JPG or PNG is enough. No app download or account needed." },
      { title: "Sees the look in seconds", body: "A personalised try-on with a before and after comparison." },
    ],
    features: [
      "Works across body types, skin tones and photo angles",
      "One-click Shopify integration, desktop and mobile",
      "Customer email capture and built-in try-on analytics",
      "Integrations with Shopify Flow, Klaviyo and Mailchimp",
      "WhatsApp lead management on the Growth plan",
      "Custom branding, watermark and white-label for enterprise",
    ],
    plans: [
      { name: "Free", price: "₹0", detail: "10 try-ons a month" },
      { name: "Starter", price: "₹1,999/mo", detail: "100 try-ons" },
      { name: "Growth", price: "₹4,999/mo", detail: "350 try-ons, WhatsApp leads" },
      { name: "Pro", price: "₹9,999/mo", detail: "1,000 try-ons, custom watermark" },
      { name: "Enterprise", price: "Custom", detail: "Volume, white-label, call support" },
    ],
    inputsNeeded: [
      "In-store mode: hardware (mirror, kiosk or tablet), store pilots, staff flow",
      "Approved merchant logos and a measured case study",
      "Product demo video (30–60 seconds) and before/after image set with model consent",
    ],
  },
  {
    slug: "rossify",
    name: "Rossify",
    status: "in-development",
    oneLiner: "Product details to be supplied by the Growify product team.",
    description:
      "Rossify is part of Growify's proprietary product portfolio. This page is a structured placeholder: it shows how the product will be presented once the product team confirms positioning, features and availability.",
    inputsNeeded: [
      "One-line positioning and the problem it solves",
      "Who it is for and current availability (beta, waitlist, live)",
      "Three to five core features with screenshots",
      "Pricing model or \"talk to us\"",
      "Product URL, logo and brand colour",
      "One pilot result or customer quote (approved)",
    ],
  },
  {
    slug: "craftify",
    name: "Craftify",
    status: "in-development",
    oneLiner: "Product details to be supplied by the Growify product team.",
    description:
      "Craftify is part of Growify's proprietary product portfolio. This page is a structured placeholder. Note: an unrelated product named \"Craftify AI\" exists on the Shopify App Store, so naming and trademark should be checked before launch.",
    inputsNeeded: [
      "One-line positioning and the problem it solves",
      "Who it is for and current availability",
      "Three to five core features with screenshots",
      "Pricing model",
      "Product URL, logo and brand colour",
      "Naming and trademark clearance (see note)",
    ],
  },
];

export type Partner = { name: string; category: string; relation: "partner" | "integration"; note: string; url: string };
export const partnerCategories = [
  { key: "Advertising", value: "Reach high-intent buyers and resolve account issues fast." },
  { key: "Commerce", value: "Run the store, checkout and fulfilment reliably at scale." },
  { key: "Payments", value: "Collect domestic and international payments with less drop-off." },
  { key: "Engagement", value: "Hold sales and support conversations on WhatsApp and chat." },
  { key: "Retention & CRM", value: "Own customer data and turn it into repeat revenue." },
];
export const partners: Partner[] = [
  { name: "Meta", category: "Advertising", relation: "partner", note: "Agency partnership announced May 2023 (afaqs).", url: "https://www.meta.com/" },
  { name: "Google Ads", category: "Advertising", relation: "integration", note: "Search, Shopping and Performance Max campaigns.", url: "https://ads.google.com/" },
  { name: "Shopify / Shopify Plus", category: "Commerce", relation: "integration", note: "Primary commerce platform for client stores. Partner tier to confirm.", url: "https://www.shopify.com/plus" },
  { name: "Shiprocket", category: "Commerce", relation: "integration", note: "Shipping, tracking and courier selection.", url: "https://www.shiprocket.in/" },
  { name: "Razorpay", category: "Payments", relation: "integration", note: "Domestic payments and checkout. Official designation to confirm.", url: "https://razorpay.com/" },
  { name: "PayU", category: "Payments", relation: "integration", note: "Payment gateway option for client stores.", url: "https://payu.in/" },
  { name: "Easebuzz", category: "Payments", relation: "integration", note: "Payment gateway option for client stores.", url: "https://easebuzz.in/" },
  { name: "LimeChat", category: "Engagement", relation: "integration", note: "AI chat and WhatsApp commerce for D2C brands. Designation to confirm.", url: "https://www.limechat.ai/" },
  { name: "QuickReply.ai", category: "Engagement", relation: "integration", note: "WhatsApp marketing automation with deep Shopify integration. Designation to confirm.", url: "https://www.quickreply.ai/" },
  { name: "Interakt", category: "Engagement", relation: "integration", note: "WhatsApp Business API, broadcasts and automation.", url: "https://www.interakt.shop/" },
  { name: "Klaviyo", category: "Retention & CRM", relation: "integration", note: "Email and SMS automation and segmentation.", url: "https://www.klaviyo.com/" },
  { name: "Kommo", category: "Retention & CRM", relation: "integration", note: "Sales CRM and lead management.", url: "https://www.kommo.com/" },
];

export const industries = [
  { slug: "luxury-fashion-couture", name: "Luxury fashion and couture", short: "Designer labels selling high-AOV collections in India and abroad.", needs: ["Brand-led Shopify storytelling", "International markets and diaspora targeting", "Assisted selling for made-to-order pieces"], keyword: "digital marketing agency for fashion designers", related: ["mahima-mahajan", "ridhi-mehra"] },
  { slug: "bridal-occasion-wear", name: "Bridal and occasion wear", short: "Wedding-season demand, long consideration and appointment-led sales.", needs: ["Season-aware media plans", "WhatsApp consultation flows", "Lead-to-store attribution"], keyword: "bridal wear brand marketing", related: ["ridhi-mehra"] },
  { slug: "fine-jewellery", name: "Fine jewellery", short: "Heritage and contemporary jewellers building trust online.", needs: ["Trust signals and certification content", "Appointment and video-call booking", "Search visibility for high-value queries"], keyword: "jewellery ecommerce marketing agency", related: [] },
  { slug: "lifestyle-home", name: "Lifestyle, home and wellness", short: "Premium D2C brands growing repeat purchase.", needs: ["Retention-first CRM", "Subscription and replenishment journeys", "Content-led SEO"], keyword: "d2c lifestyle brand growth agency", related: ["ridhiiee-suuri"] },
];

export const insights = [
  { slug: "shopify-custom-vs-template-luxury", title: "Custom, semi-custom or template: choosing a Shopify build for a luxury label", excerpt: "A practical way to decide how much to invest in your storefront, and when to revisit the decision.", status: "published", date: "2026-10-21", read: "6 min" },
  { slug: "whatsapp-selling-high-aov", title: "Selling ₹1 lakh+ orders on WhatsApp without losing the brand", excerpt: "How trained sales desks, response times and catalogue messages change conversion for couture.", status: "planned" },
  { slug: "international-couture-playbook", title: "Selling Indian couture to the US and Middle East", excerpt: "Market-specific imagery, pricing and shipping decisions that make international demand convert.", status: "planned" },
  { slug: "virtual-try-on-fashion-ecommerce", title: "Does virtual try-on work for Indian fashion?", excerpt: "What to measure in a try-on pilot, and how to read the results honestly.", status: "planned" },
  { slug: "ai-search-luxury-brands", title: "How luxury brands get cited by AI assistants", excerpt: "Structured, proof-led content that search engines and AI answers can trust.", status: "planned" },
  { slug: "sale-season-playbook", title: "The end-of-season sale playbook for designer labels", excerpt: "Pre-buzz, retargeting and inventory decisions, week by week.", status: "planned" },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export const principles = [
  "True partners", "Intent driven", "No vanity marketing", "Always one step ahead", "Understand luxury markets",
  "Sales support", "Attention to detail", "Leaders in systems", "Structured",
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Lower-case the first word for mid-sentence use, keeping brand names and acronyms intact. */
export const lc = (name: string) =>
  name.replace(/^(\S+)/, (w) => (/^(Shopify|SEO|WhatsApp|AI)$/.test(w) ? w : w.toLowerCase()));
