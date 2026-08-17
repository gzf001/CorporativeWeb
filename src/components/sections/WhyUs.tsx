import { Section, SectionHeading } from "@/components/ui/Section";
import { AdvantageGlyph } from "@/components/ui/Icon";
import { whyUs } from "@/content/site";

export function WhyUs() {
  return (
    <Section id="por-que-elegirnos" muted aria-labelledby="por-que-elegirnos-titulo">
      <SectionHeading
        id="por-que-elegirnos-titulo"
        eyebrow={whyUs.eyebrow}
        title={whyUs.title}
        description={whyUs.description}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.items.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-6"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-700">
              <AdvantageGlyph name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
