import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { featureIcons, ArrowRight } from "./icons";
import { features } from "@/lib/content";
import { cn } from "@/utils/cn";

function FeatureCard({ f }: { f: (typeof features)[number] }) {
  const Icon = featureIcons[f.icon as keyof typeof featureIcons];
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-bone-200/80 bg-white/60 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brass-500/40 hover:shadow-card">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brass-300 to-brass-500 transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-brass-500/25 bg-brass-500/10 text-brass-600 transition-all duration-300 group-hover:bg-brass-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-xl text-ink-900">{f.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{f.desc}</p>
    </div>
  );
}

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.scrollWidth / features.length));
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="diferencia"
      className="relative bg-bone-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por qué Vento Climas"
          title="Cómo trabajamos, y qué nos hace diferentes"
          lead="No somos un técnico más de Facebook. Somos una empresa establecida con procesos claros, garantías por escrito y 8 años en la ZMG."
        />

        {/* Mobile carousel */}
        <div
          ref={scrollRef}
          className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden"
        >
          {features.map((f) => (
            <div key={f.title} className="w-[80vw] shrink-0 snap-center">
              <FeatureCard f={f} />
            </div>
          ))}
        </div>

        {/* Dots + arrow (mobile only) */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {features.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-sand-500" : "w-2 bg-bone-300"
              )}
            />
          ))}
          <ArrowRight className="ml-1 h-4 w-4 animate-nudge-right text-sand-500" />
        </div>

        {/* Desktop grid */}
        <StaggerGroup className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <FeatureCard f={f} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
