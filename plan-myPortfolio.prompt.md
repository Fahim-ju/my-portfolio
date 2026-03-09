# Plan: Modern Developer Portfolio (my-portfolio)

## Overview
Build a new React + Vite + TypeScript single-page portfolio website at `d:\Fahim\Personal Projects\my-portfolio\`.
Single-page with smooth-scroll section navigation. No backend — contact form uses Formspree.
Color scheme decided during implementation. Placeholder profile content.

## Decisions
- Location: new `my-portfolio/` alongside existing projects (NOT replacing Portfolio/)
- Contact form: Formspree (client-side POST, no backend)
- Color scheme: Chosen during implementation (prefer dark + modern developer palette)
- Profile content: Placeholder data from project plan examples

## Dependencies
Core: react@19, react-dom@19, typescript, vite@7, @vitejs/plugin-react
Styling: tailwindcss@4, postcss, autoprefixer
Animations: framer-motion
Icons: react-icons
Dev: @types/react, @types/react-dom, eslint

Optional: NO react-router-dom (single scroll page, anchor links only)

## Project Structure
```
my-portfolio/
├── public/
│   └── assets/                  # images, profile photo placeholder
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Fixed sticky, smooth-scroll links, hamburger
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Name, title, CTA buttons, social icons
│   │   │   ├── About.tsx         # Bio card, profile image placeholder
│   │   │   ├── Skills.tsx        # Category grid: Frontend/Backend/Cloud/Tools
│   │   │   ├── Projects.tsx      # Card grid with hover effects
│   │   │   ├── Experience.tsx    # Timeline component
│   │   │   └── Contact.tsx       # Form + social links (Formspree)
│   │   └── ui/
│   │       ├── SectionTitle.tsx  # Reusable heading with accent line
│   │       ├── ProjectCard.tsx   # Card: name, desc, stack, GitHub/demo links
│   │       ├── SkillBadge.tsx    # Single tech pill with icon
│   │       └── Button.tsx        # Primary/ghost variants
│   ├── data/
│   │   ├── projects.ts           # Project list (typed)
│   │   ├── skills.ts             # Skills by category
│   │   └── experience.ts         # Work timeline data
│   ├── hooks/
│   │   └── useSectionInView.ts   # IntersectionObserver for fade-in animations
│   ├── types/
│   │   └── index.ts              # Shared interfaces: Project, Skill, ExperienceItem
│   ├── styles/
│   │   └── globals.css           # Tailwind directives + base styles + smooth scroll
│   ├── App.tsx                   # Root: Navbar + all sections + Footer
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

## Phases

### Phase 1 — Scaffold & Config
1. Run `npm create vite@latest my-portfolio -- --template react-ts` in workspace root
2. Install dependencies: tailwindcss, framer-motion, react-icons
3. Configure Tailwind (tailwind.config.js, globals.css with @tailwind directives)
4. Set up `vite.config.ts` (base path "/")
5. Create folder structure: components/layout, components/sections, components/ui, data, hooks, types

### Phase 2 — Types & Data Layer (parallel with Phase 3 start)
6. Define TypeScript interfaces in `types/index.ts` (Project, Skill, SkillCategory, ExperienceItem)
7. Populate `data/projects.ts` — 3 placeholder projects (Salary Manager, Wildlife ML, AWS Email Pipeline)
8. Populate `data/skills.ts` — 4 categories with example skills
9. Populate `data/experience.ts` — placeholder timeline entries

### Phase 3 — UI Components
10. `components/ui/Button.tsx` — primary + ghost variants, hover/press animations
11. `components/ui/SectionTitle.tsx` — heading + accent underline
12. `components/ui/ProjectCard.tsx` — card with hover raise, tech stack badges, GitHub/Live links
13. `components/ui/SkillBadge.tsx` — pill with react-icons icon + label
14. `hooks/useSectionInView.ts` — IntersectionObserver returning ref + inView bool

### Phase 4 — Layout
15. `components/layout/Navbar.tsx` — fixed top, brand logo, nav links (smooth scroll via anchor), hamburger for mobile, active section highlight
16. `components/layout/Footer.tsx` — copyright, social links

### Phase 5 — Section Components
Steps 17-22 are independent, can be built in parallel:
17. `sections/Hero.tsx` — Framer Motion entrance animation, gradient/dark background, name, title, tagline, two CTA buttons, GitHub/LinkedIn/Email icons
18. `sections/About.tsx` — Two-column card: profile image placeholder (left) + bio text (right), fade-in on scroll
19. `sections/Skills.tsx` — 4 category cards, each with SkillBadge grid, stagger animation
20. `sections/Projects.tsx` — Responsive grid of ProjectCard, stagger entrance
21. `sections/Experience.tsx` — Vertical timeline with alternating left/right entries (mobile: single column)
22. `sections/Contact.tsx` — Two columns: social links (left) + Formspree form (right), client-side validation (required fields, email regex)

### Phase 6 — Assembly & Global Styles
23. `App.tsx` — assemble Navbar + all 6 sections + Footer in order
24. `globals.css` — smooth scroll, scrollbar styling, base font, section padding
25. Choose and apply color palette (dark background, accent color, typography scale)

### Phase 7 — Polish & Responsive
26. Test mobile breakpoints (sm/md/lg) for all sections
27. Navbar hamburger menu functionality
28. Framer Motion: `AnimatePresence` for page entrance, `useInView` variants for each section
29. Hover micro-interactions on cards and buttons
30. `index.html` — update title, meta description, favicon

## Key Files to Reference
- `d:\Fahim\Personal Projects\GameHub\src\App.tsx` — router + layout pattern
- `d:\Fahim\Personal Projects\GameHub\src\component\Navbar.tsx` — Tailwind navbar pattern
- `d:\Fahim\Personal Projects\GameHub\vite.config.ts` — Vite + Tailwind config pattern
- `d:\Fahim\Personal Projects\Portfolio\src\components\Projects\ProjectCards.js` — existing project card logic to port

## Verification
1. `npm run dev` — dev server runs without errors
2. `npm run build` — production build succeeds with no TS errors
3. All 6 sections visible and correctly styled on desktop (1440px)
4. Mobile layout correct at 375px (hamburger menu, stacked sections)
5. Navbar smooth-scroll to each section works
6. Contact form submits via Formspree (test with a real submission)
7. Framer Motion animations trigger on scroll for each section
8. No TypeScript errors (`tsc --noEmit`)
9. Lighthouse score — target 90+ performance, 100 accessibility

## Scope Exclusions
- No routing (react-router-dom) — single page with anchor scroll
- No dark/light mode toggle (dark-only design)
- No resume PDF viewer (can add later)
- No GitHub stats widget (keep minimal)
- No backend
