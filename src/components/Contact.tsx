import { useState, type FormEvent } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Check, Clock, MapPin, Whatsapp } from "./icons";
import { contact, locations, projectTypes, waLink } from "@/lib/content";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Av+Vallarta+2440+Arcos+Vallarta+Guadalajara&t=&z=15&ie=UTF8&iwloc=&output=embed";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Av+Vallarta+2440+Arcos+Vallarta+Guadalajara";

export function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    tipo: "",
    mensaje: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.tipo) return;
    const msg =
      `Hola Vento Climas, soy ${form.nombre} (${form.email}).\n` +
      `Servicio que necesito: ${form.tipo}.\n` +
      (form.mensaje ? `\n${form.mensaje}` : "");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-xl border border-bone-200 bg-bone-50 px-4 py-3 text-sm text-ink-900 placeholder:text-stone-500 transition-colors focus:border-sand-500 focus:outline-none focus:ring-2 focus:ring-sand-500/20";
  const labelCls =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-stone-600";

  return (
    <section id="contacto" className="bg-bone-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Último paso"
          title={
            <>
              ¿Listo para tener su casa{" "}
              <span className="font-semibold text-gradient-brass">
                fresca otra vez
              </span>
              ?
            </>
          }
          lead="Cuéntenos qué le pasa a su clima y le respondemos por WhatsApp el mismo día hábil."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          {/* FORM */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-bone-200/80 bg-bone-50 p-7 shadow-soft sm:p-8"
            >
              <ul className="mb-7 space-y-2.5 border-b border-bone-200/80 pb-6">
                {[
                  "Diagnóstico y cotización el mismo día hábil",
                  "Precio cerrado por escrito, sin sorpresas",
                  "Técnicos certificados y asegurados",
                  "Garantía escrita de 12 meses",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sand-600" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="space-y-5">
                <div>
                  <label htmlFor="nombre" className={labelCls}>
                    Tu nombre *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Ej. Daniela Cantú"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="nombre@correo.com"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label htmlFor="tipo" className={labelCls}>
                    ¿Qué necesita? *
                  </label>
                  <select
                    id="tipo"
                    required
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Seleccione una opción
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className={labelCls}>
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="Ej. Mi clima enfría poco y hace ruido..."
                    className={`${inputCls} resize-none`}
                  />
                  <p className="mt-1.5 text-xs text-stone-500">
                    Opcional · Cuéntenos qué le pasa a su equipo
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                variant="sand"
                size="lg"
                className="mt-7 w-full justify-center"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </form>
          </Reveal>

          {/* MAPA + 3 CARDS */}
          <Reveal delay={0.12}>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-bone-200/80 shadow-soft">
                <iframe
                  src={MAPS_EMBED}
                  title="Ubicación de Vento Climas en Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2.5">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 rounded-xl border border-bone-200/80 bg-bone-50 p-4 transition-colors hover:border-sand-500/40"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-sand-500/10 text-sand-600">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">
                    Ubicación
                  </span>
                  <span className="text-[0.7rem] leading-snug text-stone-600">
                    {contact.address}
                  </span>
                </a>

                <div className="flex flex-col gap-2 rounded-xl border border-bone-200/80 bg-bone-50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-sand-500/10 text-sand-600">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">
                    Horario
                  </span>
                  <span className="text-[0.7rem] leading-snug text-stone-600">
                    {contact.hours}
                  </span>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 rounded-xl border border-bone-200/80 bg-bone-50 p-4 transition-colors hover:border-sand-500/40"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-sand-500/10 text-sand-600">
                    <Whatsapp className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-900">
                    WhatsApp
                  </span>
                  <span className="text-[0.7rem] leading-snug text-stone-600">
                    Respuesta {`<`}24h
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* DIVISOR */}
        <div className="mt-16 mb-12 border-t border-bone-200/80" />

        {/* COBERTURA */}
        <div className="text-center">
          <SectionHeading
            eyebrow="Cobertura"
            title={
              <>
                Atendemos en{" "}
                <span className="font-semibold text-gradient-brass">
                  toda la zona metropolitana
                </span>
              </>
            }
            lead="Si está en Guadalajara o el Área Metropolitana, hoy mismo podemos atenderle."
          />

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-bone-200/80 bg-bone-50 px-4 py-2 text-sm text-ink-700 transition-colors hover:border-sand-500/50 hover:text-ink-900"
                >
                  {loc}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-sm text-stone-600">
              ¿No ve su zona?{" "}
              <a
                href={waLink("Hola Vento Climas, quiero saber si atienden en mi zona.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sand-600 underline-offset-2 hover:underline"
              >
                Escríbanos por WhatsApp
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
