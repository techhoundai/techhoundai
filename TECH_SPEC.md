# TechHound.ai - Technical Specification

## Project Overview

**Product**: Marketing/SEO website for TechHound.ai, a premium tech/software/web agency based in Pittsburgh, PA serving clients nationally and internationally.

**Founders**: Klaus and Sam

**Goal**: Establish credibility, showcase services, attract leads, and serve as a living example of the quality TechHound delivers to its clients.

**Hosted on**: GitHub Pages at `techhound.ai` (custom domain)

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Astro** | Static site generator with markdown-based content collections for the blog. Excellent SEO defaults, fast builds, ships zero JS by default. |
| Styling | **Tailwind CSS** | Utility-first CSS for rapid, premium UI development. Easy dark/light mode via `class` strategy. |
| Deployment | **GitHub Pages** via **GitHub Actions** | Astro builds to static HTML. A GitHub Actions workflow builds on push to `main` and deploys to Pages. |
| Contact Form | **Web3Forms** | Free-tier form backend. No server needed. The API access key will be configured as a placeholder constant the site owner fills in. |
| Blog | **Astro Content Collections** | Blog posts are markdown files in `src/content/blog/`. Supports frontmatter metadata, images, and MDX if needed. Adding a new post = adding a `.md` file. |
| Icons | **Astro Icon** with a free icon set (e.g., Lucide or Heroicons) | Lightweight, tree-shaken SVG icons. |

---

## Brand Identity

### Color Palette (Pittsburgh Black & Gold)

Inspired by Pittsburgh's iconic black and gold. The palette must feel premium and professional, not sporty.

| Role | Light Mode | Dark Mode | Notes |
|------|-----------|-----------|-------|
| Primary (Gold) | `#C8A951` | `#D4B863` | Muted, refined gold. Not bright yellow. Used for CTAs, accents, highlights. |
| Primary Dark | `#A68A3E` | `#C8A951` | Hover states, active elements. |
| Background | `#FFFFFF` | `#0F0F0F` | Clean white / near-black. |
| Surface | `#F5F5F0` | `#1A1A1A` | Cards, sections with alternate backgrounds. |
| Text Primary | `#1A1A1A` | `#F0F0F0` | High contrast body text. |
| Text Secondary | `#4A4A4A` | `#A0A0A0` | Muted text, captions, descriptions. |
| Border | `#E0E0E0` | `#2A2A2A` | Subtle dividers and card borders. |

### Logo

Two logo variants are provided and must be swapped based on the active theme:
- `images/logo-dark.png` - Black dog + paper airplane silhouette (used on light backgrounds)
- `images/logo-light.png` - Light/white dog + dark paper airplane (used on dark backgrounds)

### Typography

Use a premium font pairing from Google Fonts:
- **Headings**: A serif or strong sans-serif font (e.g., `DM Serif Display`, `Playfair Display`, or `Inter` at heavy weight)
- **Body**: A clean sans-serif (e.g., `Inter`, `DM Sans`, or `Source Sans 3`)

The implementing agent should select a specific pairing that feels premium and human, not generic.

### Imagery

Available images in `images/`:
- `founders.jpg` - Klaus and Sam, selfie with Pittsburgh skyline in background. Use on the About page.
- `code.jpg` - Close-up of code on a screen. Use as a hero/background or section accent.
- `computer.jpg` - Moody laptop keyboard shot. Use as a hero/background or section accent.
- `pitt.png` - Pittsburgh skyline with digital network overlay. Use on homepage or About page for a "Pittsburgh roots, digital future" vibe.
- `completehomecomfort1.png` - Screenshot of the Complete Home Comfort PGH homepage (hero section). Use as the primary portfolio card preview image.
- `completehomecomfort2.png` - Screenshot of the Complete Home Comfort PGH project gallery page. Use as a secondary image on the portfolio page or in a detail view.
- `bothound1.png` - Screenshot of BotHound's bot builder / Property Tracker bot (dark UI, shows bot tasks, stages, and run history). Use as the primary portfolio card preview image for BotHound and on the `/bothound` page.
- `bothound2.png` - Screenshot of a BotHound completed bot run detail view (shows run summary, config, and task outputs). Use as a secondary image on the `/bothound` page.

---

## Site Architecture

