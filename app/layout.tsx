import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/syne";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClickTracker from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/content";
import { organizationLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Growify | Growth, commerce and AI for luxury fashion brands", template: "%s | Growify" },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: site.prototype ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = { themeColor: "#f0e9fc", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {site.prototype && (
          <div className="proto-banner">
            Redesign prototype for review. Not the live growify.in website. <Link href="/strategy">Read the strategy notes</Link>
          </div>
        )}
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ClickTracker />
        <Analytics />
        <JsonLd data={[organizationLd, { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url }]} />
      </body>
    </html>
  );
}
