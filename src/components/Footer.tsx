import type { ReactNode } from "react";
import { Brand } from "./ui/Brand";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Whatsapp,
} from "./icons";
import { brand, contact, locations, nav, waLink } from "@/lib/content";

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-base text-bone-50">{title}</h4>
      <div className="mt-5 flex flex-col gap-3 text-sm text-bone-200/75">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [Instagram, Linkedin, Facebook];

  return (
    <footer className="relative bg-forest-950 text-bone-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-200/70">
              Instalación, mantenimiento y reparación de aire acondicionado en
              Guadalajara y la ZMG. Técnicos certificados y garantía escrita
              de 12 meses.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social de Vento Climas"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-bone-200/80 transition-colors hover:border-brass-400/50 hover:bg-brass-500/10 hover:text-brass-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Navegación">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-brass-300">
                {n.label}
              </a>
            ))}
            <a href="#faq" className="transition-colors hover:text-brass-300">
              FAQ
            </a>
          </FooterCol>

          <FooterCol title="Servicios">
            <a href="#servicios" className="transition-colors hover:text-brass-300">
              Instalación de mini split
            </a>
            <a href="#servicios" className="transition-colors hover:text-brass-300">
              Mantenimiento preventivo
            </a>
            <a href="#servicios" className="transition-colors hover:text-brass-300">
              Reparación y urgencias
            </a>
            <a href="#servicios" className="transition-colors hover:text-brass-300">
              Proyectos comerciales
            </a>
            <a href="#servicios" className="transition-colors hover:text-brass-300">
              Venta de equipos inverter
            </a>
          </FooterCol>

          <div>
            <h4 className="font-display text-base text-bone-50">Contacto</h4>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>
                  {contact.address}
                  <br />
                  {contact.city}
                </span>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-brass-300"
                >
                  <Phone className="h-4 w-4 text-brass-400" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-brass-300"
                >
                  <Mail className="h-4 w-4 text-brass-400" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" />
                <span>{contact.hours}</span>
              </li>
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-wa px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              <Whatsapp className="h-4 w-4" /> WhatsApp directo
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-bone-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name} · Aire Acondicionado en Guadalajara. Todos
            los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-brass-300">
              Aviso de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-brass-300">
              Términos
            </a>
            <span className="text-bone-200/40">
              Landing de demostración · lista para su marca
            </span>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-bone-200/45">
          Zonas de servicio: {locations.join(" · ")}.
        </p>
      </div>
    </footer>
  );
}
