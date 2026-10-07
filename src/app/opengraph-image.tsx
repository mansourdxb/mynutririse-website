import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "MyNutriRise — Nutrition & Fitness tracking for real life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "src/app/icon.png"))).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <img src={logo} width={64} height={64} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700, color: "#047857" }}>
            MyNutriRise
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 68,
            fontWeight: 800,
            color: "#1e293b",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 1050,
          }}
        >
          Nutrition &amp; Fitness tracking
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#059669",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 1050,
          }}
        >
          for real life
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#64748b",
            textAlign: "center",
          }}
        >
          AI meal scanning · Halal &amp; cultural diets · Fasting · Coaching
        </div>
      </div>
    ),
    { ...size }
  );
}
