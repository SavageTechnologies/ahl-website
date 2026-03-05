'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'About', href: '/about/history', sub: [
    { label: 'History',   href: '/about/history' },
    { label: 'Locations', href: '/about/locations' },
  ]},
  { label: 'Products', href: '/products/whole-life', sub: [
    { label: 'Whole Life',     href: '/products/whole-life' },
    { label: 'Term',           href: '/products/term' },
    { label: 'Final Expense',  href: '/products/final-expense' },
    { label: 'Preneed',        href: '/products/preneed' },
    { label: 'Annuities',      href: '/products/annuities' },
  ]},
  { label: 'Claims',    href: '/claims' },
  { label: 'Contact',   href: '/contact' },
]

const UTILITY_LINKS = [
  { label: 'Request an Agent',   href: '/request-agent' },
  { label: 'Agent Login',        href: 'https://www.amhomelife.com/ahlcas/login', external: true },
  { label: 'Policyholder Sign In', href: 'https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry', external: true },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Utility bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <span className={styles.utilityPhone}>
            <span className={styles.utilityDot} />
            (800) 876-0199 &nbsp;·&nbsp; (785) 235-6276
          </span>
          <div className={styles.utilityLinks}>
            {UTILITY_LINKS.map(l => (
              <Link
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className={styles.utilityLink}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.logoWrap}>
            <div className={styles.logoMark}>
              <div className={styles.logoMarkInner} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>American Home Life</span>
              <span className={styles.logoSub}>Insurance Company</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className={styles.links}>
            {NAV_LINKS.map(link => (
              <div
                key={link.label}
                className={styles.linkWrap}
                onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                  {link.sub && <span className={styles.chevron}>▾</span>}
                </Link>
                {link.sub && activeDropdown === link.label && (
                  <div className={styles.dropdown}>
                    {link.sub.map(s => (
                      <Link key={s.label} href={s.href} className={styles.dropItem}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/get-quote" className={styles.cta}>
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={open ? styles.barTop + ' ' + styles.barTopOpen : styles.barTop} />
            <span className={open ? styles.barMid + ' ' + styles.barMidOpen : styles.barMid} />
            <span className={open ? styles.barBot + ' ' + styles.barBotOpen : styles.barBot} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              <Link href={link.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
              {link.sub && link.sub.map(s => (
                <Link key={s.label} href={s.href} className={styles.drawerSub} onClick={() => setOpen(false)}>
                  {s.label}
                </Link>
              ))}
            </div>
          ))}
          <div className={styles.drawerDivider} />
          {UTILITY_LINKS.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className={styles.drawerUtil}
              target={l.external ? '_blank' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/get-quote" className={styles.drawerCta} onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </>
  )
}
