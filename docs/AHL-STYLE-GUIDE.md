# American Home Life Insurance — Style Guide & Handoff Document

## Project Overview
- **Company:** The American Home Life Insurance Company
- **Domain:** amhomelife.com
- **Stack:** Next.js 15 (App Router), TypeScript, CSS Modules — no Tailwind, no external UI libraries
- **Design reference:** Vanthorpe Group — same structural DNA (1px grids, serif headlines, eyebrow labels, noise texture, marquee) but tone is warm/trustworthy/family-heritage rather than dark prestige
- **Repo:** https://github.com/SavageTechnologies/ahl-website

---

## Brand Identity

### Tagline
**Trusted for Generations.™** — always include the trademark symbol. This is a registered phrase. Every instance in copy, headings, and UI must include ™.

### Company Description
- Founded: 1909, Topeka, Kansas
- Structure: Mutual company — owned by policyholders, not stockholders or Wall Street
- Rating: "Secure" by the most recognized insurance rating organization
- BBB Accredited — must appear in footer
- Serves: Middle-market consumers

### Four Pillars (always in this order)
1. **Strength** — 115+ years, endured wars/depression/recessions
2. **Protection** — tax-free death benefits, family financial planning
3. **Security** — permanent coverage, guaranteed values
4. **Service** — commitment to policyholders at time of need

### Leadership Directory
- Tom Lobell — President & Chief Executive Officer
- Les E. Diehl, J.D. — Secretary
- Adam Heiman, CPA — VP, Chief Financial Officer & Treasurer
- Nathan Ansley — VP, Marketing & Legal Services

### Contact
- Phone: (800) 876-0199 / (785) 235-6276
- Address: PO Box 1497 · 400 S. Kansas Ave · Topeka, Kansas 66601
- **Important notice for claims/contact pages:** If bank memo says "Amer Home Life" or policy begins with AMH → call 1-800-259-0468. If memo says "American Home Life" → call (800) 876-0199.

### External Portals (never touch — remain on Joomla server)
- Policyholder Sign In: `https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry`
- Agent Login: `https://www.amhomelife.com/ahlcas/login`
- Contact forms: `https://www.amhomelife.com/ahlweb/`

---

## Design Tokens
All tokens live in `src/app/globals.css`. Change once, updates everywhere.

### Colors
```css
--bg:          #f4f7fb   /* Page background */
--bg2:         #edf2f9   /* Alternate section background */
--card:        #ffffff   /* Card background */
--card-hover:  #f0f5fc   /* Card hover state */

--navy:        #1a3a5c   /* Primary brand navy */
--navy-deep:   #0f2540   /* Nav utility bar, footer background */
--blue:        #2b6cb0   /* Accent blue, links, eyebrow labels */
--blue-mid:    #3a7dc9   /* Hover states */
--blue-light:  #4a90d9   /* Light accent, used on dark backgrounds */
--blue-dim:    rgba(43,108,176,0.08)
--blue-glow:   rgba(43,108,176,0.15)

--ink:         #1a2332   /* Primary text */
--muted:       #5a6a7e   /* Secondary text */
--faint:       #8a9ab0   /* Tertiary text, marquee items */

--border:      #d0dae8   /* Primary borders */
--border-light:#e2eaf4   /* Subtle borders */
--white:       #ffffff
```

### Typography
```css
--font-display: 'Cormorant Garamond', Georgia, serif   /* Headlines, large text */
--font-body:    'Montserrat', system-ui, sans-serif    /* Body, nav, buttons, labels */
--font-mono:    'Courier Prime', 'Courier New', monospace /* Addresses, timestamps, mono labels */
```

**Usage rules:**
- All `<h1>`, `<h2>`, section titles → `font-display`
- All body copy, nav links, buttons, eyebrow labels → `font-body`
- Phone numbers in footer/contact, addresses, code-like labels → `font-mono`
- Italic `<em>` in headlines → always blue (`var(--blue)` on light, `var(--blue-light)` on dark)

### Spacing Scale
```css
--space-xs:  8px
--space-sm:  16px
--space-md:  24px
--space-lg:  40px
--space-xl:  60px
--space-2xl: 100px
```

### Shadows
```css
--shadow-sm: 0 1px 4px rgba(26,58,92,0.08)
--shadow-md: 0 4px 16px rgba(26,58,92,0.12)
--shadow-lg: 0 8px 32px rgba(26,58,92,0.16)
```

---

## Global Utility Classes
Defined in `src/app/globals.css` — available on every page.

### Eyebrow Label
```html
<div class="eyebrow">Section Label</div>
```
8px, 700 weight, 5px letter-spacing, uppercase, blue, with a 28px blue line before it.

### Section Title
```html
<h2 class="section-title">Headline with <em>Italic Blue.</em></h2>
```
Cormorant Garamond, clamp(32px–52px), `<em>` renders in blue.

### Buttons
```html
<a href="..." class="btn-primary">Primary Action</a>   <!-- Navy fill -->
<a href="..." class="btn-outline">Secondary Action</a>  <!-- Navy outline -->
<a href="..." class="btn-white">On Dark BG</a>          <!-- White fill, for dark sections -->
```

### Page Hero (inner pages)
```html
<div class="page-hero">
  <div class="page-hero-eyebrow">Section · Sub-section</div>
  <h1>Headline with <em>Italic.</em></h1>
  <p>Intro paragraph text.</p>
</div>
```
Dark navy background, white text, blue-light italic, radial gradient overlay.

