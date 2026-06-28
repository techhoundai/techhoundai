export interface Service {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "From clean marketing sites to full web applications, we build fast, modern websites that look great and actually work for your business.",
    icon: "lucide:globe",
    items: [
      "Website design and development",
      "Ongoing website maintenance and updates",
      "Static and dynamic site solutions",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We handle the full lifecycle from design to deployment to ongoing updates.",
    icon: "lucide:smartphone",
    items: [
      "iOS and Android app development",
      "Ongoing mobile app maintenance",
    ],
  },
  {
    title: "Custom Business Automations",
    description:
      "Stop doing repetitive work manually. We build custom automations that connect your tools and streamline your workflows.",
    icon: "lucide:zap",
    items: [
      "Custom workflow automations",
      "Integration between existing tools and platforms",
    ],
  },
  {
    title: "SEO & AEO",
    description:
      "Get found by customers and by AI. We handle traditional search optimization and the new frontier of AI Engine Optimization.",
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
];
