# Sameeh K — Portfolio

Single-page portfolio built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion. Dark theme with a liquid-glass look, responsive from phone to desktop.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run start    # serve the production build
npm run lint
```

## Editing content

All copy lives in `src/data`. Nothing in the components is hard-coded, so updating the resume means editing these files only:

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | Name, roles, intro, contact details, links, the three "pillar" cards, and the hero visual (`pipeline` steps, `stack` ticker, `timeZone`) |
| `src/data/experience.ts` | Work history (bullets, stack chips, dates) |
| `src/data/projects.ts` | Projects. Set `link` on a project to show a "View project" link |
| `src/data/skills.ts` | Skill groups and their icons |
| `src/data/education.ts` | Education, certifications, organizations |
| `src/config/site.ts` | Navbar items and section ids |

## Structure

```
src/
  app/
    layout.tsx            root layout, fonts, metadata
    page.tsx              composes the sections in order
    globals.css           theme tokens, glass utilities, base styles
    icon.svg              favicon
  components/
    layout/               navbar, ambient background, footer
    sections/             hero (+ hero-visual bento), about, skills, experience, projects, education, contact
    ui/                   glass card, buttons, chips, reveal animation, section heading, icons
  config/site.ts          navigation config
  data/                   all portfolio content
  lib/                    cn() helper, active-section hook
```

## Design notes

- Glass surfaces are the `glass`, `glass-dense` and `glass-chip` utilities in `globals.css`. On Chromium the backdrop is refracted through the SVG filter in `liquid-glass-filter.tsx` (displacement map in `src/lib/lens-map.ts`); other browsers get a plain blur with the same specular rim.
- Scroll reveals use the `Reveal` component (Motion `whileInView`, runs once).
- `prefers-reduced-motion` disables the drifting background, tilt and reveals.
- The site is fully static: `next build` prerenders the one route.
# sameeh-portfolio
