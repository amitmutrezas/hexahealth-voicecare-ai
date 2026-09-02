import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Multilingual AI Agent",
    text: "Speaks naturally, handles interruptions, and switches languages mid-call — no IVR, no robotic pauses.",
  },
  {
    title: "LLM-Powered Understanding",
    text: "Understands meaning, tone, and context to respond, clarify, and adjust the flow in real time.",
  },
  {
    title: "Smooth Handoff to Humans",
    text: "When a patient shows intent, AI hands off instantly with full context — no repeats, no friction.",
  },
  {
    title: "Instant Post-Call Actions",
    text: "Sends confirmations, reminders, messages, quotes, or summaries automatically right after the call.",
  },
  {
    title: "Smart Interruption Handling",
    text: "Stays on track through noise, overlap, or sudden questions and adapts without breaking the flow.",
  },
];

export function CallPowers() {
  return (
    <section id="call-powers" className="bg-background">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-[2.5rem] lg:sticky lg:top-28">
            What Powers Every AI Phone Call
          </h2>
        </Reveal>

        <ol className="relative">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="relative pb-10 pl-16 last:pb-0">
              {i < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.375rem] top-12 h-[calc(100%-2rem)] border-l border-dashed border-border"
                />
              )}
              <span className="absolute left-0 top-0 grid size-11 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lift">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
