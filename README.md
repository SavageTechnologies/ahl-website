# AHL Website — American Home Life Insurance Company

Next.js 15 rebuild of amhomelife.com.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Modules** — all styles scoped per component
- **Google Fonts** — Cormorant Garamond, Montserrat, Courier Prime

## Global Design Tokens
All colors, spacing, fonts, shadows, and transitions are defined as CSS custom properties in:
```
src/app/globals.css
```
Change a token once — it updates everywhere.

## Project Structure
```
src/
  app/
    globals.css          ← All design tokens & global utilities
    layout.tsx           ← Root layout + metadata
    page.tsx             ← Home page
    page.module.css
    about/
      history/
      locations/
    products/
      product.module.css ← Shared product page styles
      whole-life/
      term/
      final-expense/
      preneed/
      annuities/
    claims/
    contact/
    get-quote/
    request-agent/
  components/
    layout/
      Nav.tsx            ← Sticky nav with utility bar + mobile drawer
      Nav.module.css
      Footer.tsx
      Footer.module.css
      InnerLayout.tsx    ← Shared inner page wrapper
    ui/
      Marquee.tsx        ← Scrolling ticker
      Marquee.module.css
```

## External Portals (untouched)
These remain on the Joomla server and are linked externally:
- Policyholder Sign In: `https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry`
- Agent Login: `https://www.amhomelife.com/ahlcas/login`

## URL Redirects
All old Joomla `/index.php/...` URLs redirect automatically via `next.config.ts`.

## Launch Checklist
- [ ] Replace `public/favicon.png` with actual AHL favicon
- [ ] Add actual logo image if desired (or keep CSS mark)
- [ ] Wire up Get Quote form to backend/email service
- [ ] Add licensed states list to Locations page
- [ ] Confirm all phone numbers and contact details
- [ ] DNS cutover from Joomla to new server
