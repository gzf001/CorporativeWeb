import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

type LegalArticleProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

/**
 * Contenedor tipográfico para páginas legales.
 * Los estilos se aplican por selector para no repetir clases en cada párrafo.
 */
export function LegalArticle({ title, updatedAt, children }: LegalArticleProps) {
  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-500">Última actualización: {updatedAt}</p>

        <div className="mt-8 space-y-4 text-ink-600 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </article>
  );
}
