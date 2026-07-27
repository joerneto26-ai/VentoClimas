import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { ArrowUpRight, ChevronDown } from "./icons";
import { portfolio, waLink } from "@/lib/content";

const CATEGORIES = [
  "Todos",
  "Instalación",
  "Mantenimiento",
  "Reparación",
  "Comercial",
] as const;

type Category = (typeof CATEGORIES)[number];

const INITIAL_COUNT = 6;

export function Portfolio() {
  const [active, setActive] = useState<Category>("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? portfolio
        : portfolio.filter((p) => p.category === active),
    [active]
  );

  useEffect(() => {
    setShowAll(false);
  }, [active]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const canShowMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <section
      id="proyectos"
      className="relative bg-bone-100 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Instalaciones recientes"
          title={
            <>
              Trabajos reales de{" "}
              <span className="font-semibold text-gradient-brass">
                nuestro equipo en la ZMG
              </span>
            </>
          }
          lead="Una selección de instalaciones, mantenimientos y reparaciones en Guadalajara. Filtre por tipo de servicio."
        />

        <div
          role="tablist"
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === cat
                  ? "border-sand-500 bg-sand-500 text-bone-50 shadow-soft"
                  : "border-bone-200/80 bg-bone-50 text-ink-700 hover:border-sand-500/50 hover:text-ink-900"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[17rem] sm:grid-cols-2 lg:auto-rows-[16rem] lg:grid-cols-3"
          >
            {visible.map((p, i) => {
              const big = p.span === "lg";
              return (
                <a
                  key={p.title}
                  href={waLink(
                    `Hola Vento Climas, vi el trabajo "${p.title}" en su página y me gustaría algo similar. ¿Me pueden cotizar?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative block h-full w-full overflow-hidden rounded-2xl bg-forest-900",
                    big && "sm:col-span-2 sm:row-span-2"
                  )}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent transition-all duration-500 group-hover:from-forest-950/95" />
                  <span className="absolute right-4 top-4 text-xs font-medium tracking-widest text-bone-100/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="inline-flex rounded-full border border-brass-400/40 bg-forest-950/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brass-300 backdrop-blur">
                      {p.category}
                    </span>
                    <h3
                      className={cn(
                        "mt-3 font-display text-bone-50",
                        big ? "text-2xl sm:text-3xl" : "text-xl"
                      )}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-bone-200/80">
                      {p.location} · {p.meta}
                    </p>
                    <span className="mt-3 inline-flex translate-y-1 items-center gap-1.5 text-sm font-medium text-brass-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Solicitar algo similar
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {canShowMore && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
            >
              Ver más
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
