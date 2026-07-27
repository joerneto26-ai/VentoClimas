import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { ArrowRight } from "./icons";
import { featureIcons } from "./icons";
import { processSteps, avatarUrl } from "@/lib/content";

const trustMini = [614810, 1065084, 1681010];

export function Process() {
  return (
    <section id="proceso" className="relative bg-bone-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Proceso"
          title={
            <>
              Su clima funcionando en{" "}
              <span className="font-semibold text-gradient-brass">
                4 pasos simples
              </span>
              .
            </>
          }
          lead="Del primer mensaje al aire frío. Cada paso con precio cerrado y comunicación clara por WhatsApp."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-sand-300/40 to-transparent lg:block" />
          <StaggerGroup
            stagger={0.1}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((s) => {
              const Icon = featureIcons[s.icon as keyof typeof featureIcons];
              return (
                <StaggerItem key={s.n}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-bone-200/80 bg-bone-50 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sand-500/40 hover:shadow-card">
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-sand-300 to-sand-500 transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="relative z-10 inline-grid h-14 w-14 place-items-center rounded-full border border-sand-500/30 bg-bone-50 font-display text-lg font-medium text-sand-600 shadow-soft">
                      {s.n}
                    </span>
                    <div className="relative mt-5 grid h-12 w-12 place-items-center rounded-xl border border-sand-500/25 bg-sand-500/10 text-sand-600 transition-all duration-300 group-hover:bg-sand-500 group-hover:text-bone-50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                      {s.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <Button href="#proyectos" variant="sand" size="lg">
            Ver instalaciones recientes
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {trustMini.map((id) => (
                <img
                  key={id}
                  src={avatarUrl(id)}
                  alt=""
                  loading="lazy"
                  className="h-8 w-8 rounded-full border-2 border-bone-50 object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-stone-600">
              <strong className="font-semibold text-ink-900">+2,000 equipos</strong>{" "}
              instalados y reparados por Vento Climas en Guadalajara
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
