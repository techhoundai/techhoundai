export interface Service {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Job Photo Sync",
    description:
      "Post a finished job photo to Instagram with a hashtag and it automatically appears on your website, Yelp page, and Google Business Profile. Works with any social platform.",
    icon: "lucide:image",
    items: [
      "Auto-sync to website, Yelp, and Google",
      "Hashtag-based workflow from your phone",
      "Keep your online presence fresh without extra work",
    ],
  },
  {
    title: "Google Review Automation",
    description:
      "Automated replies to your Google reviews using keywords that boost your local SEO rankings. Your reviews work harder for you while you focus on the next job.",
    icon: "lucide:star",
    items: [
      "SEO-optimized auto-replies to reviews",
      "Local keyword targeting in responses",
      "Professional tone that builds trust",
    ],
  },
  {
    title: "Automated Blog Posts",
    description:
      "We automatically generate and publish blog posts that establish you as the go-to contractor in your area for your trade. Build topical authority without writing a word.",
    icon: "lucide:file-edit",
    items: [
      "Auto-published to your website",
      "Targeted to your service area and trade",
      "Builds topical authority for local search",
    ],
  },
  {
    title: "Lead Gen & Backlinking",
    description:
      "We scan Facebook, Nextdoor, Reddit, and Craigslist for people asking about your services and automatically recommend your business. Warm leads and backlinks delivered to you.",
    icon: "lucide:radar",
    items: [
      "Social media and forum monitoring",
      "Auto-recommend your business in relevant threads",
      "Daily lead reports to your inbox",
    ],
  },
  {
    title: "Contractor Websites",
    description:
      "Fast, mobile-first websites built to turn visitors into booked jobs. Click-to-call, online estimate forms, service pages that rank, and a project gallery that updates itself.",
    icon: "lucide:globe",
    items: [
      "Custom design for your trade",
      "Online estimate and booking forms",
      "Auto-syncing project gallery",
    ],
  },
  {
    title: "Missed Call Texts & Automations",
    description:
      "Miss a call on the job? We text them back automatically. We also integrate with FieldPulse, Jobber, ServiceTitan, and Housecall Pro to send seasonal promos to your customer list.",
    icon: "lucide:zap",
    items: [
      "Automated texts to missed calls",
      "FieldPulse, Jobber, ServiceTitan integrations",
      "Seasonal email campaigns from your customer list",
    ],
  },
  {
    title: "Custom Tech Solutions",
    description:
      "CRM, scheduling, dispatching, or something else entirely. If technology can make your operation run smoother, we can build it.",
    icon: "lucide:wrench",
    items: [
      "Custom CRM and job management tools",
      "Scheduling and dispatching systems",
      "Platform integrations and data tools",
    ],
  },
];
