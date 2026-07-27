import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Brand } from "./ui/Brand";
import { Button } from "./ui/Button";
import { Menu, Whatsapp, X } from "./icons";
import { nav, waLink } from "@/lib/content";

const WA_MSG =
  "Hola Vento Climas, me gustaría una cotización sin compromiso para mi aire acondicionado.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          scrolled
            ? "glass shadow-[0_12px_44px_-26px_rgba(16,12,7,0.55)]"
            : "bg-transparent"
        )}
      />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Brand light={!scrolled} />

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-ink-700 hover:text-ink-900"
                  : "text-bone-100/85 hover:text-bone-50"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                  scrolled ? "bg-forest-500" : "bg-sage-300"
                )}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={waLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            variant="sand"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Whatsapp className="h-4 w-4" /> Cotizar
          </Button>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden",
              scrolled
                ? "border-ink-900/10 text-ink-900 hover:bg-ink-900/5"
                : "border-bone-50/20 text-bone-50 hover:bg-bone-50/10"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 lg:hidden"
          >
            <div className="glass mx-4 mt-2 overflow-hidden rounded-2xl p-3 shadow-card">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-ink-900/5"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={waLink(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                variant="sand"
                className="mt-2 w-full"
              >
                <Whatsapp className="h-4 w-4" /> Cotizar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
