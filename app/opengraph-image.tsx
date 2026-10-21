import { ImageResponse } from "next/og";

export const alt = "Growify: growth systems for luxury, couture and fine jewellery brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#f0e9fc 0%,#e2d5f8 55%,#b892f5 100%)", color: "#22152f" }}>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>growify</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3, maxWidth: 900 }}>Luxury grows on systems, not campaigns.</div>
        <div style={{ fontSize: 28, color: "#3a2852" }}>Shopify, performance, WhatsApp, sales desks, data, AI and Lookify</div>
      </div>
    ),
    size
  );
}
