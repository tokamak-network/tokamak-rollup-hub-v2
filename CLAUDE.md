# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # ESLint check
```

No test suite is configured.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript 5**
- **Chakra UI v3** for components and responsive layout
- **Three.js** via react-three/fiber for the 3D solar system animation
- **next-themes** for dark mode

## Architecture

This is a **static marketing/informational site** for Tokamak Network's L2 rollup solutions. All content is hardcoded — no API calls, no backend.

### Path Alias

`@/*` maps to `./src/*`

### Directory Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── page.tsx        # Landing page
│   └── discover/       # /discover and /discover/[slug] routes
├── components/         # Reusable UI components
│   ├── solar/          # Three.js 3D solar system (Planet, Satellite, Ellipse)
│   ├── layout/         # Header, Footer, UpArrow
│   └── ui/             # Chakra UI customizations
├── containers/         # Page-level sections (compose components into views)
├── consts/             # All static data: products, URLs, texts, menu items
├── types/              # TypeScript interfaces
├── hooks/              # Custom hooks (breakpoint detection)
└── assets/             # Images, SVG icons, logos, global CSS
```

### Key Data Files

- `src/consts/components.ts` — product categories and sub-products (main content data)
- `src/consts/urls.ts` — all external URLs
- `src/consts/texts.ts` — page copy/text content
- `src/consts/solar.ts` — 3D solar system configuration

### Custom Breakpoints (theme.ts)

| Name | Width  |
|------|--------|
| sm   | 375px  |
| md   | 800px  |
| lg   | 1200px |
| xl   | 1680px |
| 2xl  | 1920px |

### Routing

- `/` — Landing page with hero, 3D solar animation, feature details
- `/discover` — Product listing page; `?category=all|stack|integration` query param for filtering
- `/discover/[slug]` — Individual product detail pages
