import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cta } from "@/content/site";

export function CallToAction() {
  return (
    <section className="bg-brand-900 py-16 sm:py-20" aria-labelledby="cta-titulo">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="cta-titulo" className="text-3xl font-bold text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100 sm:text-lg">
              {cta.description}
            </p>
          </div>
          <ButtonLink href={cta.button.href} size="lg" variant="inverse" className="shrink-0">
            {cta.button.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
