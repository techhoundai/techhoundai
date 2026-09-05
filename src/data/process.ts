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
      "We learn about your trade, your service area, and what's holding your business back. Free, no obligation. Just a conversation about how tech can help you get more jobs.",
    icon: "lucide:phone",
  },
  {
    number: 2,
    title: "Requirements & Proposal",
    description:
      "We put together a clear proposal outlining exactly what we'll build, how long it'll take, and what it costs. No jargon, no surprises.",
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
      "We build your solution and share progress early and often. You'll see your website or tool take shape in real time, and we don't consider it done until you do.",
    icon: "lucide:code",
  },
  {
    number: 5,
    title: "Launch & Support",
    description:
      "We launch your project and stick around. Ongoing maintenance, updates, and support so your tech keeps working as hard as you do.",
    icon: "lucide:rocket",
  },
];
