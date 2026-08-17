import { company } from "@/content/site";
import type { ContactFormValues } from "@/lib/validation";

/**
 * Envío del formulario sin backend propio.
 *
 * El navegador entrega el mensaje directamente a Web3Forms, que lo reenvía por
 * correo a la casilla asociada a la access key. La key es pública por diseño:
 * solo autoriza a enviar correos a esa casilla, nunca a leerlos.
 *
 * Para cambiar de proveedor (Formspree, Getform, Basin) basta con ajustar
 * ENDPOINT y el cuerpo de la petición: el resto de la aplicación no cambia.
 */
const ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export type SendResult = { ok: boolean; message: string };

const SUCCESS_MESSAGE =
  "¡Gracias por escribirnos! Te responderemos dentro de 48 horas hábiles.";

const GENERIC_ERROR =
  `No pudimos enviar tu mensaje en este momento. Inténtalo más tarde o ` +
  `escríbenos directamente a ${company.email}.`;

export async function sendContactMessage(
  values: ContactFormValues,
): Promise<SendResult> {
  // Campo trampa relleno: es un bot. Se corta el envío sin darle pistas.
  if (values.website) {
    return { ok: true, message: SUCCESS_MESSAGE };
  }

  if (!accessKey) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[contacto] Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY; el envío se simula en desarrollo.",
        values,
      );
      return { ok: true, message: SUCCESS_MESSAGE };
    }
    console.error("[contacto] Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en producción.");
    return { ok: false, message: GENERIC_ERROR };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Web] ${values.subject}`,
        from_name: `Formulario web ${company.name}`,
        replyto: values.email,
        botcheck: "",
        Nombre: values.name,
        Empresa: values.company || "No indicada",
        Correo: values.email,
        Telefono: values.phone || "No indicado",
        Asunto: values.subject,
        Mensaje: values.message,
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !data.success) {
      console.error("[contacto] El servicio rechazó el envío:", data.message);
      return { ok: false, message: GENERIC_ERROR };
    }

    return { ok: true, message: SUCCESS_MESSAGE };
  } catch {
    return {
      ok: false,
      message:
        "No pudimos conectar con el servicio de envío. Revisa tu conexión e inténtalo nuevamente.",
    };
  }
}
