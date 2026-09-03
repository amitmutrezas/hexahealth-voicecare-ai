# VoiceCare AI Landing

**Live app**: https://voicecareai.hexahealth.com/

**Prototype:** https://hexahealth-voicecare-ai.lovable.app

## Development Environment

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Initial Lovable Prompt

Create a landing page using the attached image

---

Full prompt:

Build a production-quality, responsive landing page for a healthcare AI product called:

VoiceCare AI

by HexaHealth

IMPORTANT:

Use the attached reference image as the primary visual reference for the overall layout, spacing, typography hierarchy, visual style, card design, section ordering, CTA treatment and overall premium SaaS aesthetic.

Do NOT simply place the screenshot as an image.

Recreate the page as a real HTML/CSS/React website with editable text, responsive layouts and functional interactions.

The visual target is a premium AI SaaS landing page similar in quality and polish to modern companies such as Ringg AI, ElevenLabs and other frontier AI products, but the branding and messaging should be specific to VoiceCare AI by HexaHealth.

==================================================

1. BRAND / VISUAL DIRECTION

==================================================

Brand:

VoiceCare AI by HexaHealth

Positioning:

AI voice agents built specifically for healthcare in India.

Visual style:

- Minimal

- Premium

- Modern AI/SaaS

- Healthcare-oriented without looking like a traditional healthcare website

- Lots of whitespace

- White background

- Very subtle warm peach/orange gradients

- Black typography

- Orange accent

- Thin light-gray borders

- Rounded cards

- Soft shadows

- Subtle dotted/radial background patterns

- Clean geometric visualizations

- No excessive illustrations

- No generic stock photography except where explicitly specified

- Overall aesthetic should feel like a premium enterprise AI company

Primary colors:

- Black: #090909

- Dark text: #161616

- Muted text: #69717F

- Orange: #FF5B18

- Soft orange: #FFF1E9

- White: #FFFFFF

- Light gray border: #E8E8E8

- Very light warm background: #FFF8F4

Typography:

Use a modern sans-serif such as Inter, Geist, SF Pro, or equivalent.

Large headlines should have tight letter spacing and strong weight.

Body copy should be muted gray.

==================================================

2. STICKY HEADER

==================================================

Create a sticky/fixed header.

Header should remain visible while scrolling.

White background with slight transparency / backdrop blur.

Subtle bottom border.

Left:

VoiceCare AI logo treatment.

Logo:

"VoiceCare AI"

AI should use the orange accent.

Underneath / beside logo:

"by HexaHealth"

Center navigation:

Product

Use Cases

Technology

How it works

About Us

Right:

Black pill-shaped CTA:

"▣  Book a demo  ›"

The CTA should scroll to the demo section.

On mobile:

- Hide desktop navigation

- Keep logo

- Keep Book a demo CTA

- Use a hamburger menu if appropriate

Header should have a subtle shadow/border after scrolling.

==================================================

3. HERO SECTION

==================================================

Create a two-column hero section.

Left side:

Small pill badge:

"◉ AI Voice Agents for Healthcare"

Main headline:

"Every patient should

feel heard."

Make "feel heard." orange.

Large, bold, premium typography.

Approximate visual size on desktop: 68-78px.

Tight line-height.

Supporting text:

"VoiceCare AI automates patient conversations over calls,

so your care team can focus on care, not calls."

Use muted gray.

--------------------------------------------------

HERO PHONE CTA

--------------------------------------------------

This is an important component.

Create a large rounded horizontal phone input CTA similar to the reference image.

White rounded container with:

- thin gray border

- subtle shadow

- large pill shape

Inside:

India flag 🇮🇳

dropdown chevron

input placeholder:

"Phone Number"

On the right:

large black pill button:

"☎  Try an agent"

The component should look approximately like:

[ 🇮🇳  ˅   Phone Number                         [ ☎ Try an agent ] ]

The button must be functional.

Behavior:

- If phone number is empty, show inline validation:

  "Please enter your phone number"

- Validate a basic Indian phone number format.

- On valid submission, show:

  "Thanks! A VoiceCare AI agent will reach out shortly."

- Do not actually initiate a call unless a backend integration exists.

- Structure the code so the API/telephony integration can be added later.

Below the component:

"Enter your number and experience VoiceCare AI firsthand."

Small muted text.

--------------------------------------------------

HERO RIGHT VISUAL

--------------------------------------------------

Recreate the visual feel of the reference.

Show a premium AI voice interaction visualization.

Use:

- A large circular/radial orange glow

- Abstract representation of a woman/patient speaking on a phone

- Floating voice waveform

- Floating conversational message bubbles

