import { ImageResponse } from "next/og"
import { site } from "@/lib/site"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#0b2440",
          backgroundImage:
            "linear-gradient(to right, rgba(111,168,220,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,168,220,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#eaf3fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: "#6d8dab", letterSpacing: 3 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              border: "2px solid rgba(159,197,232,0.4)",
              color: "#6fd3ff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            MM
          </div>
          <span>{`// DRAWING NO. 001 — ${site.location.toUpperCase()}`}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2 }}>I design the system,</div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2 }}>build the product,</div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2, color: "#6fd3ff" }}>
            and keep it standing.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800 }}>{site.name}</div>
            <div style={{ fontSize: 22, color: "#a8c3da" }}>{`${site.role} · TypeScript, Node, React, PostgreSQL, AWS`}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(159,197,232,0.4)",
              padding: "10px 16px",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            <div style={{ width: 10, height: 10, background: "#7fe0a7" }} />
            AVAILABLE NOW
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
