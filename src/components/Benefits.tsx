import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, Check } from "./icons";
import { benefits, benefitsImage, waLink } from "@/lib/content";

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-bone-100 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              Más que frío
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem]">
              Un equipo bien instalado se paga solo.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              Un mini split inverter bien dimensionado baja su recibo de CFE,
              enfría mejor y dura años más. Eso es lo que instalamos.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass-500/15 text-brass-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-ink-800">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <Button
                href={waLink(
                  "Hola Vento Climas, me gustaría saber cuánto puedo ahorrar con un equipo inverter."
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="sand"
                size="lg"
              >
                Quiero ahorrar en mi recibo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <p className="mt-3 text-xs text-stone-500">
                Respuesta en menos de{" "}
                <strong className="font-semibold text-ink-900">24 hrs</strong>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src={benefitsImage}
              alt="Unidad exterior de aire acondicionado instalada por Vento Climas en Guadalajara"
              loading="lazy"
              className="aspect-square w-full object-cover sm:aspect-[5/6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
