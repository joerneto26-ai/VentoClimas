import { Counter } from "./ui/Counter";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { Check, featureIcons } from "./icons";
import { badges, stats } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="relative border-y border-bone-200/70 bg-bone-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="text-center font-display text-xl font-medium text-ink-800 sm:text-2xl">
            La confianza se construye equipo tras equipo.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = featureIcons[s.icon as keyof typeof featureIcons];
            return (
              <StaggerItem key={s.label}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-bone-100 px-6 py-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-sand-500 text-bone-50 shadow-soft">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                    <Counter
                      value={s.value}
                      decimals={s.decimals ?? 0}
                      suffix={s.suffix ?? ""}
                    />
                  </div>
                  <p className="mx-auto mt-2 max-w-[13rem] text-sm font-medium leading-snug text-stone-600">
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-bone-200/70 pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Certificaciones
            </p>
            <div className="mx-auto mt-4 flex max-w-xs flex-col items-start gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-left text-sm text-ink-700"
                >
                  <Check className="h-4 w-4 shrink-0 text-sand-500" /> {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
