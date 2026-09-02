import { TrendingUp, UsersRound, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const METRICS = [
  { icon: TrendingUp, value: "60%", label: "Increase in sales qualified leads" },
  { icon: UsersRound, value: "90%", label: "Lower manpower requirement" },
  { icon: Zap, value: "10X", label: "Jump in conversions" },
];

export function Metrics() {
  return (
    <section aria-label="Platform metrics" className="bg-background">
      <div className="mx-auto max-w-[1320px] px-5 pb-16 lg:px-8 lg:pb-24">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {METRICS.map((m, i) => (
            <Reveal as="li" key={m.value} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-8 place-items-center rounded-lg bg-accent-soft">
                  <m.icon className="size-4 text-accent" aria-hidden="true" />
                </span>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{m.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
