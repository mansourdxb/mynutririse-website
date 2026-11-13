import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Embeddable calculators may be framed by any site and are not indexed.
  // Only /embed/* is affected; the rest of the site keeps its framing rules.
  async headers() {
    return [
      {
        source: "/embed/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
          { key: "X-Robots-Tag", value: "noindex, follow" },
        ],
      },
    ];
  },
};

export default nextConfig;
