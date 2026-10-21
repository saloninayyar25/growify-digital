import type { MetadataRoute } from "next";
import { caseStudies, industries, insights, products, services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority });
  return [
    u("/", 1, "weekly"),
    u("/services", 0.9),
    ...services.map((s) => u(`/services/${s.slug}`, 0.9)),
    u("/work", 0.9, "weekly"),
    ...caseStudies.map((c) => u(`/work/${c.slug}`, 0.8)),
    u("/products", 0.8),
    ...products.filter((p) => p.status === "live").map((p) => u(`/products/${p.slug}`, 0.8)),
    u("/partners", 0.6),
    u("/industries", 0.7),
    ...industries.map((i) => u(`/industries/${i.slug}`, 0.7)),
    u("/about", 0.6),
    u("/life-at-growify", 0.5),
    u("/careers", 0.5),
    u("/insights", 0.7, "weekly"),
    ...insights.filter((a) => a.status === "published").map((a) => u(`/insights/${a.slug}`, 0.6)),
    u("/contact", 0.8),
  ];
}
