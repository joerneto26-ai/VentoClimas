import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, GoogleG, Quote, Star } from "./icons";
import { testimonials } from "@/lib/content";
import { cn } from "@/utils/cn";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="group relative h-full overflow-hidden rounded-2xl glass-dark p-7 transition-colors duration-300 hover:border-brass-400/30">
      <Quote className="h-8 w-8 text-brass-400/50" />
      <div className="mt-3 flex gap-0.5 text-brass-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-bone-100/90">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <img
          src={t.avatar}
          alt=""
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-brass-400/30"
        />
        <div>
          <p className="font-medium text-bone-50">{t.name}</p>
          <p className="text-xs text-bone-200/70">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const idx = Math.round(
        el.scrollLeft / (el.scrollWidth / testimonials.length)
      );
      setActiveIndex(Math.min(idx, testimonials.length - 1));
      setAtEnd(el.scrollLeft >= max - 12);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: el.clientWidth * 0.72, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-forest-950 py-20 text-bone-50 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brass-500/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Reseñas verificadas"
          title="Lo que dicen nuestros clientes en Guadalajara"
          lead="Familias y negocios de la ZMG que ya duermen y trabajan frescos con Vento Climas."
        />

        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 flex w-fit items-center gap-2.5 rounded-full glass-dark px-4 py-2">
            <GoogleG className="h-4 w-4" />
            <div className="flex text-brass-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="text-sm text-bone-100/90">
              <strong className="font-semibold text-bone-50">4.9/5</strong> ·
              127 reseñas verificadas de Google
            </span>
          </div>
        </Reveal>

        {/* Carrusel (todas las vistas) */}
        <div className="relative mt-14">
          {/* Degradado derecho: sugiere más contenido */}
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-forest-950 to-transparent transition-opacity duration-500 sm:w-24",
              atEnd && "opacity-0"
            )}
          />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-[85vw] shrink-0 snap-start sm:w-[26rem] lg:w-[28rem]"
              >
                <Card t={t} />
              </div>
            ))}
          </div>

          {/* Flecha: desliza a la derecha */}
          <button
            onClick={scrollNext}
            aria-label={atEnd ? "Volver al inicio de las reseñas" : "Ver más reseñas"}
            className={cn(
              "absolute -right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-brass-400/40 bg-forest-900/80 text-brass-300 shadow-soft backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-brass-500 hover:text-white sm:grid",
              atEnd && "rotate-180"
            )}
          >
            <ArrowRight className="h-5 w-5 animate-nudge-right" />
          </button>
        </div>

        {/* Dots + flecha guía */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-sand-500" : "w-2 bg-bone-200/40"
              )}
            />
          ))}
          <button
            onClick={scrollNext}
            aria-label="Deslizar reseñas"
            className="ml-1 inline-flex items-center gap-1 text-sand-400 transition-colors hover:text-sand-300"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Desliza
            </span>
            <ArrowRight className="h-4 w-4 animate-nudge-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