**Multi-page site** with the following page structure:

```
/                     → Homepage
/about                → About Us
/services             → Services Overview
/portfolio            → Portfolio / Our Work
/blog                 → Blog Index
/blog/[slug]          → Individual Blog Posts
/bothound             → BotHound Product Page
/contact              → Contact Us
/process              → Our Process
```

### Global Layout

Every page shares:
- **Header/Navbar**: Sticky top navigation with logo (theme-aware), nav links to all pages, dark/light mode toggle, and a prominent "Schedule a Consultation" CTA button linking to `/contact`.
- **Footer**: Company info, nav links, social links, contact info (phone, email, address), copyright notice.
- **Mobile**: Hamburger menu for navigation on smaller screens. All pages must be fully responsive.

---

## Page Specifications

### 1. Homepage (`/`)

The homepage is the primary landing page and should make an immediate premium impression.

**Sections (in order):**

1. **Hero Section**
   - Large headline communicating TechHound's value proposition (something along the lines of: premium software and web services at prices that reflect the modern landscape).
   - Subheadline reinforcing the Pittsburgh-based, nationally-serving angle.
   - "Schedule a Consultation" CTA button.
   - Background: use `pitt.png` or `computer.jpg` with a dark overlay, or a clean split layout.

2. **Services Overview**
   - Brief grid/card layout previewing the core service categories (Web Dev, Mobile, Automations, SEO/AEO, Tech Services).
   - Each card links to the full `/services` page.

3. **Why TechHound (Differentiator)**
   - Highlight the core differentiator: AI has fundamentally changed how software gets built. Other agencies still charge legacy prices. TechHound's pricing reflects the actual effort needed today, with no drop in quality.
   - Keep this punchy and visual (icons, short paragraphs). Avoid em-dashes and AI-sounding phrasing.

4. **BotHound Teaser**
   - Brief section introducing BotHound as a TechHound product.
   - CTA linking to `/bothound`.

5. **Client Testimonials Highlight**
   - Pull 1-2 featured testimonials from the portfolio data (see Portfolio page spec below). These are the same testimonials, not duplicated content.
   - Show the client quote, client name, and a link to the associated project on `/portfolio`.

6. **CTA Banner**
   - Full-width banner with "Schedule a Consultation" CTA before the footer.

---

### 2. About Page (`/about`)

**Sections:**

1. **Founders Section**
   - Photo of Klaus and Sam (`founders.jpg`).
   - Bio for Klaus: graduated from the University of Pittsburgh with a degree in computer engineering. Career history at Lubrizol (Fortune 500), federal agencies (FDIC, TVA, DOT) as a software engineer building software and automations. Currently a software engineer at DraftKings. Wide range of experience taking complex technical projects to completion.
   - Brief mention of Sam and her role/involvement (the implementing agent should leave this as a placeholder or brief mention unless more detail is provided).

2. **Our Story / Mission**
   - Why TechHound exists: the agency model is broken. AI has made software dramatically cheaper and faster to build, but agencies haven't lowered their prices. TechHound was built to change that.
   - Pittsburgh roots, national/international reach.

3. **Pittsburgh Connection**
   - Use `pitt.png` image. Emphasize local pride and community.

**Writing style note**: The About page copy must sound human-written. Short, direct sentences. No em-dashes. Conversational but professional. A real person telling their story, not a marketing template.

---

### 3. Services Page (`/services`)

Display all services in a well-organized layout (cards, sections with icons, or an accordion). Each service should have a clear title, short description, and relevant icon.

**Service Categories:**

1. **Web Development**
   - Website creation (design + development)
   - Ongoing website maintenance and updates
   - Static vs. dynamic sites (include brief educational content explaining the difference, since TechHound values educating clients)

2. **Mobile App Development**
   - Mobile app creation (iOS and/or Android)
   - Ongoing mobile app maintenance

3. **Custom Business Automations**
   - Custom workflow automations tailored to the client's business processes
   - Integration between existing tools and platforms

4. **SEO & AEO (Search + AI Engine Optimization)**
   - Traditional SEO strategies (keyword optimization, technical SEO, backlinking)
   - Content generation (blogs, social media content)
   - AEO (AI Engine Optimization): optimizing for AI-driven search (ChatGPT, Claude, Perplexity, etc.) where users increasingly get answers from AI instead of traditional search engines. Include a brief explanation of what AEO is and why it matters.

