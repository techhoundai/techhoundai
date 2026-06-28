export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and technical needs. Free, no obligation. Just a conversation about what you're trying to accomplish.",
    icon: "lucide:phone",
  },
  {
    number: 2,
    title: "Requirements & Proposal",
    description:
      "We collaborate on detailed requirements and deliver a clear proposal outlining scope, timeline, and cost. No surprises.",
    icon: "lucide:file-text",
  },
  {
    number: 3,
    title: "Agreement",
    description:
      "We settle on a price and timeline that works for both sides. Straightforward terms, no hidden fees.",
    icon: "lucide:handshake",
  },
  {
    number: 4,
    title: "Build & Iterate",
    description:
      "We build your solution and share progress early and often. Expect several rounds of review sessions and back-and-forth until you are completely satisfied with the end product. We don't consider it done until you do.",
    icon: "lucide:code",
  },
  {
    number: 5,
    title: "Launch & Support",
    description:
      "We launch your project and work with you to put together an ongoing support plan that fits your needs. We don't disappear after delivery.",
    icon: "lucide:rocket",
  },
];