- Small phone/voice icon

- Subtle concentric rings

If generating a person illustration/image is necessary, use a tasteful photorealistic or premium editorial-style image of an Indian woman talking on a phone.

Do NOT use an unrelated stock image.

Floating conversation cards:

AI:

"Hi, this is VoiceCare AI.

How can I help you today?"

Patient:

"I want to book an appointment

with a cardiologist."

AI:

"Sure, I can help with that.

May I know your preferred date?"

The cards should have subtle floating animations.

Add a small orange waveform pill near the top of the visual.

The entire visual should feel lightweight and premium rather than like a generic chatbot illustration.

==================================================

4. METRICS STRIP

==================================================

Immediately below hero.

Four compact cards:

95%

Qualification calls automated

+20%

D14 retention impact

100M+

AI requests handled monthly

65B

Tokens processed per month

Cards:

- White

- Thin border

- Slight radius

- Compact

- Small orange/gray icon

- Large number

- Small explanatory text

These metrics should be visually prominent but not overpower the hero.

==================================================

5. FRONTIER VOICE TECHNOLOGY SECTION

==================================================

Create a section with a subtle dotted/radial background.

Heading:

"Frontier Voice Tech, Built for India"

Supporting text:

"Production-grade voice intelligence designed for the scale,

languages and complexity of Indian healthcare."

Use centered heading.

Then create a 2x2 grid of four large technology cards.

Cards should resemble the reference image.

--------------------------------------------------

CARD 1: GLOBAL CITIZENS

--------------------------------------------------

Heading:

"Global Citizens"

Description:

"Voice agents that inherently understand 20+ languages, with high accuracy across Indian and global languages."

Bottom visualization:

Display floating language names:

Hello

Hindi

മലയാളം

20+ languages

Tamil

Bengali

French

Kannada

नमस्कार

తెలుగు

Mandarin

Hola

ગુજરાતી

Russian

Make "20+ languages" orange.

Use different gray opacity levels for other languages.

Animate languages subtly.

--------------------------------------------------

CARD 2: LOWEST LATENCY

--------------------------------------------------

Heading:

"Lowest latency"

Description:

"Fast, natural conversations with orchestration designed to keep responses fluid across voice interactions."

Bottom visualization:

Create an animated voice waveform.

Waveform should flow from left toward a black pill.

Inside/overlapping the waveform, show an orange dotted visualization.

Black rounded capsule on right.

Add subtle animation to indicate real-time voice processing.

Do not claim a specific latency number unless we explicitly provide one.

--------------------------------------------------

CARD 3: MAXIMUM SCALE

--------------------------------------------------

Heading:

"Maximum scale"

Description:

"Always prepared for surges, with no compromise on performance."

Bottom visualization:

Create a futuristic perspective grid / 3D tunnel effect.

Centered metric:

"120K+"

Below:

"INTERACTIONS / HOUR"

Use orange geometric accents around the grid.

The visual should feel like infrastructure/AI scale rather than a generic chart.

--------------------------------------------------

CARD 4: UNIFIED CONTEXT

--------------------------------------------------

Heading:

"Unified Context"

Description:

"Agents that remember conversations across channels and give your team the right context."

Create a network visualization:

Patient/user icon on left

        ↓

VoiceCare AI central node

        ↓

Multiple channels on right

Right-side channel icons:

- Voice

- Chat

- WhatsApp

- Web

- Other relevant healthcare communication channels

Use thin gray connecting lines.

Central VoiceCare node should be black.

Animate the connecting lines subtly.

==================================================

6. HEALTHCARE USE CASES

==================================================

Create a warm peach background section.

Small orange kicker:

"Built for Healthcare"

Heading:

"Every conversation. Every outcome."

Supporting copy:

"Automate high-impact patient interactions across the care journey."

Create six cards in one row on desktop and responsive grid on mobile.

Cards:

1.

Appointment Scheduling

"Book, reschedule and cancel appointments seamlessly."

Icon: calendar

2.

Call Qualification

"Automate patient screening and qualification calls."

Icon: phone

3.

Follow-ups & Reminders

"Reduce no-shows with timely reminders and follow-ups."

Icon: bell

4.

Lab & Test Results

"Deliver results and next steps securely and compliantly."

Icon: lab/test

5.

Insurance & Billing Support

"Handle policy checks, billing queries and payment reminders."

Icon: shield/payment

6.

Patient Feedback & Surveys

"Collect feedback and measure patient satisfaction."

Icon: star

Cards should:

- Have white background

- Rounded corners

- Thin warm-gray border

- Orange icon container

- Minimal shadow

- Consistent height

Hover:

