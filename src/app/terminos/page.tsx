import type { Metadata } from "next";
import { LegalArticle } from "@/components/layout/LegalArticle";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Condiciones de uso del sitio web de ${company.name}.`,
  alternates: { canonical: "/terminos" },
};

/** TODO: Contenido de ejemplo. Reemplazar por el texto legal revisado por la empresa. */
export default function TermsPage() {
  return (
    <LegalArticle title="Términos y condiciones" updatedAt="1 de enero de 2025">
      <p>
        Este es un texto de ejemplo que regula el uso de este sitio web. Debe ser
        revisado y reemplazado por un texto legal definitivo antes de publicar el sitio.
      </p>

      <h2>Uso del sitio</h2>
      <p>
        El contenido de este sitio se entrega con fines informativos. {company.name} puede
        modificar o actualizar la información publicada en cualquier momento y sin aviso
        previo.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, marcas, logotipos y elementos gráficos presentes en el sitio
        pertenecen a sus respectivos titulares y no pueden reproducirse sin autorización.
      </p>

      <h2>Formulario de contacto</h2>
      <ul>
        <li>El envío de un mensaje no constituye una relación contractual.</li>
        <li>La información entregada debe ser veraz y no infringir derechos de terceros.</li>
        <li>Las propuestas comerciales se formalizan siempre por escrito.</li>
      </ul>

      <h2>Limitación de responsabilidad</h2>
      <p>
        {company.name} no responde por daños derivados de la imposibilidad de acceder al
        sitio o de decisiones tomadas exclusivamente en base a la información publicada
        en él.
      </p>

      <h2>Contacto</h2>
      <p>
        Ante cualquier duda sobre estos términos puedes escribir a{" "}
        <a
          href={`mailto:${company.email}`}
          className="font-medium text-brand-700 underline underline-offset-2"
        >
          {company.email}
        </a>
        .
      </p>
    </LegalArticle>
  );
}