### Section Wrapper
```html
<section class="section">
  <div class="container">...</div>
</section>
```

---

## Component Architecture

### File Structure
```
src/
  app/
    globals.css          ← ALL design tokens + global utility classes
    layout.tsx           ← Root layout + metadata
    page.tsx             ← Home page
    page.module.css      ← Home page styles
    about/
      history/           ← page.tsx + page.module.css
      locations/
    products/
      product.module.css ← SHARED styles for all product pages
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
      Nav.tsx + Nav.module.css
      Footer.tsx + Footer.module.css
      InnerLayout.tsx + InnerLayout.module.css  ← Shared inner page wrapper
    ui/
      Marquee.tsx + Marquee.module.css
```

### Nav
- Two-tier: dark utility bar (navy-deep) on top, frosted light nav below
- Utility bar: phone numbers (white, mono font) + portal links (white)
- Main nav: logo text left, links center, "Get a Quote" CTA button right
- Dropdowns on hover for About and Products
- Mobile: hamburger at 768px, full drawer with all links
- Height: utility bar 36px + nav 72px = 108px total → `padding-top: 108px` on main
- Mobile: utility bar hidden, nav 72px → `padding-top: 72px`

### Footer
- Dark navy-deep background
- 4-column grid: Brand | Company | Products | Portals
- All text white or near-white — nothing below 0.7 opacity
- Phone numbers white, hover to blue-light
- BBB badge bottom right
- Legal disclaimer bottom strip

### InnerLayout
Wrap all inner pages with this component:
```tsx
<InnerLayout
  eyebrow="Section · Sub"
  title={<>Headline <em>Italic.</em></>}
  intro="Optional intro paragraph."
  cta={{ label: 'CTA Text', href: '/path' }}
>
  {/* page content */}
</InnerLayout>
```

### Marquee
Scrolling ticker — auto-plays, no interaction needed. Add/remove items in `Marquee.tsx` ITEMS array.

---

## Page Inventory

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ Built | Hero, pillars, products, quote callout, mutual statement, portals |
| `/about/history` | ✅ Built | Prose + milestone sidebar |
| `/about/locations` | ⚠️ Placeholder | Map placeholder — needs licensed states list or embedded map |
| `/products/whole-life` | ✅ Built | Features grid + prose |
| `/products/term` | ✅ Built | |
| `/products/final-expense` | ✅ Built | |
| `/products/preneed` | ✅ Built | |
| `/products/annuities` | ✅ Built | |
| `/claims` | ✅ Built | Notice banner, steps, contact card |
| `/contact` | ✅ Built | Directory, notice banner, address |
| `/get-quote` | ⚠️ Placeholder | Form placeholder — needs backend/Formspree wiring |
| `/request-agent` | ✅ Built | Steps + contact card |

---

## Design Patterns

### 1px Grid Sections
Use `gap: 1px; background: var(--border)` on the grid container, `background: var(--card)` on children. Creates the hairline-divided grid look.

### Eyebrow → Title → Body pattern
Every section follows: eyebrow label → display headline → body copy. Never skip the eyebrow.

### Dark sections
Use `var(--navy)` or `var(--navy-deep)` background. Override eyebrow and btn colors:
```css
.darkSection :global(.eyebrow) { color: var(--blue-light); }
.darkSection :global(.eyebrow)::before { background: var(--blue-light); }
```

### Product/feature cards
Bottom border accent on hover using `::after` pseudo-element with `scaleX` transform.

### Watermark
Hero background logo: `opacity: 0.035`, `filter: saturate(0)`, `width: clamp(200px, 30vw, 420px)`. Uses `/public/logo.svg`.

---

## Responsive Breakpoints
```
1200px — product grid 5→3 cols
1024px — two-col layouts stack, nav compresses
768px  — full mobile: hamburger, single column, reduced padding
```

---

## Redirect Map (next.config.ts)
All old Joomla `/index.php/...` URLs redirect automatically to clean URLs. No action needed.

---

## Launch Checklist
- [ ] Wire Get Quote form to backend (Formspree, email service, or custom API)
- [ ] Add licensed states to Locations page (list or SVG map)
- [ ] Add favicon files to `/public/` (favicon.ico, favicon-32.png, apple-touch-icon.png, og-image.png)
- [ ] Confirm all phone numbers and leadership names with client
- [ ] DNS cutover from Joomla → new server
- [ ] Test all external portal links post-launch
- [ ] Verify 301 redirects are working for old Joomla URLs

---

## Key Rules for New Chat Sessions
1. **Always use CSS Modules** — no inline styles, no Tailwind
2. **All tokens from globals.css** — never hardcode colors or fonts
3. **Trademark** — "Trusted for Generations™" everywhere, no exceptions
4. **Eyebrow labels** — every section needs one, use the `.eyebrow` global class
5. **Dark backgrounds** — all text must be white or near-white (minimum 0.7 opacity)
6. **InnerLayout** — all inner pages use this wrapper, never build nav/footer separately
7. **External portals** — always `target="_blank"` with `rel="noopener noreferrer"`
8. **Leadership** — Tom Lobell, Les Diehl, Adam Heiman, Nathan Ansley only — Shawn Walker removed
