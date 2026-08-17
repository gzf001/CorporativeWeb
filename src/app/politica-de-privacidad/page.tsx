import type { Metadata } from "next";
import { LegalArticle } from "@/components/layout/LegalArticle";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${company.name} trata los datos personales enviados a través del sitio web.`,
  alternates: { canonical: "/politica-de-privacidad" },
};

/** TODO: Contenido de ejemplo. Reemplazar por el texto legal revisado por la empresa. */
export default function PrivacyPage() {
  return (
    <LegalArticle title="Política de privacidad" updatedAt="1 de enero de 2025">
      <p>
        Este es un texto de ejemplo. Describe de manera general cómo {company.name}{" "}
        trata la información que las personas envían a través de este sitio web. Debe
        ser revisado y reemplazado por un texto legal definitivo antes de publicar el
        sitio.
      </p>

      <h2>Datos que recopilamos</h2>
      <p>
        A través del formulario de contacto solicitamos nombre, empresa, correo
        electrónico, teléfono, asunto y mensaje. Estos datos se utilizan únicamente para
        responder la solicitud recibida.
      </p>

      <h2>Finalidad del tratamiento</h2>
      <ul>
        <li>Responder consultas comerciales y solicitudes de información.</li>
        <li>Elaborar propuestas de servicios cuando corresponda.</li>
        <li>Mantener el registro de comunicaciones asociadas a una solicitud.</li>
      </ul>

      <h2>Conservación</h2>
      <p>
        Los mensajes se conservan solo por el tiempo necesario para atender la solicitud.
        No se almacenan datos sensibles ni se elaboran perfiles con la información
        recibida.
      </p>

      <h2>Terceros</h2>
      <p>
        Utilizamos un proveedor de envío de correo electrónico para hacer llegar los
        mensajes del formulario a nuestra bandeja de entrada. No vendemos ni cedemos
        datos personales a terceros con fines comerciales.
      </p>

      <h2>Derechos de las personas</h2>
      <p>
        Puedes solicitar el acceso, la rectificación o la eliminación de tus datos
        escribiendo a{" "}
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
