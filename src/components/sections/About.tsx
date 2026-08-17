import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="nosotros" muted aria-labelledby="nosotros-titulo">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="nosotros-titulo"
            eyebrow={about.eyebrow}
            title={about.title}
            align="left"
          />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ink-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:content-center">
          {about.highlights.map((highlight) => (
            <li
              key={highlight.title}
              className="rounded-xl border border-ink-200 bg-white p-5"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {highlight.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
