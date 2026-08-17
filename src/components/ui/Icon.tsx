import {
  Award,
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  Gauge,
  Handshake,
  Headphones,
  ShieldCheck,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { AdvantageIcon, ServiceIcon } from "@/content/site";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  strategy: Target,
  digital: Workflow,
  code: Code2,
  support: Headphones,
  data: Database,
  cloud: Cloud,
};

const advantageIcons: Record<AdvantageIcon, LucideIcon> = {
  experience: Award,
  quality: BadgeCheck,
  care: Handshake,
  speed: Gauge,
  commitment: ShieldCheck,
};

export function ServiceGlyph({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  const Glyph = serviceIcons[name];
  return <Glyph aria-hidden="true" className={className} strokeWidth={1.75} />;
}

export function AdvantageGlyph({
  name,
  className,
}: {
  name: AdvantageIcon;
  className?: string;
}) {
  const Glyph = advantageIcons[name];
  return <Glyph aria-hidden="true" className={className} strokeWidth={1.75} />;
}
