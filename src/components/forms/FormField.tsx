import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlClasses =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 " +
  "transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 " +
  "focus-visible:outline-brand-600 disabled:bg-ink-50 disabled:text-ink-500";

type BaseFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

function Label({ id, label, required }: Pick<BaseFieldProps, "id" | "label" | "required">) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-ink-800">
      {label}
      {required ? (
        <span className="ml-0.5 text-brand-700" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ml-1.5 text-xs font-normal text-ink-400">(opcional)</span>
      )}
    </label>
  );
}

function Messages({
  id,
  error,
  hint,
}: {
  id: string;
  error?: string;
  hint?: string;
}) {
  return (
    <>
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

type TextFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;

export function TextField({
  id,
  label,
  error,
  hint,
  required,
  className,
  ...props
}: TextFieldProps) {
  return (
    <div>
      <Label id={id} label={label} required={required} />
      <input
        id={id}
        name={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(
          controlClasses,
          "mt-1.5",
          error ? "border-red-400" : "border-ink-300 hover:border-ink-400",
          className,
        )}
        {...props}
      />
      <Messages id={id} error={error} hint={hint} />
    </div>
  );
}

type TextAreaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({
  id,
  label,
  error,
  hint,
  required,
  className,
  rows = 5,
  ...props
}: TextAreaFieldProps) {
  return (
    <div>
      <Label id={id} label={label} required={required} />
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(
          controlClasses,
          "mt-1.5 resize-y",
          error ? "border-red-400" : "border-ink-300 hover:border-ink-400",
          className,
        )}
        {...props}
      />
      <Messages id={id} error={error} hint={hint} />
    </div>
  );
}
