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
    id: "matchett-plumbing",
    title: "Matchett Plumbing",
    description:
      "AI-powered lead generation bot that scans Facebook, Reddit, Craigslist, Nextdoor, and other online forums for people asking about plumbing needs. Matchett Plumbing receives a daily email every morning with links to each post and a draft comment referring their services.",
    url: "https://matchettplumbing.com",
    images: [],
    tags: ["AI", "Automations", "Lead Generation"],
  },
];

export const testimonials: Testimonial[] = [];
