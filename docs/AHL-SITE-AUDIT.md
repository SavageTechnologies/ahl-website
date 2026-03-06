# American Home Life Insurance — Original Site Audit
## amhomelife.com — Joomla CMS

---

## Site Architecture

### Primary Navigation
| Label | Original URL | New URL | Status |
|-------|-------------|---------|--------|
| Home | `/` | `/` | ✅ Built |
| History | `/index.php/about-us/history` | `/about/history` | ✅ Built |
| Locations | `/index.php/about-us/locations` | `/about/locations` | ⚠️ Placeholder |
| Whole Life | `/index.php/products/whole-life` | `/products/whole-life` | ✅ Built |
| Term | `/index.php/products/term` | `/products/term` | ✅ Built |
| Final Expense | `/index.php/products/final-expense` | `/products/final-expense` | ✅ Built |
| Preneed | `/index.php/products/preneed` | `/products/preneed` | ✅ Built |
| Annuities | `/index.php/products/annuities` | `/products/annuities` | ✅ Built |
| Claims | `/index.php/claims` | `/claims` | ✅ Built |
| Contact Us | `/index.php/contact-us` | `/contact` | ✅ Built |
| Get a Quote | `/index.php/request-a-quote` | `/get-quote` | ⚠️ Form placeholder |
| Request an Agent | `/index.php/2012-04-02-21-39-41` | `/request-agent` | ✅ Built |

### Utility / Header Links
| Label | URL | Type | Notes |
|-------|-----|------|-------|
| Request an Agent | `/request-agent` | Internal | |
| Agent Login | `https://www.amhomelife.com/ahlcas/login` | External portal | Stays on Joomla server |
| Policyholder Sign In | `https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry` | External portal | Stays on Joomla server |

---

## External Portals (Do Not Touch)
These live on the Joomla server and must remain untouched after DNS cutover. The new site links to them as external URLs only.

| Portal | URL | Purpose |
|--------|-----|---------|
| Policyholder Portal | `https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry` | Policyholders view policy info, statements, account details |
| Agent Login | `https://www.amhomelife.com/ahlcas/login` | Agents access rates, tools, management reports |
| Contact/Web Forms | `https://www.amhomelife.com/ahlweb/` | Backend contact form handler |

---

## Home Page Sections (Original → New)

| Original Section | New Section | Notes |
|-----------------|-------------|-------|
| Hero banner | Hero — "Trusted for Generations.™" | Rebuilt with watermark logo |
| Strength / Protection / Security / Service blurbs | Four Pillars section | Full copy preserved |
| Product list | Product cards grid | All 5 products |
| Quote CTA | Quote callout band | Dark navy section |
| Mutual company statement | Mutual statement section | |
| Portal quick links | Portals grid | 4 cards |

---

## Page-by-Page Content Audit

### Home `/`
- **Hero:** "Trusted for Generations.™" tagline, company founding story, Get a Quote + Our History CTAs
- **Stats bar:** Founded 1909, 115+ Years, Mutual, Secure, BBB
- **Pillars:** Strength, Protection, Security, Service — full paragraph copy for each
- **Products:** 5 product cards linking to product pages
- **Quote callout:** Dark band with brand quote
- **Mutual statement:** Explanation of mutual company structure
- **Portals:** Policyholder Sign In, Agent Login, Request an Agent, File a Claim

### History `/about/history`
- Founded 1909 in Topeka, Kansas
- Mutual company — owned by policyholders
- Endured world wars, Great Depression, recessions
- Rated "Secure" by most recognized insurance rating organization
- Milestone sidebar: 1909 / 100+ Years / Today

### Locations `/about/locations`
- ⚠️ **INCOMPLETE** — needs licensed states list from client
- Notice: product availability varies by state, call (800) 876-0199
- Map placeholder — needs either SVG US states map or embedded Google Map

### Whole Life `/products/whole-life`
- Guaranteed death benefit
- Premiums that never increase
- Guaranteed cash value growth
- Potential dividend payments (mutual company benefit)

