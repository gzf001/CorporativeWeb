import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { company, footer, navigation } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-ink-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:max-w-sm">
            <Logo inverse />
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              {footer.description}
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h2>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-ink-400 transition-colors hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-ink-400">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {year} {company.legalName}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-ink-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
