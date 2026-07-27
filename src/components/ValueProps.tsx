import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "./icons";
import { valueProps, waLink } from "@/lib/content";
import { cn } from "@/utils/cn";

export function ValueProps() {
  return (
    <section id="valor" className="relative bg-bone-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-20 px-5 sm:space-y-28 sm:px-8">
        {valueProps.map((v, i) => (
          <div
            key={v.title}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={cn(i % 2 === 1 && "lg:order-2")}>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-sand-500" />
                  {v.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-[1.8rem] leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.5rem]">
                  {v.title}
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                  {v.desc}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8">
                  <Button
                    href={waLink(`Hola Vento Climas, ${v.cta.toLowerCase()}. ¿Me pueden contar más?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="sand"
                    size="lg"
                  >
                    {v.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal
              delay={0.16}
              className={cn("relative", i % 2 === 1 && "lg:order-1")}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <img
                  src={v.image}
                  alt={v.imageAlt}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/35 to-transparent" />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