Slight translateY(-4px)

Subtle shadow increase

Orange accent

==================================================

7. HOW IT WORKS

==================================================

White background.

Small orange kicker:

"How it works"

Heading:

"Simple to deploy. Powerful to scale."

Create a horizontal 4-step workflow.

Step 1:

Connect

"Plug into your telephony stack in minutes."

Icon: phone

Step 2:

Configure

"Train on your workflows, policies and knowledge."

Icon: AI/brain

Step 3:

Converse

"AI agents handle calls naturally and intelligently."

Icon: conversation

Step 4:

Improve

"Get insights, measure outcomes and keep optimizing."

Icon: analytics

Design:

Orange numbered circles above each step.

Circular icons.

Dashed connecting line between steps.

On mobile:

Stack into two columns or vertical timeline.

==================================================

8. TRUST / PRODUCT PRINCIPLES

==================================================

Below the workflow create a horizontal pill/card row.

Five benefits:

Human-like conversations

Multilingual by default

Human handoff when needed

Secure & healthcare-ready

Enterprise-grade reliability

Each should have a small orange icon.

==================================================

9. FINAL CTA

==================================================

Create a wide premium CTA card with very subtle peach gradient.

Left:

"See VoiceCare AI in action"

Supporting text:

"Book a personalized demo and discover how VoiceCare can transform your patient experience."

Right:

Black pill button:

"▣  Book a demo  ›"

Clicking should scroll to/contact the demo form.

==================================================

10. FOOTER

==================================================

Minimal footer.

Left:

VoiceCare AI by HexaHealth

"AI voice agents for healthcare"

Right:

© 2026 HexaHealth

==================================================

11. INTERACTIONS

==================================================

Implement polished but restrained interactions.

Header:

- Sticky

- Slight background blur

- Active nav state based on scroll position

Hero:

- Floating chat bubbles

- Animated waveform

- Subtle radial movement

Technology:

- Animated language words

- Animated waveform

- Animated scale grid

- Animated context connections

Use cases:

- Hover elevation

Buttons:

- Subtle hover scale

- Smooth transitions

Scrolling:

- Smooth anchor scrolling

- Section reveal animations using IntersectionObserver

Animations should be subtle and professional.

Avoid excessive motion.

==================================================

12. RESPONSIVE DESIGN

==================================================

Desktop:

Optimized for 1440px and 1280px screens.

Tablet:

Adapt grids appropriately.

Mobile:

- Single-column hero

- Phone CTA becomes full width

- Hero visual moves below copy

- Technology cards become single-column

- Healthcare use cases become 2-column or single-column

- Workflow becomes vertical

- Header navigation collapses

- Typography scales down appropriately

- No horizontal overflow

Test at:

1440px

1280px

1024px

768px

390px

375px

==================================================

13. TECHNICAL REQUIREMENTS

==================================================

Build using:

- React

- Tailwind CSS or clean modular CSS

- Lucide React or another clean icon library

- No unnecessary dependencies

Code should be:

- Componentized

- Maintainable

- Production quality

- Semantic HTML

- Accessible

- SEO friendly

Create reusable components:

Header

Hero

PhoneAgentCTA

Metrics

TechnologySection

TechnologyCard

UseCases

UseCaseCard

HowItWorks

BenefitStrip

FinalCTA

Footer

Add:

- proper meta title

- meta description

- OpenGraph metadata

- semantic headings

- aria labels for buttons and inputs

- keyboard accessible interactions

==================================================

14. IMPORTANT CONTENT RULES

==================================================

Do not invent healthcare customers, logos, testimonials or regulatory certifications.

Do not claim HIPAA compliance unless explicitly provided.

Do not claim specific latency numbers unless explicitly provided.

Do not invent additional product capabilities.

The following production metrics are approved for the page:

95% qualification calls automated

+20% D14 retention impact

100M+ AI requests handled monthly

65B tokens processed per month

120K+ interactions/hour may be presented as a platform scale visualization, but do not imply it is an independently audited customer metric.

==================================================

15. FINAL DESIGN OBJECTIVE

==================================================

The final result should visually resemble the attached reference image as closely as practical while remaining an actual responsive website.

The design should communicate:

"VoiceCare AI is not just an AI calling bot.

It is a production-grade voice intelligence layer for healthcare."

The first screen should immediately communicate:

1. What VoiceCare AI is

2. Who it is for

3. Why it matters

4. The ability to try an agent

5. The ability to book a demo

Prioritize visual polish, spacing, typography, hierarchy and conversion over adding unnecessary content.

Do not make the page look like a generic template.

It should feel like a premium AI product built by a serious healthcare technology company.

