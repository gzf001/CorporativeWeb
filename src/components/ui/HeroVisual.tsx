/**
 * Ilustración vectorial del hero: representa un panel de control de procesos.
 * Se usa SVG en lugar de una imagen para evitar peticiones extra y mantener
 * la nitidez en cualquier resolución.
 * TODO: Reemplazar por una fotografía o ilustración de marca si se dispone de ella.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-label="Ilustración de un panel de control con indicadores de procesos y crecimiento"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="520" height="420" rx="24" fill="#f1f5f9" />
      <rect x="36" y="40" width="300" height="200" rx="16" fill="#ffffff" />
      <rect x="36" y="40" width="300" height="200" rx="16" stroke="#e2e8f0" strokeWidth="1.5" />

      <rect x="56" y="62" width="96" height="10" rx="5" fill="#cbd5e1" />
      <rect x="56" y="82" width="150" height="10" rx="5" fill="#e2e8f0" />

      <polyline
        points="56,196 104,168 152,178 200,132 248,146 296,104"
        stroke="#1d4ed8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 196 104 168 152 178 200 132 248 146 296 104 296 216 56 216Z"
        fill="#2f6fed"
        fillOpacity="0.08"
      />
      <circle cx="296" cy="104" r="6" fill="#1d4ed8" />
      <line x1="56" y1="216" x2="296" y2="216" stroke="#e2e8f0" strokeWidth="2" />

      <rect x="192" y="200" width="292" height="180" rx="16" fill="#ffffff" />
      <rect x="192" y="200" width="292" height="180" rx="16" stroke="#e2e8f0" strokeWidth="1.5" />

      <rect x="212" y="224" width="120" height="10" rx="5" fill="#cbd5e1" />
      <rect x="212" y="256" width="120" height="8" rx="4" fill="#e2e8f0" />
      <rect x="212" y="256" width="82" height="8" rx="4" fill="#2f6fed" />
      <rect x="212" y="288" width="120" height="8" rx="4" fill="#e2e8f0" />
      <rect x="212" y="288" width="54" height="8" rx="4" fill="#60a5fa" />
      <rect x="212" y="320" width="120" height="8" rx="4" fill="#e2e8f0" />
      <rect x="212" y="320" width="98" height="8" rx="4" fill="#1e40af" />

      <rect x="360" y="224" width="104" height="132" rx="12" fill="#0b1729" />
      <rect x="378" y="248" width="68" height="8" rx="4" fill="#334155" />
      <rect x="378" y="266" width="46" height="8" rx="4" fill="#475569" />
      <rect x="378" y="300" width="68" height="34" rx="8" fill="#2f6fed" />

      <circle cx="440" cy="92" r="44" fill="#dbeafe" />
      <circle cx="440" cy="92" r="26" fill="#ffffff" />
      <path
        d="M430 92l7 7 14-15"
        stroke="#1d4ed8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
