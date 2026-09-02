import { Phone, Sparkles } from "lucide-react";
import heroPatient from "@/assets/hero-patient.jpg";
import { PhoneAgentCTA } from "./PhoneAgentCTA";
import { Reveal } from "./Reveal";

const BUBBLES = [
  {
    role: "VoiceCare AI",
    text: "Hi, this is VoiceCare AI. How can I help you today?",
    tone: "ai" as const,
    position: "left-0 top-[24%]",
    delay: "0s",
  },
  {
    role: "Patient",
    text: "I want to book an appointment with a cardiologist.",
    tone: "patient" as const,
    position: "left-[8%] top-[46%]",
    delay: "1.1s",
  },
  {
    role: "VoiceCare AI",
    text: "Sure, I can help with that. May I know your preferred date?",
    tone: "ai" as const,
    position: "left-0 top-[68%]",
    delay: "2.2s",
  },
];

function Waveform() {
  return (
    <div className="flex h-8 items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="animate-bar w-[3px] rounded-full bg-accent"
          style={{
            height: `${28 + Math.sin(i * 1.3) * 16}%`,
            animationDelay: `${i * 60}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden bg-radial-warm pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-24">
        <Reveal className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent">
            <Sparkles className="size-3.5" aria-hidden="true" />
            AI Voice Agents for Healthcare
          </span>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
            Every patient should
            <br />
            <span className="text-accent">feel heard.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            VoiceCare AI automates patient conversations over calls, so your care team can
            focus on care, not calls.
          </p>

          <div className="mt-9">
            <PhoneAgentCTA />
          </div>
        </Reveal>

        <Reveal delay={120} className="relative min-w-0">
          <div className="relative mx-auto aspect-[4/4.3] w-full max-w-[540px]">
            <div className="bg-glow-orange absolute inset-[-8%] rounded-full" />
            <div className="absolute inset-[6%] rounded-full border border-border-warm" />
            <div className="animate-ring absolute inset-[6%] rounded-full border border-accent/30" />

            <img
              src={heroPatient}
              alt="A patient speaking with a VoiceCare AI voice agent on her phone"
              width={1024}
              height={1280}
              className="absolute bottom-0 right-0 top-[4%] w-[64%] rounded-[2rem] object-cover object-top"
            />

            <div className="animate-float absolute right-[6%] top-0 grid size-12 place-items-center rounded-full border border-border bg-card shadow-soft">
              <Phone className="size-5 text-foreground" aria-hidden="true" />
            </div>

            <div
              className="animate-float absolute left-[18%] top-[10%] rounded-full border border-border bg-card px-4 py-2 shadow-soft"
              style={{ animationDelay: "0.6s" }}
            >
              <Waveform />
            </div>

            {BUBBLES.map((b) => (
              <div
                key={b.text}
                className={`animate-float absolute w-[58%] max-w-[250px] rounded-2xl border px-4 py-3 shadow-soft ${b.position} ${
                  b.tone === "ai"
                    ? "border-border bg-card"
                    : "border-accent/20 bg-accent-soft"
                }`}
                style={{ animationDelay: b.delay }}
              >
                <p className="text-[0.8125rem] leading-snug text-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
