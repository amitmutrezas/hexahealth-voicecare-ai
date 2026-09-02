import { ShieldCheck, Stethoscope } from "lucide-react";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: Stethoscope,
    title: "Human when it counts",
    body: "Route sensitive questions to a care coordinator with the right context.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in boundaries",
    body: "Keep conversations focused on your approved patient communication flows.",
  },
];

export function SafetySection() {
  return (
    <section aria-labelledby="safety-heading" className="bg-warm">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-8 px-5 py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <Reveal>
          <div className="rounded-3xl bg-accent-soft p-8 sm:p-10 lg:p-12">
            <ShieldCheck className="size-8 text-accent" aria-hidden="true" />
            <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Careful by design.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Healthcare conversations need care. VoiceCare is designed with controlled
              flows, approved content and clear escalation to your people.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Safety is part of the product
          </p>
          <h2
            id="safety-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Patient trust is not a feature you add later.
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="rounded-2xl border border-border-warm bg-card p-6 shadow-soft"
              >
                <c.icon className="size-6 text-accent" aria-hidden="true" />
                <h4 className="mt-6 text-base font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
