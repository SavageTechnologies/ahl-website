import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap}>
            <div className={styles.logoText}>
              <span className={styles.logoName}>American Home Life</span>
              <span className={styles.logoSub}>Insurance Company</span>
            </div>
          </Link>
          <p className={styles.tagline}>
            Trusted for Generations.&#8482;<br />
            Insuring individuals since 1909.<br />
            A mutual company — owned by our policyholders.
          </p>
          <div className={styles.address}>
            PO Box 1497 · 400 S. Kansas Ave<br />
            Topeka, Kansas 66601<br />
            <a href="tel:8008760199">(800) 876-0199</a> · <a href="tel:7852356276">(785) 235-6276</a>
          </div>
        </div>

        {/* Company column */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Company</div>
          <div className={styles.colLinks}>
            <Link href="/about/history">Our History</Link>
            <Link href="/about/locations">Locations & States</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/request-agent">Request an Agent</Link>
          </div>
        </div>

        {/* Products column */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Products</div>
          <div className={styles.colLinks}>
            <Link href="/products/whole-life">Whole Life</Link>
            <Link href="/products/term">Term Life</Link>
            <Link href="/products/final-expense">Final Expense</Link>
            <Link href="/products/preneed">Preneed</Link>
            <Link href="/products/annuities">Annuities</Link>
          </div>
        </div>

        {/* Portals column */}
        <div className={styles.col}>
          <div className={styles.colTitle}>Portals</div>
          <div className={styles.colLinks}>
            <a href="https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry" target="_blank" rel="noopener noreferrer">Policyholder Sign In</a>
            <a href="https://www.amhomelife.com/ahlcas/login" target="_blank" rel="noopener noreferrer">Agent Login</a>
            <Link href="/claims">File a Claim</Link>
            <Link href="/get-quote">Get a Quote</Link>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} The American Home Life Insurance Company · Est. 1909 · Topeka, Kansas
          </span>
          <span className={styles.legal}>
            The American Home Life Insurance Co. is not licensed in every state. Product availability may vary by state. Contact the Home Office at (800) 876-0199 for details.
          </span>
        </div>
        <div className={styles.bbb}>
          <a
            href="https://www.bbb.org/us/ks/topeka/profile/insurance-companies/the-american-home-life-insurance-co-0714-17755/#sealclick"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bbbLink}
          >
            <span className={styles.bbbBadge}>BBB</span>
            <span className={styles.bbbText}>Accredited Business</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
