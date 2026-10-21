/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true }, // assets are pre-compressed AVIF; no runtime optimisation needed
  async headers() {
    return [
      {
        source: "/:path(img|office)/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    // Legacy growify.in (Shopify) URLs -> new architecture. Extend after a full crawl.
    return [
      { source: "/pages/tech", destination: "/partners", permanent: true },
      { source: "/pages/about-us", destination: "/about", permanent: true },
      { source: "/pages/careers", destination: "/careers", permanent: true },
      { source: "/pages/contact", destination: "/contact", permanent: true },
      { source: "/blogs/:path*", destination: "/insights", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
    ];
  },
};
export default nextConfig;
