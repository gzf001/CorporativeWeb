/**
 * Versión del isotipo dibujada con cajas, para el generador de imágenes
 * (`next/og`), que no acepta SVG anidado. Misma retícula de 48 u que
 * src/components/ui/BrandMark.tsx: cualquier cambio debe replicarse allí.
 *
 * Los dos bowls de la "B" se dibujan como cajas con borde de 6 u y sin borde
 * izquierdo, con las esquinas derechas redondeadas a la mitad de su alto: eso
 * reproduce exactamente el trazo del SVG (asta + semicírculo).
 */
export function OgBrandMark({
  size,
  inverse = false,
}: {
  size: number;
  inverse?: boolean;
}) {
  const u = (value: number) => (value * size) / 48;
  const solid = inverse ? "#1d4ed8" : "#ffffff";
  const accent = inverse ? "#60a5fa" : "#bfdbfe";

  const bowl = (color: string) =>
    ({
      position: "absolute",
      display: "flex",
      left: u(12.5),
      borderStyle: "solid",
      borderColor: color,
      borderTopWidth: u(6),
      borderRightWidth: u(6),
      borderBottomWidth: u(6),
      borderLeftWidth: 0,
      borderTopRightRadius: u(9),
      borderBottomRightRadius: u(9),
    }) as const;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: size,
        height: size,
        borderRadius: u(12),
        ...(inverse
          ? { backgroundColor: "#ffffff" }
          : {
              backgroundImage:
                "linear-gradient(135deg, #2f6fed 0%, #1e40af 100%)",
            }),
      }}
    >
      {/* Asta vertical */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          left: u(12.5),
          top: u(9),
          width: u(6),
          height: u(30),
          borderRadius: u(3),
          backgroundColor: solid,
        }}
      />
      {/* Bowl superior */}
      <div style={{ ...bowl(solid), top: u(9), width: u(19.5), height: u(18) }} />
      {/* Bowl inferior (tono claro) */}
      <div style={{ ...bowl(accent), top: u(21), width: u(22.5), height: u(18) }} />
    </div>
  );
}
