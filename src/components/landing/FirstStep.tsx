import { AlertCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ROWS = [
  {
    problem: "New leads wait too long, and interest fades fast.",
    stat: "<30 sec",
    gain: "Speed that keeps intent alive.",
  },
  {
    problem: "Early context disappears, and reps start cold.",
    stat: "90%",
    gain: "Better context continuity across touchpoints.",
  },
  {
    problem: "Follow-ups slip, and deals quietly lose momentum.",
    stat: "85%",
    gain: "Follow-ups happen automatically.",
  },
  {
    problem: "Volume spikes hit, and pipeline leaks grow.",
    stat: "45%",
    gain: "Pipelines stay steady even in peak demand.",
  },
];

export function FirstStep() {
  return (
    <section id="first-step" className="bg-warm-deep">
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-[2.5rem]">
            Choosing the Right First Step
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-6">
          <div className="rounded-xl border border-accent/40 bg-accent-soft px-5 py-3 text-center text-sm font-semibold text-accent">
            When conversations depend on human bandwidth
          </div>
          <div aria-hidden="true" className="hidden lg:block lg:w-8" />
          <div className="rounded-xl border border-border bg-card px-5 py-3 text-center text-sm font-semibold text-foreground">
            When AI takes the first step
          </div>

          {ROWS.map((r, i) => (
            <Reveal
              key={r.stat}
              delay={i * 70}
              className="contents"
            >
              <div className="grid gap-3 lg:col-span-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
                <article className="flex items-start gap-3 rounded-2xl border border-border-warm bg-card p-4 shadow-soft">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.problem}</p>
                </article>

                <span
                  aria-hidden="true"
                  className="hidden w-8 items-center justify-center lg:flex"
                >
                  <ArrowRight className="size-4 text-muted-foreground" />
                </span>

                <article className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-[0.625rem] font-semibold text-primary-foreground">
                    AI
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{r.stat}</span> {r.gain}
                  </p>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