5. **Technical Platform Support**
   - ServiceTitan, ServiceNow, Microsoft 365, Google Workspace, AWS, QuickBooks, and other enterprise platforms
   - Setup, configuration, migration, and ongoing support

6. **General Technology & Brand Services**
   - Brand design (logos, visual identity)
   - Business profile setup and optimization (Google Business, Facebook, Yelp, etc.)

**Pricing Note Section:**
Include a callout/card at the bottom of the Services page with pricing context:
- Simple static websites start at $2,000
- Include a brief, educational explanation of static vs. dynamic websites (static = fixed content like a marketing site, loads fast, low maintenance; dynamic = user accounts, databases, real-time content, more complex)
- Automations and custom maintenance plans are priced per engagement based on scope
- CTA: "Schedule a Consultation" to discuss your specific needs

---

### 4. Portfolio Page (`/portfolio`)

Showcase completed work and client testimonials together. Start with the two existing projects, with room to add more.

**Projects to display:**

1. **Complete Home Comfort PGH**
   - Link: `completehomecomfortpgh.com`
   - Description: Pittsburgh's trusted HVAC experts. Website built by TechHound featuring service pages, free estimate flow, project gallery, and a professional dark-themed design.
   - Preview images: `completehomecomfort1.png` (homepage hero) and `completehomecomfort2.png` (project gallery page).

2. **BotHound**
   - Link: `bothound.ai`
   - Brief description: AI-powered automation platform built by TechHound to help small businesses adopt AI into their workflows. Features a bot builder with multi-stage task pipelines, scheduled runs, and detailed run history.
   - Preview images: `bothound1.png` (bot builder UI with tasks and run history) and `bothound2.png` (completed run detail view).

**Layout**: Card-based grid with hover effects. Each card shows a preview image, project name, brief description, tech tags, and a "View Site" link.

**Client Testimonials Section** (on this same page, below the project cards):
- Display client reviews/testimonials associated with portfolio projects.
- Each testimonial should include: the client's quote, their name, their business/company name, and optionally which project it relates to.
- Testimonials should be stored in the portfolio data file (`src/data/portfolio.ts`) alongside or linked to their project entries, so they're easy to add and manage.
- Mark 1-2 testimonials as `featured: true` so the homepage can pull them for the highlight section without duplicating content.

**Structure should make it easy to add new portfolio items and testimonials** (a data file where the agent can add entries).

---

### 5. Blog (`/blog`)

**Implementation**: Astro Content Collections with markdown files.

**Blog Index Page** (`/blog`):
- Grid or list of blog post cards showing: featured image, title, date, short excerpt, reading time, and tags/categories.
- Sorted by date (newest first).
- Consider pagination if posts exceed ~10 (can be added later).

**Individual Blog Post** (`/blog/[slug]`):
- Full article layout with proper typography (readable line width, good spacing).
- Featured image at top.
- Author, date, reading time metadata.
- Social sharing links (optional, can be added later).

**Blog post frontmatter schema:**
```yaml
---
title: "Post Title"
description: "SEO meta description for the post."
date: 2026-06-25
author: "Klaus"
image: "./featured-image.jpg"
tags: ["web-development", "seo"]
draft: false
---
```

**Starter content**: Include 1-2 placeholder blog posts so the blog section isn't empty at launch. Topics could relate to TechHound's differentiators (e.g., "Why Software Doesn't Have to Cost What It Used To" or "What is AEO and Why Your Business Needs It").

---

### 6. BotHound Page (`/bothound`)

A dedicated product page for BotHound, TechHound's own AI product.

**Content:**
- What BotHound is: an AI-powered platform developed by TechHound to help small businesses adopt AI into their daily workflows.
- Key value proposition: making AI accessible and practical for businesses that don't have technical teams.
- CTA: "Learn More" or "Try BotHound" linking to `https://bothound.ai`.
- Reinforce that BotHound is built by TechHound, demonstrating TechHound's own product development capability.

**Design**: This should feel like a mini product landing page within the TechHound site. Use visuals and a clean, focused layout.

---

### 7. Contact Page (`/contact`)

