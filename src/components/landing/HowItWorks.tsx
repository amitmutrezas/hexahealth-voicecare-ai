import { BrainCircuit, LineChart, MessagesSquare, PhoneCall } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Connect",
    text: "Plug into your telephony stack in minutes.",
  },
  {
    icon: BrainCircuit,
    title: "Configure",
    text: "Train on your workflows, policies and knowledge.",
  },
  {
    icon: MessagesSquare,
    title: "Converse",
    text: "AI agents handle calls naturally and intelligently.",
  },
  {
    icon: LineChart,
    title: "Improve",
    text: "Get insights, measure outcomes and keep optimizing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-[1180px] px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.5rem]">
            Simple to deploy. Powerful to scale.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="relative text-center">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[62%] top-[52px] hidden h-px w-[76%] border-t border-dashed border-border lg:block"
                />
              )}
              <span className="mx-auto grid size-6 place-items-center rounded-full bg-accent text-[0.6875rem] font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <span className="relative mx-auto mt-3 grid size-14 place-items-center rounded-full border border-border bg-card shadow-soft">
                <s.icon className="size-5 text-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-[0.8125rem] leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
