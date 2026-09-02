import { CalendarCheck, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { DemoFormDialog } from "./DemoFormDialog";


export function FinalCTA() {
  return (
    <section id="demo" className="bg-background">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="bg-cta-gradient grid grid-cols-1 items-center gap-8 rounded-3xl border border-border-warm p-8 shadow-soft sm:p-12 lg:grid-cols-[1fr_auto]">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                See VoiceCare AI in action
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a personalized demo and discover how VoiceCare can transform your
                patient experience.
              </p>
            </div>
            <a
              href="mailto:hello@hexahealth.com?subject=VoiceCare%20AI%20demo%20request"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] lg:w-auto"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book a demo
              <ChevronRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
