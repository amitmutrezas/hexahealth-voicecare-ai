import { Globe, MessageSquare, Mic, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { TechnologyCard } from "./TechnologyCard";

const FIRST_ROW = ["Hello", "Hindi", "മലയാളം"];
const LANGUAGES = [
  ["Tamil", "Bengali", "Telugu", "Kannada"],
  ["नमस्कार", "తెలుగు", "Malayalam", "English"],
  ["ગુજરાતી", "Marathi"],
];


function LanguageCloud() {
  return (
    <div className="flex flex-col items-center gap-2 text-lg sm:text-xl">
      <div className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2">
        {FIRST_ROW.map((w, i) => (
          <span
            key={w}
            className="animate-word text-muted-foreground"
            style={{ animationDelay: `${i * 400}ms` }}
          >
            {w}
          </span>
        ))}
        <span className="font-medium text-accent">20+ languages</span>
      </div>
      {LANGUAGES.map((row, r) => (

        <div key={r} className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {row.map((w, i) => (
            <span
              key={w}
              className="animate-word text-muted-foreground"
              style={{ animationDelay: `${(r * 3 + i) * 350 + 200}ms` }}
            >
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function LatencyWave() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <div className="flex h-16 flex-1 items-center gap-[3px]">
        {Array.from({ length: 34 }).map((_, i) => (
          <span
            key={i}
            className="animate-bar min-w-[2px] flex-1 rounded-full bg-muted-foreground/40"
            style={{
              height: `${25 + Math.abs(Math.sin(i * 0.7)) * 70}%`,
              animationDelay: `${i * 45}ms`,
            }}
          />
        ))}
      </div>
      <div className="relative flex h-14 w-[42%] items-center rounded-full bg-primary px-3">
        <div className="absolute -left-6 flex h-11 w-[62%] items-center justify-center gap-[3px] rounded-full border border-border bg-card px-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="animate-bar w-[2px] rounded-full bg-accent"
              style={{
                height: `${30 + Math.abs(Math.cos(i * 0.9)) * 55}%`,
                animationDelay: `${i * 55}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScaleGrid() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-warm/60 py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          transform: "perspective(420px) rotateX(52deg) scale(1.5)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute left-6 top-6 h-1.5 w-10 -rotate-[18deg] rounded-full bg-accent/70"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-8 right-8 h-1.5 w-14 rotate-[18deg] rounded-full bg-accent/60"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-10 left-10 h-1.5 w-8 rotate-[24deg] rounded-full bg-accent/40"
      />
      <div className="relative text-center">
        <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">100K+</p>
        <p className="mt-1 text-[0.625rem] tracking-[0.22em] text-muted-foreground uppercase">
          Interactions / hour
        </p>
      </div>
    </div>
  );
}

const CHANNELS = [
  { icon: Mic, label: "Voice" },
  { icon: MessageSquare, label: "Chat" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Globe, label: "Web" },
];

function ContextNetwork() {
  return (
    <div className="relative flex items-center justify-between gap-2">
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card">
        <User className="size-4 text-muted-foreground" aria-hidden="true" />
      </span>

      <svg
        viewBox="0 0 200 140"
        className="h-32 flex-1"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="70"
          x2="78"
          y2="70"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-dash"
        />
        {[14, 52, 90, 128].map((y) => (
          <path
            key={y}
            d={`M96 70 C 140 70, 150 ${y}, 200 ${y}`}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-dash"
          />
        ))}
      </svg>

      <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-primary shadow-lift">
        <span className="flex flex-col gap-[3px]" aria-hidden="true">
          <span className="block h-[2px] w-4 rounded-full bg-primary-foreground" />
          <span className="block h-[2px] w-4 rounded-full bg-primary-foreground/70" />
          <span className="block h-[2px] w-4 rounded-full bg-primary-foreground/40" />
        </span>
        <span className="sr-only">VoiceCare AI context layer</span>
      </span>

      <ul className="flex shrink-0 flex-col gap-2">
        {CHANNELS.map((c) => (
          <li
            key={c.label}
            className="grid size-9 place-items-center rounded-full border border-border bg-card"
            title={c.label}
          >
            <c.icon className="size-4 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section id="technology" className="bg-warm-deep relative">
      <div className="mx-auto max-w-[1320px] px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-[2.75rem]">
            Frontier Voice Tech, Built for Indian Healthcare
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Production-grade voice intelligence designed for the scale, languages and
            complexity of Indian healthcare.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <TechnologyCard
              title="Regional Languages"
              description="Voice agents that inherently understand 20+ languages, with high accuracy across all Indian languages."
            >
              <LanguageCloud />
            </TechnologyCard>
          </Reveal>
          <Reveal delay={80} className="h-full">
            <TechnologyCard
              title="Lowest latency"
              description="Fast, natural conversations with orchestration designed to keep responses fluid across voice interactions."
            >
              <LatencyWave />
            </TechnologyCard>
          </Reveal>
          <Reveal delay={80} className="h-full">
            <TechnologyCard
              title="Maximum scale"
              description="Always prepared for surges, with no compromise on performance."
            >
              <ScaleGrid />
            </TechnologyCard>
          </Reveal>
          <Reveal delay={160} className="h-full">
            <TechnologyCard
              title="Unified Context"
              description="Agents that remember conversations across channels and give your team the right context."
            >
              <ContextNetwork />
            </TechnologyCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