**Contact Form** (powered by Web3Forms):
- Fields: Name, Email, Phone (optional), Company/Business Name (optional), Service Interest (dropdown: Web Development, Mobile App, Automations, SEO/AEO, Other), Message.
- Submit button: "Send Message"
- Success/error states after submission.
- The Web3Forms access key should be stored in a clearly marked config constant so it's easy to swap in.

**Contact Information** (displayed alongside or below the form):
- Phone: 412-310-5020
- Email: contact@techhound.ai
- Address: 1857 Arlington Ave, Pittsburgh, PA 15210

**Embedded Map** (optional): A static Google Maps embed or image showing the Pittsburgh location. If using an embed, the API key should be a replaceable config constant.

**Social Links**: Link to TechHound's social profiles. The implementing agent should include placeholder links with icons for common platforms (LinkedIn, Facebook, Instagram, X/Twitter) that can be updated with real URLs later.

---

### 8. Our Process Page (`/process`)

A simple, visual walkthrough of TechHound's engagement process.

**Steps:**

1. **Discovery Call** - We learn about your business, goals, and technical needs. Free, no obligation.
2. **Requirements & Proposal** - We collaborate on detailed requirements and deliver a clear proposal outlining scope, timeline, and cost.
3. **Agreement** - We settle on a price and timeline that works for both sides.
4. **Build & Deliver** - We build your solution, keeping you in the loop with regular updates.
5. **Launch & Support** - We launch your project and provide ongoing support as needed.

**Design**: A vertical timeline or numbered step layout with icons. Keep it clean and simple. This process will evolve as the business grows, so make it easy to edit (the steps could live in a data file or be clearly structured in the component).

---

## Non-Functional Requirements

### SEO

- Every page must have unique `<title>` and `<meta name="description">` tags.
- Implement Open Graph and Twitter Card meta tags for social sharing.
- Generate a `sitemap.xml` (Astro has a built-in integration for this: `@astrojs/sitemap`).
- Generate a `robots.txt` allowing all crawlers.
- Use semantic HTML throughout (`<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<h1>`-`<h6>` hierarchy).
- All images must have descriptive `alt` text.
- Implement structured data (JSON-LD) for:
  - `Organization` (TechHound business info)
  - `LocalBusiness` (address, phone, service area)
  - `BlogPosting` (on individual blog posts)
- Canonical URLs on every page.
- The site's base URL for sitemap and canonical tags is `https://techhound.ai`.

### Dark / Light Mode

- Implement using Tailwind's `class` strategy (add/remove `dark` class on `<html>`).
- Default to the user's system preference (`prefers-color-scheme`).
- Provide a toggle button in the navbar (sun/moon icon).
- Persist the user's choice in `localStorage` so it survives page navigations and return visits.
- Swap the logo variant (`logo-dark.png` / `logo-light.png`) based on the active theme.
- All colors, backgrounds, and text must be legible and intentional in both modes. Do not just invert colors.

### Performance

