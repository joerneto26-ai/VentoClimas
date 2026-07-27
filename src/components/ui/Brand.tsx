import { useId } from "react";
import { cn } from "@/utils/cn";
import { brand } from "@/lib/content";

export function Brand({
  light = false,
  compact = false,
  className,
}: {
  light?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const id = useId();
  return (
    <a
      href="#top"
      aria-label={`${brand.name} — Aire acondicionado en Guadalajara, inicio`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-brass-500/40 bg-forest-900 transition-transform duration-500 group-hover:rotate-[10deg]">
        <span className="absolute inset-0 bg-gradient-to-tr from-brass-500/30 via-transparent to-transparent" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6">
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
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[0.08em]",
            light ? "text-bone-50" : "text-ink-900"
          )}
        >
          {brand.name}
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 text-[10px] uppercase tracking-[0.28em]",
              light ? "text-bone-200/70" : "text-stone-500"
            )}
          >
            Aire Acondicionado
          </span>
        )}
      </span>
    </a>
  );
}
