import { z } from "zod";

const phonePattern = /^[+()\d\s.-]{7,25}$/;

/**
 * Esquema único compartido por el cliente y el servidor.
 * Evita duplicar reglas y garantiza que la validación del navegador
 * nunca sea la única barrera.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre (mínimo 2 caracteres).")
    .max(80, "El nombre no puede superar los 80 caracteres."),
  company: z
    .string()
    .trim()
    .max(80, "El nombre de la empresa no puede superar los 80 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico.")
    .max(120, "El correo no puede superar los 120 caracteres.")
    .pipe(z.email("Ingresa un correo electrónico válido.")),
  phone: z
    .string()
    .trim()
    .max(25, "El teléfono no puede superar los 25 caracteres.")
    .refine(
      (value) => value === "" || phonePattern.test(value),
      "Ingresa un teléfono válido (solo números, espacios, + o -).",
    ),
  subject: z
    .string()
    .trim()
    .min(3, "Indica el asunto (mínimo 3 caracteres).")
    .max(120, "El asunto no puede superar los 120 caracteres."),
  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres).")
    .max(2000, "El mensaje no puede superar los 2000 caracteres."),
  /** Campo trampa invisible para bots. Debe llegar vacío. */
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFieldName = keyof Omit<ContactFormValues, "website">;

export type FieldErrors = Partial<Record<ContactFieldName, string>>;

/** Convierte los errores de Zod en un mapa campo → primer mensaje. */
export function toFieldErrors(error: z.ZodError<ContactFormValues>): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as ContactFieldName | undefined;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return errors;
}
