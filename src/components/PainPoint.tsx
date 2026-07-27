import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { ArrowRight, Check, X } from "./icons";
import { painPoint, waLink } from "@/lib/content";

export function PainPoint() {
  return (
    <section id="problema" className="relative bg-bone-100 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={painPoint.eyebrow}
          title={painPoint.title}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Problema */}
          <StaggerGroup className="space-y-4">
            {painPoint.problems.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-4 rounded-2xl border border-bone-200/80 bg-bone-50 p-5 shadow-soft">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red-500/10 text-red-600">
                    <X className="h-4 w-4" />
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-ink-800">
                    {p}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Agitar + Solución */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
                {painPoint.agitate}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-7 rounded-2xl border border-sand-500/25 bg-sand-100 p-7 shadow-soft">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-sand-500" />
                  La solución
                </span>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-900">
                  {painPoint.solution}
                </p>
                <div className="mt-6">
                  <Button
                    href={waLink(
                      "Hola Vento Climas, mi clima está fallando y quiero que lo revisen hoy."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="sand"
                    size="lg"
                  >
                    Quiero que lo revisen hoy
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <p className="mt-3 flex items-center gap-2 text-xs text-stone-600">
                    <Check className="h-3.5 w-3.5 text-sand-600" />
                    Diagnóstico y cotización el mismo día hábil
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
