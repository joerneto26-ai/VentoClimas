import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "solid" | "brass" | "forest" | "sand" | "outline" | "lightOutline" | "wa";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  solid: "bg-ink-900 text-bone-50 border border-ink-700/50 hover:bg-ink-800 shadow-soft",
  brass:
    "text-ink-950 bg-gradient-to-br from-brass-300 via-brass-400 to-brass-500 hover:brightness-[1.06] shadow-glow border border-brass-300/40",
  forest:
    "text-bone-50 bg-gradient-to-br from-forest-500 via-forest-600 to-forest-700 hover:brightness-[1.06] shadow-glow border border-forest-400/40",
  sand:
    "bg-sand-500 text-bone-50 border border-sand-300/40 hover:bg-sand-600 shadow-soft",
  outline:
    "border border-ink-900/15 text-ink-900 hover:border-ink-900/30 hover:bg-ink-900/[0.04]",
  lightOutline:
    "border border-bone-50/25 text-bone-50 hover:bg-bone-50/10 bg-white/5 backdrop-blur-sm",
  wa: "bg-wa text-white hover:brightness-110 shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  href,
  onClick,
  target,
  rel,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform active:scale-[0.97] focus-visible:outline-none",
    variants[variant],
    sizes[size],
    className
  );

  const shine =
    variant === "solid" || variant === "brass" || variant === "forest" || variant === "sand" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
    ) : null;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={cls}
      >
        {shine}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
    >
      {shine}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
