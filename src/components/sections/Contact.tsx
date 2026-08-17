import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section, SectionHeading } from "@/components/ui/Section";
import { company, contact } from "@/content/site";

export function Contact() {
  return (
    <Section id="contacto" aria-labelledby="contacto-titulo">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="contacto-titulo"
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
            align="left"
          />

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-medium text-ink-900">Correo</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-ink-600 underline-offset-2 hover:text-brand-700 hover:underline"
                >
                  {company.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-medium text-ink-900">Teléfono</p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-sm text-ink-600 underline-offset-2 hover:text-brand-700 hover:underline"
                >
                  {company.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-medium text-ink-900">Ubicación</p>
                <p className="text-sm text-ink-600">{company.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-medium text-ink-900">Horario</p>
                <p className="text-sm text-ink-600">{contact.scheduleNote}</p>
              </div>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
