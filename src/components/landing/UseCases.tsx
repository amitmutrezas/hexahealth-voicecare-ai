import {
  Bell,
  CalendarDays,
  FlaskConical,
  PhoneCall,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const CASES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: CalendarDays,
    title: "Appointment Scheduling",
    text: "Book, reschedule and cancel appointments seamlessly.",
  },
  {
    icon: PhoneCall,
    title: "Call Qualification",
    text: "Automate patient screening and qualification calls.",
  },
  {
    icon: Bell,
    title: "Follow-ups & Reminders",
    text: "Reduce no-shows with timely reminders and follow-ups.",
  },
  {
    icon: FlaskConical,
    title: "Lab & Test Results",
    text: "Deliver results and next steps securely and compliantly.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Billing Support",
    text: "Handle policy checks, billing queries and payment reminders.",
  },
  {
    icon: Star,
    title: "Patient Feedback & Surveys",
    text: "Collect feedback and measure patient satisfaction.",
  },
];

function UseCaseCard({ icon: Icon, title, text }: (typeof CASES)[number]) {
  return (
    <article className="group h-full rounded-2xl border border-border-warm bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
      <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-sm font-semibold transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{text}</p>
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

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
