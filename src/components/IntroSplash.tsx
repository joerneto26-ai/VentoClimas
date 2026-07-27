import { useEffect, useId, useMemo } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";

/** Duración total del intro (ms) — mantener sincronizado con App */
export const INTRO_DURATION = 2500;

function FlyTarget() {
  if (typeof window === "undefined") return { x: -320, y: -300, scale: 0.52 };
  const pad = window.innerWidth >= 640 ? 32 : 20;
  const containerLeft = Math.max((window.innerWidth - 1280) / 2, 0) + pad;
  // Centro del icono del Brand en el navbar (h-11 = 44px, py-4 = 16px)
  const iconCenterX = containerLeft + 22;
  const iconCenterY = 16 + 22;
  return {
    x: iconCenterX - window.innerWidth / 2,
    y: iconCenterY - window.innerHeight / 2,
    scale: 0.52,
  };
}

export function IntroSplash({ onDone }: { onDone: () => void }) {
  const id = useId();
  const target = useMemo(FlyTarget, []);

  useEffect(() => {
    const t = setTimeout(onDone, INTRO_DURATION);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      role="presentation"
      onClick={onDone}
      className="fixed inset-0 z-[100] grid cursor-pointer place-items-center bg-forest-950"
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
    >
      {/* Grupo logo + nombre: nace en el centro y vuela a la esquina superior izquierda */}
      <motion.div
        className="flex items-center gap-3 sm:gap-4"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{ x: target.x, y: target.y, scale: target.scale }}
        transition={{ delay: 1.75, duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "center center" }}
      >
        <motion.span
          className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-brass-500/40 bg-forest-900 sm:h-20 sm:w-20"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="absolute inset-0 bg-gradient-to-tr from-brass-500/30 via-transparent to-transparent" />
          <svg viewBox="0 0 32 32" className="relative h-8 w-8 sm:h-11 sm:w-11">
            <g
              fill="none"
              stroke={`url(#${id})`}
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M16 5v22M7.5 10.5l17 11M7.5 21.5l17-11" />
            </g>
            <circle cx="16" cy="16" r="2.2" fill="#0ea5e9" />
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#bae6fd" />
                <stop offset="1" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        </motion.span>

        {/* Nombre que se escribe letra a letra */}
        <span className="flex font-display text-[1.65rem] font-bold tracking-[0.06em] text-bone-50 sm:text-5xl">
          {brand.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.085, duration: 0.18 }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  );
}
