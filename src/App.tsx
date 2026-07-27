import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { IntroSplash } from "./components/IntroSplash";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { PainPoint } from "./components/PainPoint";
import { ValueProps } from "./components/ValueProps";
import { Portfolio } from "./components/Portfolio";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

function shouldSkipIntro() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function App() {
  const [skipped] = useState(shouldSkipIntro);
  const [introDone, setIntroDone] = useState(skipped);

  const finishIntro = () => setIntroDone(true);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-bone-50 focus:shadow-soft"
      >
        Saltar al contenido
      </a>

      <AnimatePresence>
        {!introDone && <IntroSplash onDone={finishIntro} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: skipped ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: skipped ? 0 : 2.3, duration: 0.45 }}
      >
        <Navbar />
      </motion.div>

      {introDone && (
        <motion.main
          id="contenido"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Hero />
          <TrustBar />
          <PainPoint />
          <ValueProps />
          <Portfolio />
          <Features />
          <Process />
          <Testimonials />
          <Services />
          <Benefits />
          <FAQ />
          <Contact />
        </motion.main>
      )}

      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}
