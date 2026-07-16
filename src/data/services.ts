export interface Service {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Web Development & Hosting",
    description:
      "We build everything from simple marketing sites to full web applications, and we host them too. If you need a website that looks good and actually works, we've got you.",
    icon: "lucide:globe",
    items: [
      "Website design and development",
      "Managed hosting and maintenance",
      "Static and dynamic site solutions",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We take it from design through deployment and stick around for updates after launch.",
    icon: "lucide:smartphone",
    items: [
      "iOS and Android app development",
      "Ongoing mobile app maintenance",
    ],
  },
  {
    title: "Business Process Automation",
    description:
      "If you're doing the same thing over and over, there's probably a way to automate it. We build custom automations and connect your systems together, whether that's your CRM, payment platform, or internal tools.",
    icon: "lucide:zap",
    items: [
      "Custom workflow automations",
      "System integrations across platforms",
      "End-to-end process automation",
    ],
  },
  {
    title: "Custom AI Agents",
    description:
      "We build AI agents that are trained on your data and actually get things done. They can run in the cloud or locally on your own machines, depending on what you need.",
    icon: "lucide:bot",
    items: [
      "Custom agents trained on your business data",
      "Cloud-hosted and locally-hosted options",
      "Built by the team behind BotHound",
    ],
  },
  {
    title: "Lead Generation & Digital Monitoring",
    description:
      "We build web scraping and monitoring tools that find you leads, track what people are saying about your brand, and keep an eye on what your competitors are up to.",
    icon: "lucide:radar",
    items: [
      "Automated lead generation",
      "Online brand and reputation monitoring",
      "Competitor monitoring and analysis",
      "Custom web scraping solutions",
    ],
  },
  {
    title: "SEO & AEO",
    description:
      "We handle traditional SEO and the newer side of things, AI Engine Optimization. The goal is simple: make sure your business shows up when people search for what you do, whether they're using Google or an AI.",
    icon: "lucide:search",
    items: [
      "Traditional SEO (keywords, technical SEO, backlinking)",
      "Content generation (blogs, social media)",
      "AEO (AI Engine Optimization) for AI-driven search",
    ],
  },
  {
    title: "Technical Platform Support",
    description:
      "Already using enterprise tools? We help you get more out of them. Setup, configuration, migration, and ongoing support.",
    icon: "lucide:server",
    items: [
      "ServiceTitan, ServiceNow, Microsoft 365",
      "Google Workspace, AWS, QuickBooks",
      "Setup, configuration, and migration",
    ],
  },
  {
    title: "Brand & Business Services",
    description:
      "Your online presence matters. We help with brand design, business profiles, and making sure you look professional everywhere customers find you.",
    icon: "lucide:palette",
    items: [
      "Logo and visual identity design",
      "Google Business, Facebook, Yelp profile setup",
      "Business profile optimization",
    ],
  },
  {
    title: "General Tech Support",
    description:
      "Not every problem needs a whole project. Sometimes you just need someone to call. We handle day-to-day tech issues, updates, and general tech support for businesses that don't want to hire a full-time team.",
    icon: "lucide:headphones",
    items: [
      "Ongoing technical support",
      "Security updates and monitoring",
      "General tech management",
    ],
  },
];
