import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What are AI voice assistants?",
    a: "AI voice assistants are software agents that speak and listen like a person. VoiceCare AI uses speech recognition, large language models and natural voice synthesis to hold real, two-way phone conversations with patients.",
  },
  {
    q: "What is an AI voice agent?",
    a: "An AI voice agent is a purpose-built assistant that places and receives phone calls on your behalf — qualifying leads, booking appointments, answering enquiries and following up — without a human on the line.",
  },
  {
    q: "What is voice AI used for?",
    a: "In healthcare it is used for appointment booking and reminders, pre-consultation intake, lab report follow-ups, billing questions, post-discharge check-ins and 24/7 enquiry handling.",
  },
  {
    q: "What does an AI agent do?",
    a: "It understands the caller's intent in their own language, answers from your approved knowledge base, updates your systems, books or reschedules slots, and hands off to a human when the conversation needs one.",
  },
  {
    q: "Are AI voice calls legal?",
    a: "Yes, when done responsibly. VoiceCare AI discloses that it is an AI assistant, honours consent and opt-outs, respects calling-time norms and keeps auditable records of every interaction.",
  },
  {
    q: "Is voice AI free or paid?",
    a: "VoiceCare AI is a paid product priced on usage — typically per minute or per conversation — with volume pricing for hospitals and clinic chains. You can trial an agent on your own number before buying.",
  },
  {
    q: "Is it safe to use AI voice assistants?",
    a: "It is, with the right boundaries. Conversations stay inside your approved flows, sensitive topics escalate to a care coordinator, and patient data is encrypted in transit and at rest.",
  },
  {
    q: "What are the advantages of using AI agents?",
    a: "Every call is answered instantly, in any regional language, at any hour — with up to 90% lower manpower requirement, fewer manual errors and a step change in lead-to-appointment conversion.",
  },
  {
    q: "Which languages does VoiceCare AI support?",
    a: "20+ languages, including Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati and English, with natural code-switching mid-sentence.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most teams launch in days: share your flows and knowledge base, we configure the agent and a number, run test calls, then switch on live traffic.",
  },
  {
    q: "Does it integrate with our HIS or CRM?",
    a: "Yes. VoiceCare AI connects to your hospital information system, CRM or scheduling tool so bookings, notes and call outcomes are written back automatically.",
  },
  {
    q: "Can the agent handle interruptions?",
    a: "Yes. The agent detects barge-in, pauses, listens and resumes naturally — so callers can interrupt or change topic mid-sentence the way they would with a person.",
  },
];

export function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="bg-warm">
      <div className="mx-auto max-w-[900px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <h2
            id="faqs-heading"
            className="text-center text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl"
          >
            FAQs
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {FAQS.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
