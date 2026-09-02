import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { FirstStep } from "@/components/landing/FirstStep";
import { TechnologySection } from "@/components/landing/TechnologySection";
import { UseCases } from "@/components/landing/UseCases";
import { CallPowers } from "@/components/landing/CallPowers";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BenefitStrip } from "@/components/landing/BenefitStrip";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const TITLE = "VoiceCare AI by HexaHealth — AI Voice Agents for Healthcare";
const DESCRIPTION =
  "VoiceCare AI automates patient conversations over calls — appointments, follow-ups, lab results and billing — so care teams can focus on care, not calls.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "VoiceCare AI",
          applicationCategory: "HealthApplication",
          description: DESCRIPTION,
          publisher: { "@type": "Organization", name: "HexaHealth" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <TechnologySection />
        <FirstStep />
        <UseCases />
        <CallPowers />
        <HowItWorks />
        <BenefitStrip />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
