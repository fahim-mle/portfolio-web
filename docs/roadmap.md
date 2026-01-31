# Portfolio Improvement Roadmap

## 1. Content
- [ ] **Case Studies:** Convert project links into internal case study pages (`/projects/[slug]`) for at least one "Star" project (e.g., Federated Learning). Show problem, solution, architecture diagram, and results.
- [ ] **Blog Polish:** Write one "flagship" post that demonstrates the "Systems & Signals" philosophy (e.g., "Why I moved from Full-Stack to ML Security").
- [ ] **Interactive Resume (In Progress):** Create a `/resume` page that tells a "Journey" story (interactive slides/timeline) rather than just a list. Include a toggle/link for a "Plain/Printable" version.
- [ ] **Tech Stack Grid:** Visually showcase the "SE + DS" dual skills (icons/grid) in the About or a dedicated section.

## 2. View / UI-UX
- [ ] **Project Images:** Add screenshots/diagrams to Project cards. (Currently text-only).
- [ ] **Blog Redesign:**
    - Add "Reading Time" estimate.
    - Add "Tags/Categories" to filter posts.
    - Improve the "Blog Index" layout (Featured post at top + grid for others).
- [ ] **Animations:** Add subtle entry animations for elements (using Framer Motion or Tailwind Animate) to feel more "alive" without being dizzying.
- [ ] **Mobile Polish:** Audit padding and font sizes on mobile screens (ensure "mindinroot" brand is readable).
- [ ] **Accessibility (a11y):** Ensure contrast ratios are met (especially teal on cream) and all interactive elements have focus states.

## 3. SEO & Optimization
- [ ] **Metadata:** Add `openGraph` (OG) and `twitter` tags to `layout.tsx` so links look good on social media.
- [ ] **Sitemap & Robots:** Generate `sitemap.xml` and `robots.txt` automatically.
- [ ] **JSON-LD:** Add structured data (Person, WebSite) for Google Rich Results.
- [ ] **Dynamic OG Images:** Generate social cards automatically using `next/og` (Title + branding on a card).
- [ ] **Performance:** Run Lighthouse/PageSpeed audit and optimize (images, font loading).
