import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Phone, Whatsapp } from "./icons";
import { contact, waLink } from "@/lib/content";

export function CTASection() {
  return (
    <section id="contacto" className="bg-bone-50 px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-forest-950 px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 animate-float rounded-full bg-brass-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 animate-float-slow rounded-full bg-brass-400/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative">
            <span className="eyebrow border-brass-400/30 bg-brass-500/10 text-brass-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-400" />
              Cotización sin compromiso
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-light leading-[1.1] text-bone-50 sm:text-5xl">
              Conversemos sobre su{" "}
              <span className="text-gradient-brass italic">proyecto.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-bone-200/80 sm:text-lg">
              Cuéntenos qué imagina. En una llamada breve le diremos si podemos
              ayudarlo y cómo. Sin presión y sin compromiso.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={waLink(
                  "Hola ÁUREA, me gustaría una cotización sin compromiso para mi proyecto."
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="sand"
                size="lg"
              >
                <Whatsapp className="h-5 w-5" /> Solicitar cotización por WhatsApp
              </Button>
              <Button
                href={contact.phoneHref}
                variant="lightOutline"
                size="lg"
              >
                <Phone className="h-4 w-4" /> {contact.phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 text-xs text-bone-200/60">
              Respondemos el mismo día hábil · Atendemos toda la zona
              metropolitana de Guadalajara
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
