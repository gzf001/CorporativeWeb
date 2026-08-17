import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 border-b border-ink-100 bg-white">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-reveal">
            <p className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} size="lg" variant="secondary">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-ink-900 sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-ink-500">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <HeroVisual className="h-auto w-full rounded-2xl border border-ink-100 shadow-card" />
          </div>
        </div>
      </Container>
    </section>
  );
}
