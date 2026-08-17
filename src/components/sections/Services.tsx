import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceGlyph } from "@/components/ui/Icon";
import { services } from "@/content/site";

export function Services() {
  return (
    <Section id="servicios" aria-labelledby="servicios-titulo">
      <SectionHeading
        id="servicios-titulo"
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service) => (
          <li
            key={service.id}
            className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <ServiceGlyph name={service.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
              {service.description}
            </p>

            <Link
              href="#contacto"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              aria-label={`${services.learnMoreLabel} sobre ${service.name}`}
            >
              {services.learnMoreLabel}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
