import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
        Error 404
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Página no encontrada</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-600">
        La página que buscas no existe o fue movida. Puedes volver al inicio o
        escribirnos si necesitas ayuda.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/" size="lg">
          Volver al inicio
        </ButtonLink>
        <ButtonLink href="/#contacto" size="lg" variant="secondary">
          Contáctanos
        </ButtonLink>
      </div>
    </Container>
  );
}
