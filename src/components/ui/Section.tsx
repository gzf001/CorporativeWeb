import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Fondo alterno para separar visualmente secciones contiguas. */
  muted?: boolean;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className,
  muted = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-24",
        muted ? "bg-ink-50" : "bg-white",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
