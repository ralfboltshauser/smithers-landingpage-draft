import type { WhyDemoType } from "@/lib/landing/types";

export const WHY_CARDS: {
  title: string;
  body: string;
  demo: WhyDemoType;
}[] = [
  {
    title: "Multi-agent systems improve quality",
    body: "Different agents and prompts per step — triage, specialist work, sign-off. Quality comes from the system, not one model guessing in a single chat.",
    demo: "multi-agent",
  },
  {
    title: "Your expertise, built in",
    body: "Embed domain rules, checks, and standards in the workflow. The agent follows your playbook — you don't steer it by hand every run.",
    demo: "expertise",
  },
  {
    title: "Improve the system",
    body: "When output is wrong, tighten the recipe — not rewrite the answer in chat. Each iteration makes the orchestration better.",
    demo: "system",
  },
];