- Target a Lighthouse performance score of 90+.
- Optimize all images (use Astro's built-in `<Image>` component for automatic format conversion and responsive sizing).
- Minimize JavaScript. Astro ships zero JS by default; only add client-side JS for: dark mode toggle, mobile menu toggle, contact form submission, and any scroll animations.
- Use `loading="lazy"` for below-the-fold images.

### Responsive Design

- Mobile-first approach.
- Breakpoints: mobile (default), `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- Test that all pages look good at: 375px (phone), 768px (tablet), 1280px (desktop), 1920px (large desktop).
- Navigation collapses to a hamburger menu on mobile.

### Writing Style

This is critical. All copy on the site must:
- Sound like a real person wrote it, not AI.
- **Never use em-dashes (—)**. Use periods or commas instead.
- Avoid filler words and generic marketing speak ("leverage", "synergy", "cutting-edge", "revolutionize").
- Be conversational but professional.
- Use active voice.
- Avoid long compound sentences.

---

## Deployment & Infrastructure

### GitHub Pages Setup

1. **GitHub Actions Workflow**: Create `.github/workflows/deploy.yml` that:
   - Triggers on push to `main`
   - Installs Node.js and dependencies
   - Runs `astro build`
   - Deploys the `dist/` output to GitHub Pages

2. **Custom Domain**: Create a `public/CNAME` file containing:
   ```
   techhound.ai
   ```
   The site owner will configure DNS (A records and/or CNAME) separately.

3. **Astro Config**: Set `site: 'https://techhound.ai'` in `astro.config.mjs`.

### Project Structure

```
techhoundai/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                   # Custom domain for GitHub Pages
│   ├── favicon.ico             # Favicon (generate from logo)
│   └── images/                 # Static images (moved from root)
│       ├── code.jpg
│       ├── computer.jpg
│       ├── founders.jpg
│       ├── logo-dark.png
│       ├── logo-light.png
│       └── pitt.png
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── MobileMenu.astro
│   │   ├── ContactForm.astro
│   │   ├── ServiceCard.astro
│   │   ├── PortfolioCard.astro
│   │   ├── BlogCard.astro
│   │   ├── ProcessStep.astro
│   │   ├── Hero.astro
│   │   ├── CTABanner.astro
│   │   └── SEO.astro           # Reusable meta tag component
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── blog/               # Blog posts (markdown)
│   │       └── placeholder-post.md
│   ├── data/
│   │   ├── services.ts         # Service definitions (easy to edit)
│   │   ├── portfolio.ts        # Portfolio items + testimonials (easy to add)
│   │   └── process.ts          # Process steps (easy to edit)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Global layout (head, header, footer)
│   │   └── BlogPost.astro      # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   ├── services.astro      # Services page
│   │   ├── portfolio.astro     # Portfolio page
│   │   ├── bothound.astro      # BotHound product page
│   │   ├── contact.astro       # Contact page
│   │   ├── process.astro       # Our Process page
│   │   └── blog/
│   │       ├── index.astro     # Blog index
│   │       └── [...slug].astro # Dynamic blog post pages
│   └── styles/
│       └── global.css          # Tailwind directives + custom styles
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── TECH_SPEC.md
```

---

## Configuration Constants

The following values should be defined in a central config file (e.g., `src/data/siteConfig.ts`) so they're easy to update:

```typescript
export const siteConfig = {
  name: "TechHound",
  tagline: "Premium Tech Services, Honest Pricing",
  url: "https://techhound.ai",
  email: "contact@techhound.ai",
  phone: "412-310-5020",
  address: {
    street: "1857 Arlington Ave",
    city: "Pittsburgh",
    state: "PA",
    zip: "15210",
  },
  socials: {
    linkedin: "",   // TODO: add real URL
    facebook: "",   // TODO: add real URL
    instagram: "",  // TODO: add real URL
    twitter: "",    // TODO: add real URL
  },
  web3formsKey: "1e79c3e9-3c01-4356-8904-f18aa3b531a1",
};
```

---

## Implementation Notes for the Agent

1. **Writing copy**: All website copy must sound human-written. No em-dashes. No AI patterns. When in doubt, write like you're explaining something to a friend who isn't technical.

2. **Images**: Move the existing `images/` folder contents into `public/images/` so they're served as static assets. Use Astro's `<Image>` component where possible for optimization.

3. **Blog ease-of-use**: Adding a new blog post should be as simple as creating a new `.md` file in `src/content/blog/` with the correct frontmatter. No code changes needed.

4. **Portfolio ease-of-use**: Adding a new portfolio item should mean adding an entry to the data file and dropping a screenshot image into the images folder.

5. **Web3Forms**: Use the standard Web3Forms HTML form pattern with `fetch` for AJAX submission. Show success/error messages inline. The access key goes in the config file.

6. **Accessibility**: Use proper heading hierarchy, alt text, focus states, keyboard navigation, and sufficient color contrast in both themes.

7. **Placeholder content**: For sections where real content isn't available yet (testimonials, social links, some portfolio descriptions), use realistic placeholder content and mark it with a comment like `<!-- TODO: Replace with real content -->` so it's easy to find and update.

8. **Animations**: Subtle, tasteful animations only. Consider: fade-in on scroll for sections, smooth hover transitions on cards and buttons. Nothing flashy or distracting. The site should feel polished, not animated.

9. **Favicon**: Generate a simple favicon from the logo (the dog silhouette). A 32x32 and 180x180 (Apple touch icon) should suffice.

10. **404 page**: Include a custom 404 page that matches the site design and links back to the homepage.
