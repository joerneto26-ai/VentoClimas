import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ArrowRight, Check, Whatsapp } from "./icons";
import { services, waLink } from "@/lib/content";
import { cn } from "@/utils/cn";

function ServiceCard({
  s,
}: {
  s: (typeof services)[number];
}) {
  return (
    <div className="relative flex h-full flex-col rounded-3xl border border-bone-200/80 bg-white/60 p-8 text-ink-900 transition-all duration-300 hover:border-sand-500/30 hover:shadow-card">
      {s.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sand-500/30 bg-bone-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sand-600">
          {s.badge}
        </span>
      )}
      <h3 className="font-display text-2xl text-ink-900">{s.name}</h3>
      <p className="mt-2 text-sm text-stone-600">{s.tagline}</p>

      <div className="mt-6">
        <p className="font-display text-3xl text-ink-900">{s.price}</p>
        <p className="mt-1 text-xs text-stone-500">{s.priceNote}</p>
      </div>

      <ul className="mt-7 space-y-3">
        {s.includes.map((inc) => (
          <li key={inc} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sand-500/15 text-sand-600">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-ink-800">{inc}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href={waLink(
            `Hola Vento Climas, me interesa el servicio "${s.name}". ¿Me pueden dar más información y una cotización?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="w-full"
        >
          <Whatsapp className="h-4 w-4" /> {s.cta}
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.scrollWidth / services.length));
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="servicios"
      className="relative bg-bone-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que su aire acondicionado necesita"
          lead="Instalación, mantenimiento y reparación en Guadalajara y la ZMG. Precios claros antes de empezar."
        />

        {/* Mobile carousel */}
        <div
          ref={scrollRef}
          className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
        >
          {services.map((s) => (
            <div key={s.name} className="w-[80vw] shrink-0 snap-center">
              <ServiceCard s={s} />
            </div>
          ))}
        </div>

        {/* Dots + arrow (mobile only) */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          {services.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-sand-500" : "w-2 bg-bone-300"
              )}
            />
          ))}
          <ArrowRight className="ml-1 h-4 w-4 animate-nudge-right text-sand-500" />
        </div>

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="h-full">
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-stone-500">
            Los montos son referenciales y se confirman tras el diagnóstico.
            La cotización final se entrega por escrito el mismo día hábil, sin
            compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
