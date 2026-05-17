# Noorrix Motors — CLAUDE.md

## Project Overview

UK-based automotive dealership marketing site built with React 18 (Create React App). It showcases vehicles, services (dents & paints, delivery, finance), and provides an interactive browsing experience. The site is static/hardcoded — no backend or API integration.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18.2.0 (Create React App) |
| Routing | React Router DOM v7.15.0 |
| Styling | Tailwind CSS v3.4.1 + per-component custom CSS |
| Icons | react-icons v5.6.0 |
| Carousels | Swiper v12.1.4 |
| Build | react-scripts 5.0.1 |
| CSS pipeline | PostCSS + Autoprefixer |

**Unused dependency (do not use):** `react-owl-carousel` — imported in package.json but never used anywhere; treat it as dead.

## Dev Commands

```bash
npm start       # dev server on http://localhost:3000
npm run build   # production build
npm test        # Jest tests
```

## Project Structure

```
src/
├── App.js                  # BrowserRouter + Routes (5 active routes)
├── index.js                # React DOM entry point
├── index.css               # Tailwind @tailwind directives
├── styles/
│   └── global.css          # CSS custom properties (theme vars, Google Fonts)
├── assets/images/          # Logo, car-logo-svg.png, brand logos (20 pngs)
├── pages/
│   ├── Home.jsx            # Landing page (12+ child components)
│   ├── About.jsx           # Company story, values, timeline
│   ├── Contact.jsx         # Form, map embed, info cards
│   ├── DentsPaintsPage.jsx # Dents & paints service page
│   ├── CarDetails/         # Vehicle listing detail + gallery modal
│   ├── Delivery.jsx        # Exists, NOT routed in App.js
│   ├── Finance.jsx         # Exists, NOT routed in App.js
│   └── OurStock.jsx        # Stub — minimal, not production-ready
└── components/             # 25+ reusable components (see list below)
```

## Active Routes (App.js)

| Route | Component |
|-------|-----------|
| `/` | Home |
| `/cars` | CarDetails |
| `/dents-paints` | DentsPaintsPage |
| `/about` | About |
| `/contact` | Contact |

Routes for `/delivery`, `/finance`, `/stock`, `/servicing`, `/vans`, `/part-exchange`, `/vehicle-sourcing` are commented out.

## Component Inventory

**Carousels / interactive:**
- `FeatureCards` — Swiper (5 cars, autoplay 3s, nav + pagination)
- `Testimonials` — Swiper (6 items, autoplay 3s, responsive breakpoints)
- `ServicesSlider` — Custom tab switcher (6 services, no Swiper)
- `Browsebybudget` — Manual drag horizontal scroll
- `CarDetails` — Custom image slider + fullscreen gallery modal

**Layout / navigation:**
- `Navbar` — Sticky, scroll-hide, mobile drawer, contact dropdown
- `Hero` — 30/70 grid with `HeroFilter` search form
- `Footer` — Multi-column, Trustpilot, social links

**Reusable sections:**
- `AboutSection` — Props: `image`, `tag`, `title`, `titleHighlight`, `description`, `stats`, `buttons`
- `CTA` / `FinalCTA` — Props: `title`, `description`, `buttons`
- `Faqs` — Accordion, single-open, sticky contact card
- `WhatsApp` — Floating button, rendered globally in App.js outside Routes

**Service-page specific:**
- `WhatWeDo`, `TrustSection`, `TrustStrip`, `RepairProcess`, `EstimateForm`, `DentsPaintsServices`, `BeforeAfter`, `LocationContact`

## Styling Conventions

- **Brand colours** are CSS custom properties in `src/styles/global.css`:
  - `--theme-color: #ac1c7a` (magenta/purple — primary)
  - `--secondary-color: #c9a227` (gold — accent)
  - `--background-color: #fffdf5` (off-white — page bg)
  - `--muted-text: #6b6f85`
  - `--border-color: #f0e8d0`
- **Fonts:** Montserrat (body), Great Vibes (script headings) — loaded via Google Fonts
- **Pattern:** Tailwind utilities for layout/spacing; custom CSS files per component for brand-specific styling
- Do **not** add custom colours to `tailwind.config.js` — use CSS variables instead

## State Management

No Redux, Zustand, or Context. All state is local `useState` at the component level. No prop drilling beyond one level.

**Key component state:**
- `Navbar`: `menuOpen`, `contactOpen`, `hidden` (scroll-based hide)
- `CarDetails`: `current` (slide index), `loved` (favourite toggle), `showGallery` (modal)
- `Faqs`: `openId` (open accordion item)
- `ServicesSlider`: `active` (tab index)

## Data

All data is hardcoded in component files (arrays of objects). No API calls, no backend, no CMS. Images are a mix of local assets (`src/assets/`) and external Unsplash URLs with `?w=` and `q=80` params.

## Known Issues & Tech Debt

1. **No code splitting / lazy loading** — all pages and components import eagerly; `React.lazy` + `Suspense` not used.
2. **Unused package** — `react-owl-carousel` in `package.json` but never imported.
3. **Forms don't submit** — Contact and Estimate forms call `e.preventDefault()` with no backend handler.
4. **No 404 route** — App.js has no catch-all `<Route path="*">`.
5. **External images** — 30+ Unsplash requests per page load; no local caching.
6. **Hero layout** — 30/70 grid can break on narrow viewports; no mobile override.
7. **No tests** — zero test files in the project.
8. **Disabled pages** — Delivery, Finance, OurStock exist but are not linked or routed.

## Performance Notes

The main scroll/rendering sluggishness comes from:
- Multiple Swiper instances with autoplay running simultaneously
- No `will-change` or GPU compositing hints on animated elements
- Scroll-event listener in Navbar firing on every scroll tick without throttle
- Heavy CSS animations (`fadeUp`, `cubic-bezier`) on many elements
- All components mounting at once (no lazy loading)
- Tailwind's `@tailwind base` global CSS reset adding layout recalculation cost

## Adding New Pages

1. Create `src/pages/NewPage.jsx`
2. Add route in `App.js`: `<Route path="/new-page" element={<NewPage />} />`
3. Add nav link in `Navbar` component
4. Reuse `AboutSection`, `CTA`, `FinalCTA` for common sections

## Adding New Components

- Place in `src/components/ComponentName/ComponentName.jsx`
- Co-locate styles in `src/components/ComponentName/ComponentName.css`
- Import CSS at the top of the component file
- Use CSS custom properties (`var(--theme-color)`) for brand colours
