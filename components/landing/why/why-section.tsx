import { WhyCard } from "@/components/landing/why/why-card";
import { SectionHeading } from "@/components/landing/shared/section-heading";
import { SectionShell } from "@/components/landing/shared/section-shell";
import { WHY_CARDS } from "@/lib/landing/content";

export function WhySection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Why not chat"
          title="Why not just stay in the chat window?"
          description="Chat makes you steer every reply. Smithers gives you multi-agent workflows, reusable expertise, and systems you improve over time."
          descriptionClassName="text-base sm:text-lg"
        />

        <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-6">
          {WHY_CARDS.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
