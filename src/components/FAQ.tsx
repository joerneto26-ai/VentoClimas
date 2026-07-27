import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ChevronDown, Whatsapp } from "./icons";
import { faqs, waLink } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-bone-100 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              Preguntas frecuentes
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[1.9rem] leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem]">
              Resolvemos sus dudas antes de empezar.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
              ¿No encuentra su respuesta? Escríbanos por WhatsApp y le
              respondemos el mismo día hábil.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7">
              <Button
                href={waLink("Hola Vento Climas, tengo una pregunta sobre su servicio.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="sand"
              >
                <Whatsapp className="h-4 w-4" /> Preguntar por WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="divide-y divide-bone-200/80 border-y border-bone-200/80"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={cn(
                      "font-display text-lg transition-colors",
                      isOpen ? "text-brass-600" : "text-ink-900"
                    )}
                  >
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "rotate-180 border-brass-500 bg-brass-500 text-white"
                        : "border-bone-300 text-ink-700"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-4 text-sm leading-relaxed text-stone-600 sm:pr-12">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
