# Shyam Sivadasan Nair — Personal Developer Portfolio

> **"Turning Curiosity Into Code. Turning Ideas Into Reality."**  
> *Building Digital Experiences, Exploring Technology and Engineering What's Next.*

A personal developer portfolio for **Shyam Sivadasan Nair**, Second-Year Computer Science Engineering undergraduate student, aspiring software engineer, and technology enthusiast.

---

## 🚀 Key Highlights & Architectural Features

- **Futuristic Dark Visual Identity**: Designed with `#070812` background, Electric Violet, Neon Cyan, and Soft Blue accents with fine technical grid and glassmorphism.
- **Interactive Experience Suite**:
  - **Custom Desktop Cursor**: Trailing glowing cursor with magnetic touch-device fallback.
  - **Dynamic Background FX**: Subtle ambient light orbs and canvas particle mesh with nearby distance linking.
  - **Interactive Technology Constellation**: Physics-modeled celestial node cluster with hover HUD inspection.
  - **Functional Workstation CLI**: In-browser terminal supporting `whoami`, `about`, `skills`, `projects`, `contact`, `help`, and `clear`.
  - **Scroll Spy Navigation**: Floating glassmorphic navbar with active section detection and smooth scrolling.
- **Strictly Curated Projects**:
  1. **L'Horizon Azure | Resort Management & Systems** (Spotlight Flagship): Full-stack luxury hospitality platform with dual-surface Guest Portal and Owner/Staff Operations Suite.
  2. **Campus Eats**: Real-time university cafeteria web ordering system with Socket.IO prep tracking and MySQL.
  3. **FDR MITRA**: SIH 2026 problem-statement initiative for Fixed Deposit Receipt and security deposit automation (In Development).
- **Centralized Data Layer**: Zero hardcoded strings in components; all records live in clean, type-safe data files in `src/data/`.
- **Accessible & Responsive**: Fully responsive from mobile devices (Android/iOS) to 4K displays with reduced-motion mode support.
- **Production-Ready Contact Gateway**: Honeypot spam protection, client-side & server-side validation, and optional Formspree webhook forwarding.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with custom glassmorphism layers |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **SEO & Standards** | Open Graph, Twitter Cards, JSON-LD Person schema, robots.ts, sitemap.ts |
| **Deployment Target** | [Vercel](https://vercel.com/) |

---

## 📂 Project Directory Structure

```
shyam-developer-portfolio/
├── public/
│   ├── favicon.svg                # Futuristic SN monogram favicon
│   ├── resume.pdf                 # PDF download asset
│   └── images/
│       ├── profile.svg            # Profile frame fallback / avatar placeholder
│       └── projects/
│           ├── campus-eats/       # Cover & architecture diagrams
│           ├── l-horizon-azure/   # Cover & dashboard mockups
│           └── fdr-mitra/         # Cover & ledger mockups
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact submission & validation API
│   │   ├── globals.css            # Futuristic themes, scrollbar & glass layers
│   │   ├── layout.tsx             # Root layout with SEO metadata & JSON-LD
│   │   ├── page.tsx               # Assembled single-page application
│   │   ├── robots.ts              # Search engine crawler permissions
│   │   └── sitemap.ts             # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── About.tsx              # "Beyond the Code", 4 info cards & terminal
│   │   ├── Achievements.tsx       # Milestones, hackathons & category filter
│   │   ├── BackgroundEffects.tsx  # Particle canvas & ambient glowing lights
│   │   ├── Contact.tsx            # Transmit message form & direct channels
│   │   ├── CustomCursor.tsx       # Glowing trailing follower (desktop only)
│   │   ├── Footer.tsx             # Futuristic footer with navigation & copyright
│   │   ├── Hero.tsx               # Cinematic hero with status badge & 3 CTAs
│   │   ├── Journey.tsx            # Chronological vertical engineering timeline
│   │   ├── Navbar.tsx             # Floating glassmorphism navbar + mobile drawer
│   │   ├── ProjectCard.tsx        # Responsive project cards with spotlight
│   │   ├── ProjectModal.tsx       # Deep-dive modal with architecture & features
│   │   ├── Projects.tsx           # Projects showcase & category filtering
│   │   ├── Resume.tsx             # "My Professional Profile" hub & PDF trigger
│   │   ├── ScrollProgress.tsx     # Top progress bar & back-to-top button
│   │   ├── Skills.tsx             # Technical arsenal cards & category filter
│   │   ├── TechnologyUniverse.tsx # Interactive constellation canvas
│   │   └── Terminal.tsx           # Interactive developer CLI REPL
│   ├── data/
│   │   ├── achievements.ts        # Hackathons, certs & competitions
│   │   ├── education.ts           # Timeline stages & curriculum highlights
│   │   ├── profile.ts             # Bio, name, roles, taglines & info cards
│   │   ├── projects.ts            # Project cards, URLs, descriptions & specs
│   │   ├── skills.ts              # Categorized programming, tools & frameworks
│   │   └── socialLinks.ts         # Coordinates, email, GitHub & LinkedIn
│   └── lib/
│       └── utils.ts               # Tailwind class merger utility (cn)
├── tailwind.config.ts             # Custom palette: #070812, Electric Violet, Neon Cyan
└── tsconfig.json                  # Strict TypeScript configuration
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 How to Personalize Your Information

All website content is intentionally isolated in `src/data/`:

1. **Profile Picture**:
   - Place your portrait photo at `public/images/profile.jpg`.
   - Update `profileImage` in `src/data/profile.ts` to `"/images/profile.jpg"`.
2. **Resume PDF**:
   - Place your PDF at `public/resume.pdf`.
3. **Projects**:
   - Edit or add projects in `src/data/projects.ts`.
4. **Skills & Arsenal**:
   - Add/edit languages and tools in `src/data/skills.ts`.
5. **Contact Form Gateway**:
   - To route contact messages directly to Formspree, set the environment variable:
     ```env
     FORMSPREE_ID=your_form_id
     ```
     in `.env.local` or your Vercel project dashboard.

---

## 🚢 Deployment to Vercel

This repository is optimized for one-click deployment on **Vercel**:

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial release: Shyam Sivadasan Nair Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shyam-portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. The Next.js framework preset will be auto-detected. Click **Deploy**.

---

*Designed and engineered with pride for Shyam Sivadasan Nair.*
