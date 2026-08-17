"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextAreaField, TextField } from "@/components/forms/FormField";
import { sendContactMessage } from "@/lib/contact-service";
import {
  contactSchema,
  toFieldErrors,
  type ContactFieldName,
  type FieldErrors,
} from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

type Values = typeof emptyValues;

export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  // Evita envíos duplicados aunque el navegador dispare submit dos veces.
  const inFlight = useRef(false);

  const update = (field: keyof Values) => (event: { target: { value: string } }) => {
    const value = event.target.value;
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      if (!previous[field as ContactFieldName]) return previous;
      const next = { ...previous };
      delete next[field as ContactFieldName];
      return next;
    });
  };

  const validateField = (field: ContactFieldName) => () => {
    const result = contactSchema.safeParse(values);
    if (result.success) {
      setErrors({});
      return;
    }
    const fieldErrors = toFieldErrors(result.error);
    setErrors((previous) => ({ ...previous, [field]: fieldErrors[field] }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors = toFieldErrors(result.error);
      setErrors(fieldErrors);
      setStatus("error");
      setFeedback("Revisa los campos marcados antes de enviar.");
      const firstField = Object.keys(fieldErrors)[0];
      if (firstField) document.getElementById(firstField)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus("submitting");
    setErrors({});
    setFeedback("");

    try {
      const outcome = await sendContactMessage(result.data);

      if (!outcome.ok) {
        setStatus("error");
        setFeedback(outcome.message);
        return;
      }

      setValues(emptyValues);
      setStatus("success");
      setFeedback(outcome.message);
    } finally {
      inFlight.current = false;
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Nombre"
          required
          autoComplete="name"
          placeholder="María Pérez"
          value={values.name}
          onChange={update("name")}
          onBlur={validateField("name")}
          error={errors.name}
          disabled={isSubmitting}
        />
        <TextField
          id="company"
          label="Empresa"
          autoComplete="organization"
          placeholder="Nombre de tu empresa"
          value={values.company}
          onChange={update("company")}
          onBlur={validateField("company")}
          error={errors.company}
          disabled={isSubmitting}
        />
        <TextField
          id="email"
          label="Correo electrónico"
          required
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="maria@empresa.cl"
          value={values.email}
          onChange={update("email")}
          onBlur={validateField("email")}
          error={errors.email}
          disabled={isSubmitting}
        />
        <TextField
          id="phone"
          label="Teléfono"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+56 9 1234 5678"
          value={values.phone}
          onChange={update("phone")}
          onBlur={validateField("phone")}
          error={errors.phone}
          disabled={isSubmitting}
        />
        <div className="sm:col-span-2">
          <TextField
            id="subject"
            label="Asunto"
            required
            placeholder="Consulta por desarrollo de software"
            value={values.subject}
            onChange={update("subject")}
            onBlur={validateField("subject")}
            error={errors.subject}
            disabled={isSubmitting}
          />
        </div>
        <div className="sm:col-span-2">
          <TextAreaField
            id="message"
            label="Mensaje"
            required
            placeholder="Cuéntanos brevemente qué necesitas y en qué plazo."
            hint="Mínimo 20 caracteres."
            value={values.message}
            onChange={update("message")}
            onBlur={validateField("message")}
            error={errors.message}
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Campo trampa anti-spam: invisible y fuera del orden de tabulación. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="website">No completar este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update("website")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          Los campos marcados con <span className="text-brand-700">*</span> son
          obligatorios.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send aria-hidden="true" className="h-4 w-4" />
              Enviar mensaje
            </>
          )}
        </Button>
      </div>

      <div aria-live="polite" role="status" className="mt-4 empty:mt-0">
        {status === "success" && feedback ? (
          <p className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {feedback}
          </p>
        ) : null}
        {status === "error" && feedback ? (
          <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
