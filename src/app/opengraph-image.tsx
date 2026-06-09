import { ImageResponse } from "next/og";

export const alt = "MyNutriRise — Snap a photo. Know your nutrition.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #FFFBF5 0%, #ecfdf5 100%)",
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
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
            }}
          >
            🌱
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, color: "#047857" }}>
            MyNutriRise
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 76,
            fontWeight: 800,
            color: "#1e293b",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          Snap a photo.
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "#059669",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          Know your nutrition.
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
