import { ImageResponse } from "next/og";
import { company, seo } from "@/content/site";
import { OgBrandMark } from "@/lib/brand-mark-og";

export const alt = `${company.name} — ${company.industry}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen Open Graph generada en build: sin archivos binarios en el repositorio. */
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
          backgroundColor: "#0b1729",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <OgBrandMark size={96} />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            <span style={{ color: "#ffffff" }}>{company.nameParts.first}</span>
            <span style={{ color: "#60a5fa" }}>{company.nameParts.second}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {company.industry}
          </div>
          <div style={{ color: "#93c5fd", fontSize: 28, maxWidth: 900 }}>
            {seo.description.slice(0, 120)}
          </div>
        </div>

        <div style={{ color: "#64748b", fontSize: 24, display: "flex" }}>
          {company.address}
        </div>
      </div>
    ),
    size,
  );
}
