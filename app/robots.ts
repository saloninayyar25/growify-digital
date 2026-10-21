import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  // While this is a prototype, block crawling. At launch set site.prototype = false.
  if (site.prototype) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/strategy"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
