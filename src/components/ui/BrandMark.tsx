import { cn } from "@/lib/utils";

/**
 * Isotipo de Build Bytes.
 *
 * Concepto: una "B" de trazo constante (6 u sobre una retícula de 48 u) cuyo
 * bowl inferior es más ancho y va en un tono más claro: dos capas apiladas
 * sobre una misma asta — lo que se construye (build) por bloques (bytes).
 * Las contraformas miden 6 u, así que la letra sigue leyéndose a 16 px.
 *
 * El degradado va en el contenedor (no en <defs>) para no repetir ids cuando
 * el logo aparece más de una vez en la página (header + footer).
 *
 * Cualquier cambio de geometría debe replicarse en:
 *   - src/lib/brand-mark-og.tsx   (favicon y Open Graph)
 *   - public/logo*.svg            (versiones sueltas para terceros)
 */
type BrandMarkProps = {
  className?: string;
  /** Versión para fondos oscuros: teja blanca con glifo azul. */
  inverse?: boolean;
};

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  const solid = inverse ? "#1d4ed8" : "#ffffff";
  const accent = inverse ? "#60a5fa" : "#bfdbfe";

  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0 rounded-[25%]", className)}
      style={{
        background: inverse
          ? "#ffffff"
          : "linear-gradient(135deg, #2f6fed 0%, #1e40af 100%)",
      }}
    >
      <svg
        viewBox="0 0 48 48"
        className="h-full w-full"
        fill="none"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.5 12V36" stroke={solid} />
          <path d="M15.5 12h7.5a6 6 0 0 1 0 12h-7.5" stroke={solid} />
          <path d="M15.5 24h10.5a6 6 0 0 1 0 12h-10.5" stroke={accent} />
        </g>
      </svg>
    </span>
  );
}
