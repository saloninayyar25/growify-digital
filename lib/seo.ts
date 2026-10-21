import type { Metadata } from "next";
import { site } from "./content";

type MetaInput = { title: string; description: string; path: string; noindex?: boolean; image?: string };

export function meta({ title, description, path, noindex, image }: MetaInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex || site.prototype ? { index: false, follow: !noindex } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#org`,
  name: site.name,
  legalName: "Growify Digital LLP",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  founders: [
    { "@type": "Person", name: "Rishab Mehra" },
    { "@type": "Person", name: "Disha Bhatnagar" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram, site.linkedin],
  slogan: site.tagline,
};
