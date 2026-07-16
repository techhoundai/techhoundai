export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
  items: string[];
  longDescription: string;
  faq: ServiceFAQ[];
}

export const services: Service[] = [
  {
    title: "Web Development & Hosting",
    slug: "web-development-hosting",
    description:
      "We build everything from simple marketing sites to full web applications, and we host them too. If you need a website that looks good and actually works, we've got you.",
    icon: "lucide:globe",
    items: [
      "Website design and development",
      "Managed hosting and maintenance",
      "Static and dynamic site solutions",
    ],
    longDescription: `Your website is usually the first thing a potential customer sees. If it loads slowly, looks outdated, or doesn't work on a phone, you're losing business before anyone even talks to you.

We build websites that are fast, mobile-first, and designed to convert visitors into customers. Whether you need a simple marketing site, a blog, a portfolio, or a full web application with user accounts and dynamic features, we handle the entire process from design through deployment.

Every site we build is hosted on modern infrastructure with SSL, CDN distribution, and automatic backups included. We don't hand you the keys and walk away — we manage the hosting and handle updates so you never have to think about server maintenance or security patches. Our team has built software for Fortune 500 companies and federal agencies, and that same attention to detail shows up in every project we take on.

We also use AI tools in our development workflow, which means we deliver faster and charge less than a traditional agency. A professional website that used to cost $10,000–$20,000 can now be built for a fraction of that without sacrificing quality.`,
    faq: [
      {
        question: "How much does a website cost?",
        answer: "A simple static marketing website starts at around $2,000. More complex sites with dynamic features, user accounts, or e-commerce functionality cost more depending on scope. We provide a free consultation and detailed quote before any work begins.",
      },
      {
        question: "How long does it take to build a website?",
        answer: "A standard marketing website typically takes 2–4 weeks from kickoff to launch. More complex web applications can take 6–12 weeks. We'll give you a clear timeline during our initial consultation.",
      },
      {
        question: "Do you redesign existing websites?",
        answer: "Yes. We can rebuild your existing site on modern technology, improve its design and performance, and migrate your content. We'll evaluate your current site and recommend whether a refresh or full rebuild makes more sense.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We take it from design through deployment and stick around for updates after launch.",
    icon: "lucide:smartphone",
    items: [
      "iOS and Android app development",
      "Ongoing mobile app maintenance",
    ],
    longDescription: `Not every business needs a mobile app — most are better served by a responsive website. But when your use case genuinely calls for one, we build it right.

We develop native and cross-platform mobile applications for iOS and Android. Whether you need offline functionality, deep hardware integration, push notifications, or a tool your team uses in the field every day, we design and build apps that work reliably in real-world conditions.

Our process starts with understanding whether an app is actually the right solution for your problem. If a responsive website would accomplish the same thing at a fraction of the cost, we'll tell you. If an app truly makes sense, we handle the full lifecycle: design, development, App Store and Google Play submission, and ongoing maintenance as operating systems evolve.

We also stick around after launch. Mobile apps need regular updates to stay compatible with new OS versions, and we handle that ongoing maintenance so your app doesn't break when Apple or Google pushes an update.`,
    faq: [
      {
        question: "Do I need a mobile app or just a responsive website?",
        answer: "Most small businesses are better served by a responsive website. You need an app if your product requires offline access, deep hardware integration (camera, GPS, Bluetooth), push notifications, or is used multiple times daily. We'll give you an honest assessment during our consultation.",
      },
      {
        question: "Do you build for both iOS and Android?",
        answer: "Yes. We build cross-platform apps that work on both iOS and Android from a single codebase, which is faster and more cost-effective than building two separate native apps. For performance-critical applications, we can also build fully native.",
      },
      {
        question: "What happens after the app launches?",
        answer: "We provide ongoing maintenance and support. Mobile apps need regular updates when Apple and Google release new OS versions, and we handle those updates, bug fixes, and feature additions on an ongoing basis.",
      },
    ],
  },
  {
    title: "Business Process Automation",
    slug: "business-process-automation",
    description:
      "If you're doing the same thing over and over, there's probably a way to automate it. We build custom automations and connect your systems together, whether that's your CRM, payment platform, or internal tools.",
    icon: "lucide:zap",
    items: [
      "Custom workflow automations",
      "System integrations across platforms",
      "End-to-end process automation",
    ],
    longDescription: `If your team is spending hours copying data between systems, sending the same follow-up emails, or manually assembling reports from multiple sources, those are hours you're paying for that could be automated.

We build custom automations that connect your existing tools and eliminate repetitive manual work. Whether it's syncing your CRM with your invoicing system, automating follow-up sequences after form submissions, generating weekly reports from multiple data sources, or routing incoming leads to the right team member, we identify the bottlenecks in your workflow and build systems that handle them automatically.

We work with platforms like Zapier, Make, n8n, and custom scripts depending on what fits your situation best. The tool comes last — we start by understanding your process, identifying what should be automated, and then choosing the right approach. Sometimes that's a no-code platform; sometimes it's a custom integration that doesn't exist off the shelf.

Every automation we build includes error handling and monitoring so you know when something succeeds and get alerted when something needs attention. We don't believe in set-and-forget — we build automations that are transparent and maintainable.`,
    faq: [
      {
        question: "What kinds of tasks can be automated?",
        answer: "Almost any repetitive task that follows a pattern: data entry between systems, email follow-ups, invoice generation, report assembly, lead routing, appointment reminders, inventory updates, and more. If you're doing the same steps over and over, it's probably automatable.",
      },
      {
        question: "Will automation replace my employees?",
        answer: "No. Automation handles the tedious, repetitive parts of work so your team can focus on tasks that require judgment, creativity, and personal interaction. It makes your existing team more productive, not redundant.",
      },
      {
        question: "How much time can automation actually save?",
        answer: "It depends on the process, but we typically see businesses save 5–15 hours per week on tasks like manual data entry, follow-up emails, and report generation. We measure the time savings before and after so you can see the concrete ROI.",
      },
    ],
  },
  {
    title: "Custom AI Agents",
    slug: "custom-ai-agents",
    description:
      "We build AI agents that are trained on your data and actually get things done. They can run in the cloud or locally on your own machines, depending on what you need.",
    icon: "lucide:bot",
    items: [
      "Custom agents trained on your business data",
      "Cloud-hosted and locally-hosted options",
      "Built by the team behind BotHound",
    ],
    longDescription: `AI agents go beyond chatbots. While a chatbot answers questions, an agent takes actions — sending emails, updating your CRM, scheduling appointments, generating reports, and more, all autonomously based on the goals you set.

We build custom AI agents trained on your business data and connected to your existing tools. An agent with access to your email and calendar can handle appointment scheduling and follow-ups. An agent connected to your inventory system can track stock levels and place reorders. The AI provides the reasoning; the tools provide the ability to act.

Our agents are built through BotHound, our own AI automation platform. We handle the full process: understanding your workflow, identifying which tasks are good candidates for an agent, building and training the agent, connecting it to your systems, and deploying it with proper monitoring and guardrails.

Depending on your data sensitivity and infrastructure requirements, agents can run in the cloud or on your own hardware. Every agent includes escalation paths — when it encounters something outside its training, it flags a human rather than guessing.`,
    faq: [
      {
        question: "What's the difference between an AI agent and a chatbot?",
        answer: "A chatbot answers questions. An AI agent takes actions. An agent can send emails, update databases, schedule appointments, generate reports, and perform multi-step tasks autonomously. It reasons through problems and uses tools to accomplish goals.",
      },
      {
        question: "Is my business data safe with an AI agent?",
        answer: "Yes. We can deploy agents on your own infrastructure for maximum data control, or in isolated cloud environments with strict access controls. Your data is never shared with other clients or used to train external models.",
      },
      {
        question: "What tasks are best suited for AI agents?",
        answer: "The best candidates are repetitive tasks that follow a pattern: customer intake and lead qualification, appointment scheduling, data entry between systems, report generation, and internal knowledge base queries. Tasks requiring creative judgment or subjective decisions are better left to humans.",
      },
    ],
  },
  {
    title: "Lead Generation & Digital Monitoring",
    slug: "lead-generation-digital-monitoring",
    description:
      "We build web scraping and monitoring tools that find you leads, track what people are saying about your brand, and keep an eye on what your competitors are up to.",
    icon: "lucide:radar",
    items: [
      "Automated lead generation",
      "Online brand and reputation monitoring",
      "Competitor monitoring and analysis",
      "Custom web scraping solutions",
    ],
    longDescription: `The internet is full of information about your market, your competitors, and your potential customers. The problem is that gathering and making sense of that information manually is a full-time job. We build tools that do it automatically.

Our lead generation systems identify potential customers based on criteria you define — industry, location, company size, online behavior — and deliver qualified leads directly to your inbox or CRM. Instead of cold outreach based on purchased lists, you get leads that match your ideal customer profile.

We also build monitoring tools that track what people are saying about your business online across review sites, social media, forums, and news outlets. When someone mentions your brand, you know about it. When a negative review appears, you can respond quickly. When a competitor launches a new product or changes their pricing, you see it.

All of this runs on custom-built web scraping and data processing pipelines. We handle the technical complexity — rate limiting, proxy rotation, data cleaning, deduplication — so you get clean, actionable data without having to think about the infrastructure behind it.`,
    faq: [
      {
        question: "Is web scraping legal?",
        answer: "Web scraping of publicly available data is generally legal, and recent court rulings have reinforced this. We only scrape public information, respect robots.txt directives, and follow responsible scraping practices including rate limiting and proper identification.",
      },
      {
        question: "How do you find leads for my business?",
        answer: "We build custom scraping and data processing systems that identify potential customers based on your criteria: industry, location, company size, job titles, online behavior, and more. Leads are delivered directly to your CRM or inbox with the contact information and context you need.",
      },
      {
        question: "What does brand monitoring include?",
        answer: "We track mentions of your business across review sites (Google, Yelp, BBB), social media platforms, forums, news outlets, and industry-specific sites. You receive alerts when your brand is mentioned, with sentiment analysis so you can prioritize responses.",
      },
    ],
  },
  {
    title: "SEO & AEO",
    slug: "seo-aeo",
    description:
      "We handle traditional SEO and the newer side of things, AI Engine Optimization. The goal is simple: make sure your business shows up when people search for what you do, whether they're using Google or an AI.",
    icon: "lucide:search",
    items: [
      "Traditional SEO (keywords, technical SEO, backlinking)",
      "Content generation (blogs, social media)",
      "AEO (AI Engine Optimization) for AI-driven search",
    ],
    longDescription: `Search is changing. Google is still the biggest source of traffic for most businesses, but AI-powered tools like ChatGPT, Perplexity, and Google's AI Overviews are becoming a significant part of how people find information and make purchasing decisions. Your business needs to show up in both.

Traditional SEO — keywords, technical optimization, content strategy, backlinks — is still the foundation. We handle all of it: on-page optimization, site speed improvements, structured data markup, content planning, and link building. But we also go beyond traditional SEO into AEO (AI Engine Optimization), which focuses on making your content understandable and citable by AI systems.

AEO means structuring your content so AI models can extract clear, authoritative answers from your website. This includes implementing comprehensive structured data (JSON-LD), writing content that directly answers common questions in your industry, building topical authority through interconnected content, and ensuring your business information is consistent across every platform where AI systems source data.

We also handle content creation — blog posts, service pages, and social media content that serves both SEO and AEO goals. Every piece of content we create is designed to rank in traditional search results and be surfaced by AI answer engines.`,
    faq: [
      {
        question: "What is AEO (AI Engine Optimization)?",
        answer: "AEO is the practice of optimizing your online presence so AI systems like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and cite your business. It involves structured data, authoritative content, and consistent business information across platforms.",
      },
      {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term investment. Most businesses start seeing measurable improvements in 3–6 months, with significant results in 6–12 months. Technical SEO improvements like site speed and structured data can show impact faster, sometimes within weeks.",
      },
      {
        question: "Do you write blog content for SEO?",
        answer: "Yes. We create blog posts and service page content optimized for both search engines and AI systems. Every piece is written to answer real questions your customers are asking, structured for rich results, and linked to your broader content strategy.",
      },
    ],
  },
  {
    title: "Technical Platform Support",
    slug: "technical-platform-support",
    description:
      "Already using enterprise tools? We help you get more out of them. Setup, configuration, migration, and ongoing support.",
    icon: "lucide:server",
    items: [
      "ServiceTitan, ServiceNow, Microsoft 365",
      "Google Workspace, AWS, QuickBooks",
      "Setup, configuration, and migration",
    ],
    longDescription: `Enterprise software is powerful, but only if it's set up correctly and your team actually knows how to use it. Most businesses are paying for tools they're barely utilizing because nobody took the time to configure them properly.

We provide setup, configuration, migration, and ongoing support for platforms including ServiceTitan, ServiceNow, Microsoft 365, Google Workspace, AWS, QuickBooks, and more. Whether you're adopting a new platform, migrating from an old one, or just trying to get more value out of what you already have, we handle the technical side.

Our support goes beyond initial setup. We configure integrations between your platforms so data flows automatically instead of being entered manually. We set up proper user permissions, security policies, and backup systems. We train your team on the features that matter most for their daily work. And we provide ongoing support so you have someone to call when something breaks or when you want to add a new capability.

For businesses running field service operations, we specialize in ServiceTitan configuration — including custom reporting, automated dispatching rules, and integration with your accounting and marketing systems.`,
    faq: [
      {
        question: "Which platforms do you support?",
        answer: "We support ServiceTitan, ServiceNow, Microsoft 365, Google Workspace, AWS, QuickBooks, HubSpot, Salesforce, and many other business platforms. If you're using a tool that isn't listed, ask us — chances are we've worked with it or something similar.",
      },
      {
        question: "Can you migrate data from our old platform?",
        answer: "Yes. We handle full data migrations including cleaning, deduplication, and mapping fields between platforms. We ensure nothing is lost in the transition and verify data integrity after the migration is complete.",
      },
      {
        question: "Do you provide ongoing support after setup?",
        answer: "Yes. We offer ongoing support plans that include troubleshooting, configuration changes, user training, and integration maintenance. You have a dedicated point of contact who knows your setup and can resolve issues quickly.",
      },
    ],
  },
  {
    title: "Brand & Business Services",
    slug: "brand-business-services",
    description:
      "Your online presence matters. We help with brand design, business profiles, and making sure you look professional everywhere customers find you.",
    icon: "lucide:palette",
    items: [
      "Logo and visual identity design",
      "Google Business, Facebook, Yelp profile setup",
      "Business profile optimization",
    ],
    longDescription: `First impressions happen online. Before a potential customer ever calls you, they've already seen your logo, read your Google reviews, and formed an opinion about whether your business looks legitimate and professional.

We help businesses build a cohesive brand identity and professional online presence. This starts with visual identity — logo design, color palette, typography, and design guidelines that ensure your business looks consistent and polished across every touchpoint, from your website to your business cards to your social media profiles.

We also set up and optimize your business profiles on Google Business Profile, Facebook, Yelp, BBB, and industry-specific directories. These profiles are often the first thing people see when they search for your business, and an incomplete or inconsistent profile costs you credibility. We make sure your information is accurate, your photos are professional, your categories are correct, and your profiles are optimized to show up in local search results.

For businesses that already have a brand but want to refresh or modernize it, we handle rebranding projects that update your visual identity while maintaining the recognition you've already built.`,
    faq: [
      {
        question: "What does a brand package include?",
        answer: "A typical brand package includes a primary logo, logo variations (light/dark, icon-only), color palette, typography selection, and brand guidelines documenting how to use everything consistently. We can also include business card design, social media templates, and email signature design.",
      },
      {
        question: "How important is Google Business Profile for local businesses?",
        answer: "Extremely important. Your Google Business Profile is often the first thing potential customers see, and it directly affects whether you appear in Google Maps and local search results. An optimized profile with accurate information, professional photos, and regular updates significantly increases visibility and trust.",
      },
      {
        question: "Can you manage our social media profiles?",
        answer: "We focus on setting up, optimizing, and branding your profiles rather than ongoing social media management. We ensure your profiles are complete, consistent, and professional. For ongoing content creation and posting, we can recommend partners or set up tools that make it easier for your team to manage.",
      },
    ],
  },
  {
    title: "General Tech Support",
    slug: "general-tech-support",
    description:
      "Not every problem needs a whole project. Sometimes you just need someone to call. We handle day-to-day tech issues, updates, and general tech support for businesses that don't want to hire a full-time team.",
    icon: "lucide:headphones",
    items: [
      "Ongoing technical support",
      "Security updates and monitoring",
      "General tech management",
    ],
    longDescription: `Most small businesses don't need a full-time IT person, but they do need someone to call when things break. That's what this service is.

We provide ongoing technical support for businesses that want reliable tech help without the overhead of an in-house team. Whether it's a website that went down, an email that won't send, a computer that's running slow, or a software tool that's not working the way it should, we're the people you call.

Our support covers the full range of day-to-day tech needs: troubleshooting hardware and software issues, keeping your systems updated and secure, managing user accounts and permissions, setting up new equipment, and answering the "how do I do this?" questions that come up every week.

We also handle proactive maintenance — security updates, software patches, backup verification, and system monitoring — so problems get caught before they become emergencies. You get a dedicated support contact who knows your setup and can resolve issues quickly, without the hold times and ticket queues of generic tech support services.`,
    faq: [
      {
        question: "How quickly do you respond to support requests?",
        answer: "We aim to respond within 2 hours during business hours (Monday–Friday, 9am–5pm ET) for all support requests. Critical issues affecting business operations are prioritized and typically addressed within 30 minutes.",
      },
      {
        question: "Do you offer on-site support?",
        answer: "Yes, for businesses in the Pittsburgh area. Most issues can be resolved remotely, but when on-site work is needed, we're available. For clients outside Pittsburgh, we handle everything remotely with screen sharing and remote access tools.",
      },
      {
        question: "What does a support plan include?",
        answer: "Our support plans include a set number of support hours per month, proactive system monitoring and updates, security patch management, backup verification, and a dedicated support contact. Plans are flexible and scale with your needs.",
      },
    ],
  },
];
