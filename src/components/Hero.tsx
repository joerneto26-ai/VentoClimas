import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, GoogleG, Star, Whatsapp } from "./icons";
import { avatarUrl, trustAvatars, waLink } from "@/lib/content";

const HERO_IMAGE =
  "https://images.pexels.com/photos/5463583/pexels-photo-5463583.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=1280";

const WA_MSG =
  "Hola Vento Climas, me gustaría una cotización sin compromiso para mi aire acondicionado.";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-forest-950"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Equipo de técnicos de Vento Climas trabajando en una instalación de aire acondicionado en Guadalajara"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 35%" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/35 to-forest-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-forest-950/10 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-forest-500/25 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-sage-300/15 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <Reveal>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-bone-100/90">
            <GoogleG className="h-4 w-4" />
            <span className="flex items-center gap-1 text-sage-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3" />
              ))}
            </span>
            <strong className="font-semibold text-bone-50">4.9 de 5</strong>
            basado en 127 reseñas de Google
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl font-display text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-6xl sm:font-extrabold lg:text-[4.4rem] lg:leading-[1.06]">
            Aire acondicionado en Guadalajara, instalado hoy, frío esta noche.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-md text-[0.95rem] leading-snug text-bone-200/90 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-relaxed">
            Instalamos, mantenemos y reparamos mini splits inverter en toda la
            ZMG. Garantía escrita y atención el mismo día.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
            <Button
              href={waLink(WA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              variant="sand"
              size="lg"
              className="shadow-ivory-glow w-full justify-center sm:w-auto"
            >
              <Whatsapp className="h-5 w-5" /> Cotizar por WhatsApp
            </Button>
            <Button
              href="#servicios"
              variant="lightOutline"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-10 sm:gap-x-6 sm:gap-y-3">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {trustAvatars.map((id) => (
                  <img
                    key={id}
                    src={avatarUrl(id)}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-forest-950/60 object-cover sm:h-10 sm:w-10"
                  />
                ))}
              </div>
              <div className="ml-3 flex flex-col sm:ml-4">
                <div className="flex items-center gap-1 text-sage-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <span className="text-xs text-bone-200/80">
                  +2,000 sistemas instalados
                </span>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-bone-50/15 sm:block" />
            <span className="text-xs text-bone-200/80 sm:text-sm">
              Respuesta el{" "}
              <span className="font-semibold text-bone-50">mismo día hábil</span>{" "}
              · Garantía escrita · Sin compromiso
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-bone-50/60">
          Desliza
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-bone-50/15">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-sage-300 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
