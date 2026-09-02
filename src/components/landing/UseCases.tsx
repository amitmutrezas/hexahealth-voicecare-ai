import {
  CalendarCheck,
  Clock,
  PhoneOutgoing,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const CASES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Target,
    title: "Lead Qualification & Intent Detection",
    text: "AI listens for intent, urgency, objection cues, budget signals, and readiness to move. It filters noise and surfaces the leads worth acting on — before your team even picks up the phone.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Bookings & Scheduling",
    text: "The AI books demos, appointments, visits, or callbacks instantly. It sends reminders automatically, cutting no-shows and ensuring smooth coordination without human effort.",
  },
  {
    icon: Clock,
    title: "24/7 Inquiry Handling",
    text: "From pricing to product questions, AI gives consistent, clear answers at any hour. It removes queues, reduces dropped inquiries, and supports global audiences in multiple languages.",
  },
  {
    icon: PhoneOutgoing,
    title: "Follow-Ups That Never Slip",
    text: "Automate follow-ups with personalized calls, keeping customers engaged and informed at every stage of their journey.",
  },
];

function UseCaseCard({ icon: Icon, title, text }: (typeof CASES)[number]) {
  return (
    <article className="group h-full rounded-2xl border border-border-warm bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
      <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="bg-warm-deep">
      <div className="mx-auto max-w-[1320px] px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Built for Healthcare
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.5rem]">
            Every conversation. Every outcome.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Automate high-impact patient interactions across the care journey.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 60} className="h-full">
              <UseCaseCard {...c} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
