import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Whatsapp } from "./icons";
import { waLink } from "@/lib/content";

const MSG =
  "Hola Vento Climas, me gustaría una cotización sin compromiso para mi aire acondicionado.";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(MSG)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
        >
          <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-forest-900/90 px-0 py-2.5 text-sm font-medium text-bone-50 opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:max-w-[240px] group-hover:px-4 group-hover:opacity-100 sm:block">
            ¿Le revisamos su clima hoy?
          </span>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_12px_30px_-6px_rgba(27,163,95,0.6)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 rounded-full bg-wa animate-pulse-ring" />
            <Whatsapp className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
