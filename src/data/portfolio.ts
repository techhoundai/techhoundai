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
      "A full contractor website for Pittsburgh's trusted HVAC team. Service pages, a free estimate flow, a project gallery, and a professional design that turns visitors into booked jobs.",
    url: "https://completehomecomfortpgh.com",
    images: ["/images/completehomecomfort1.png", "/images/completehomecomfort2.png"],
    tags: ["Web Design", "Development", "SEO"],
  },
  {
    id: "matchett-plumbing",
    title: "Matchett Plumbing",
    description:
      "A lead generation tool that scans Facebook, Reddit, Craigslist, Nextdoor, and community forums for people asking about plumbing. Matchett Plumbing gets a daily email with links and draft replies. Leads delivered before competitors see them.",
    url: "https://matchettplumbing.com",
    images: [],
    tags: ["Automations", "Lead Generation"],
  },
];

export const testimonials: Testimonial[] = [];
