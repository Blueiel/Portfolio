# Portfolio — Software Engineer Intern

A futuristic personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Local Setup

### 1. Install dependencies
npm install

### 2. Run dev server
npm run dev
# Open http://localhost:3000

### 3. Production build
npm run build && npm start

## Project Structure
app/
  globals.css       - Global styles & CSS variables
  layout.tsx        - Root layout
  page.tsx          - Main page
components/
  Navbar.tsx        - Sticky nav
  Hero.tsx          - Particle animation + intro
  About.tsx         - Bio + stats
  Skills.tsx        - Tech stack cards
  Experience.tsx    - Timeline
  Projects.tsx      - Project cards
  Contact.tsx       - Contact form
  Footer.tsx

## Customize
- Replace "Your Name" in Hero.tsx, About.tsx, Footer.tsx
- Update social links in Hero.tsx and Contact.tsx
- Add your experiences in Experience.tsx
- Add your projects in Projects.tsx
- Put resume.pdf in /public
- Put your photo in /public and update About.tsx

## Deployment (Recommended: Vercel)
Vercel is built by the Next.js team — zero config:
  npx vercel
Or push to GitHub and import at vercel.com/new.

### Netlify
Build command: npm run build
Publish dir: .next
Install @netlify/plugin-nextjs (auto-detected).

### Other options
- Cloudflare Pages (fast CDN, free)
- Railway (full-stack friendly)
- Render (easy GitHub integration)