### Term Life `/products/term`
- Guaranteed death benefit for specific term
- Locked-in premiums
- Flexible coverage periods
- Affordable protection
- Note: consider combining term + permanent coverage

### Final Expense `/products/final-expense`
- Covers funeral, burial, medical bills, end-of-life costs
- Eases financial burden on loved ones
- Simplified qualification
- Permanent protection

### Preneed `/products/preneed`
- Fund pre-arranged funeral/burial plans
- Lock in today's prices
- Spares family difficult decisions
- Available through licensed AHL agents

### Annuities `/products/annuities`
- Qualified: Traditional IRA, Roth IRA
- Non-qualified: tax-deferred flexible premium
- Tax-deferred growth
- Flexible premium options

### Claims `/claims`
- **Critical notice:** Two different phone numbers depending on policy type
  - Bank memo "Amer Home Life" or policy starts with AMH → **1-800-259-0468**
  - Bank memo "American Home Life" → **(800) 876-0199**
- 3-step process: Contact → Gather docs → Submit
- Required docs: original policy, certified death certificate, completed claim forms
- Contact card: Home Office address + both phone numbers

### Contact `/contact`
- Same two-number notice as Claims page
- Home Office address: PO Box 1497, 400 S. Kansas Ave, Topeka, KS 66601
- Phone: (800) 876-0199 / (785) 235-6276
- Leadership directory (4 people — see below)

### Get a Quote `/get-quote`
- ⚠️ **INCOMPLETE** — form placeholder only
- Needs: backend form handler, Formspree, or email service integration
- Currently shows phone numbers as alternative

### Request an Agent `/request-agent`
- 3-step: Contact Home Office → Meet agent → Get covered
- Contact card with both phone numbers

---

## Leadership Directory
| Name | Title |
|------|-------|
| Tom Lobell | President & Chief Executive Officer |
| Les E. Diehl, J.D. | Secretary |
| Adam Heiman, CPA | VP, Chief Financial Officer & Treasurer |
| Nathan Ansley | VP, Marketing & Legal Services |

> ⚠️ Shawn Walker — **removed per client instruction**, no longer with company

---

## Phone Numbers Reference
| Number | Use |
|--------|-----|
| (800) 876-0199 | Primary toll-free — all general inquiries |
| (785) 235-6276 | Local Topeka number |
| 1-800-259-0468 | Claims/billing only — policies with "Amer Home Life" memo or AMH prefix |

---

## 301 Redirect Map
All configured in `next.config.ts` — Joomla URLs automatically redirect to new clean URLs.

| Old Joomla URL | New URL |
|---------------|---------|
| `/index.php/about-us/history` | `/about/history` |
| `/index.php/about-us/locations` | `/about/locations` |
| `/index.php/products/whole-life` | `/products/whole-life` |
| `/index.php/products/term` | `/products/term` |
| `/index.php/products/final-expense` | `/products/final-expense` |
| `/index.php/products/preneed` | `/products/preneed` |
| `/index.php/products/annuities` | `/products/annuities` |
| `/index.php/claims` | `/claims` |
| `/index.php/contact-us` | `/contact` |
| `/index.php/request-a-quote` | `/get-quote` |
| `/index.php/2012-04-02-21-39-41` | `/request-agent` |
| `/index.php/2012-04-02-21-39-19` | `/contact` |
| `/index.php` | `/` |

---

## Outstanding Items for Next Session
- [ ] Locations page — get licensed states list from client, build map
- [ ] Get Quote form — wire to backend or Formspree
- [ ] Favicon files — drop into `/public/`: favicon.ico, favicon-32.png, apple-touch-icon.png, og-image.png
- [ ] Go through each page visually and refine content/layout
- [ ] Mobile QA — test all pages on phone
- [ ] DNS cutover plan — coordinate with client hosting
- [ ] Verify all external portal links still work post-launch
