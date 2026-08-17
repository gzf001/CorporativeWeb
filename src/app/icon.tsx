import { ImageResponse } from "next/og";
import { OgBrandMark } from "@/lib/brand-mark-og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: mismo isotipo del sitio, generado en build. */
export default function Icon() {
  return new ImageResponse(<OgBrandMark size={32} />, size);
}
