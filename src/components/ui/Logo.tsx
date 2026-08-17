import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/BrandMark";
import { company } from "@/content/site";

type LogoProps = {
  className?: string;
  /** Variante para fondos oscuros (footer). */
  inverse?: boolean;
  href?: string;
};

export function Logo({ className, inverse = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md text-lg font-bold tracking-tight",
        className,
      )}
      aria-label={`${company.name} — ir al inicio`}
    >
      <BrandMark inverse={inverse} className="h-9 w-9" />
      <span className={inverse ? "text-white" : "text-ink-900"}>
        {company.nameParts.first}
        <span className={inverse ? "text-brand-400" : "text-brand-600"}>
          {company.nameParts.second}
        </span>
      </span>
    </Link>
  );
}
