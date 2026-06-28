export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  projectId?: string;
  featured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  url: string;
  images: string[];
  tags: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: "complete-home-comfort",
    title: "Complete Home Comfort PGH",
    description:
      "Pittsburgh's trusted HVAC experts. We built a full website featuring service pages, a free estimate flow, a project gallery, and a professional dark-themed design that reflects the quality of their work.",
    url: "https://completehomecomfortpgh.com",
    images: ["/images/completehomecomfort1.png", "/images/completehomecomfort2.png"],
    tags: ["Web Design", "Development", "SEO"],
  },
  {
    id: "bothound",
    title: "BotHound",
    description:
      "AI-powered automation platform built by TechHound to help small businesses adopt AI into their workflows. Features a bot builder with multi-stage task pipelines, scheduled runs, and detailed run history.",
    url: "https://bothound.ai",
    images: ["/images/bothound1.png", "/images/bothound2.png"],
    tags: ["Web App", "AI", "Automations", "Product"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "TechHound built us a website that actually looks like our business. Professional, clean, and our customers love it. The whole process was easy and the price was fair.",
    name: "Jordan Mitchell",
    company: "Complete Home Comfort PGH",
    projectId: "complete-home-comfort",
    featured: true,
  },
  {
    quote:
      "We needed a site that worked as hard as we do. TechHound delivered exactly that, on time and on budget. Would recommend them to any small business.",
    name: "Alex Rivera",
    company: "Complete Home Comfort PGH",
    projectId: "complete-home-comfort",
    featured: true,
  },
];
