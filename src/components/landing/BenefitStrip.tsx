import { Languages, Lock, MessageCircleHeart, ServerCog, UserRoundCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const BENEFITS = [
  { icon: MessageCircleHeart, label: "Human-like conversations" },
  { icon: Languages, label: "Multilingual by default" },
  { icon: UserRoundCheck, label: "Human handoff when needed" },
  { icon: Lock, label: "Secure & healthcare-ready" },
  { icon: ServerCog, label: "Enterprise-grade reliability" },
];

export function BenefitStrip() {
  return (
    <section aria-label="Product principles" className="bg-background">
      <div className="mx-auto max-w-[1320px] px-5 pb-6 lg:px-8">
        <Reveal>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {BENEFITS.map((b) => (
              <li key={b.label} className="flex items-center gap-3 bg-card px-5 py-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft">
                  <b.icon className="size-4 text-accent" aria-hidden="true" />
                </span>
                <span className="min-w-0 text-[0.8125rem] leading-snug font-medium">
                  {b.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
