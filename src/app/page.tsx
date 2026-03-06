import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Marquee from '@/components/ui/Marquee'
import styles from './page.module.css'

const PILLARS = [
  {
    num: '01 / STRENGTH',
    title: 'Strength',
    body: 'American Home Life has been insuring individuals since 1909. We have endured and grown over a century through world wars, the Great Depression, global recessions, and natural disasters — all while serving those who place their trust in us. We are a mutual company, owned by our policyholders and operated for their benefit. Not beholden to stockholders or Wall Street.',
  },
  {
    num: '02 / PROTECTION',
    title: 'Protection',
    body: 'Whether you\'re securing a future plan to protect a dream, a legacy plan for your family, or protection from an unexpected financial challenge, the life insurance you purchase today is there when needed. Whatever the reason, the tax-free benefits of life insurance should be a part of your overall family\'s financial planning.',
  },
  {
    num: '03 / SECURITY',
    title: 'Security',
    body: 'In a lifetime of change, your financial security is important now and in the future. With AHL you have options — permanent whole life coverage provides a guaranteed death benefit, guaranteed premiums that never increase, and guaranteed cash values that grow over time. Security and peace of mind for you and your family is one of the best gifts you can give.',
  },
  {
    num: '04 / SERVICE',
    title: 'Service',
    body: 'Our founders understood that our commitment to our policyholders is one of trust — to deliver at the time of need. Our staff and agents work hard every day to ensure that we are providing you with the service you deserve and expect. Our policy is our bond and your assurance of a more secure future.',
  },
]

const PRODUCTS = [
  {
    slug: 'whole-life',
    label: 'Whole Life',
    desc: 'Permanent coverage with a guaranteed death benefit, guaranteed premiums that never increase, and guaranteed cash values that grow over time.',
  },
  {
    slug: 'term',
    label: 'Term Life',
    desc: 'Guaranteed death benefit and premiums for a specific number of years — affordable protection when your family needs it most.',
  },
  {
    slug: 'final-expense',
    label: 'Final Expense',
    desc: 'Thoughtfully designed coverage to ease the financial burden of end-of-life costs, giving your loved ones peace of mind.',
  },
  {
    slug: 'preneed',
    label: 'Preneed',
    desc: 'Plan and fund your funeral arrangements in advance. A meaningful gift that spares your family difficult decisions at a difficult time.',
  },
  {
    slug: 'annuities',
    label: 'Annuities',
    desc: 'Qualified and non-qualified tax-deferred flexible premium annuities, including Traditional and Roth IRAs, for your retirement security.',
  },
]

const STATS = [
  { val: '1909', label: 'Year Founded' },
  { val: '115+', label: 'Years of Service' },
  { val: 'Mutual', label: 'Company Structure' },
  { val: 'Secure', label: 'Financial Rating' },
  { val: 'BBB', label: 'Accredited Business' },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* ── HERO ─────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBgLogo} aria-hidden="true">
            <img src="/logo.svg" alt="" />
          </div>
          <div className={styles.heroLine} />
          <div className={styles.heroEyebrow}>Est. 1909 · Topeka, Kansas · Mutual Company</div>
          <h1 className={styles.heroH1}>
            Trusted for <em>Generations.<sup style={{fontSize: '0.35em', verticalAlign: 'super'}}>®</sup></em>
          </h1>
          <p className={styles.heroSub}>
            The American Home Life Insurance Company has been serving families
            since our founding in 1909. We have endured and grown through world wars,
            the Great Depression, and global recessions — all while protecting those who
            place their trust in us. We are a mutual company, owned by our policyholders.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/get-quote" className="btn-primary">Get a Quote</Link>
            <Link href="/about/history" className="btn-outline">Our History</Link>
          </div>
        </section>

        {/* ── MARQUEE ───────────────────────────────────── */}
        <Marquee />

        {/* ── STATS BAR ────────────────────────────────── */}
        <div className={styles.statsBar}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statCell}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── PILLARS ──────────────────────────────────── */}
        <section className={styles.pillars}>
          <div className={styles.pillarsLeft}>
            <div className="eyebrow">Who We Are</div>
            <h2 className={styles.pillarsTitle}>
              Strength. Protection.<br /><em>Security. Service.</em>
            </h2>
            <p className={styles.pillarsIntro}>
              For over 115 years, American Home Life has built its foundation on four enduring
              principles. Not just words — they are the commitments we make to every policyholder,
              every family, every generation.
            </p>
            <Link href="/about/history" className="btn-outline">Read Our Story</Link>
          </div>
          <div className={styles.pillarsRight}>
            {PILLARS.map(p => (
              <div key={p.num} className={styles.pillar}>
                <div className={styles.pillarNum}>{p.num}</div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarBody}>{p.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────── */}
        <section className={styles.products}>
          <div className={styles.productsHeader}>
            <div>
              <div className="eyebrow">Our Products</div>
              <h2 className="section-title">
                Life Insurance for Every<br /><em>Milestone.</em>
              </h2>
            </div>
            <p className={styles.productsIntro}>
              From your first policy to final expense planning, AHL offers a comprehensive
              portfolio of life insurance and annuity products for all of life's milestones.
            </p>
          </div>
          <div className={styles.productGrid}>
            {PRODUCTS.map(p => (
              <Link key={p.slug} href={`/products/${p.slug}`} className={styles.productCard}>
                <div className={styles.productLabel}>{p.label}</div>
                <div className={styles.productDesc}>{p.desc}</div>
                <div className={styles.productArrow}>Learn more →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── QUOTE CALLOUT ────────────────────────────── */}
        <section className={styles.quoteCallout}>
          <div className={styles.quoteCalloutInner}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span style={{ background: 'rgba(255,255,255,0.3)', width: 28, height: 1, display: 'inline-block' }} />
              Get Started Today
            </div>
            <blockquote className={styles.quoteText}>
              "American Home Life has been <em>Trusted for Generations</em>&reg; and will be here
              for you today and generations to come."
            </blockquote>
            <div className={styles.quoteCtas}>
              <Link href="/get-quote" className="btn-white">Request a Quote</Link>
              <Link href="/request-agent" className={styles.quoteAgentLink}>Find an Agent →</Link>
            </div>
          </div>
        </section>

        {/* ── MUTUAL COMPANY STATEMENT ─────────────────── */}
        <section className={styles.mutual}>
          <div className={styles.mutualLeft}>
            <div className="eyebrow">Our Structure</div>
            <h2 className="section-title">
              Owned by our<br /><em>Policyholders.</em>
            </h2>
          </div>
          <div className={styles.mutualRight}>
            <p>
              We are a <strong>mutual company</strong> — owned by our policy owners and operated
              entirely for their benefit. We are not beholden to stockholders or Wall Street.
              Our only obligation is to the families and individuals who trust us with their
              financial security.
            </p>
            <p>
              Our financial strength and overall practices are rated <strong>"Secure"</strong> by
              the most recognized insurance rating organization. We provide life insurance policies,
              preneed life insurance policies, and annuities for all of life's milestones.
            </p>
            <div className={styles.mutualLinks}>
              <Link href="/about/history" className="btn-outline">Our History</Link>
              <Link href="/about/locations" className="btn-outline">Where We Operate</Link>
            </div>
          </div>
        </section>

        {/* ── PORTALS ──────────────────────────────────── */}
        <section className={styles.portals}>
          <div className="eyebrow">Quick Access</div>
          <h2 className="section-title">
            Already a <em>Policyholder or Agent?</em>
          </h2>
          <div className={styles.portalGrid}>
            <a
              href="https://www.amhomelife.com/ahlpolp2/servlet/policyportalentry"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portalCard}
            >
              <div className={styles.portalIcon}>◈</div>
              <div className={styles.portalTitle}>Policyholder Sign In</div>
              <div className={styles.portalDesc}>Access your policy information, statements, and account details securely online.</div>
              <div className={styles.portalArrow}>Sign in →</div>
            </a>
            <a
              href="https://www.amhomelife.com/ahlcas/login"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portalCard}
            >
              <div className={styles.portalIcon}>◉</div>
              <div className={styles.portalTitle}>Agent Login</div>
              <div className={styles.portalDesc}>Access the agent portal for rates, tools, and management reports.</div>
              <div className={styles.portalArrow}>Sign in →</div>
            </a>
            <Link href="/request-agent" className={styles.portalCard}>
              <div className={styles.portalIcon}>◎</div>
              <div className={styles.portalTitle}>Request an Agent</div>
              <div className={styles.portalDesc}>Connect with a licensed American Home Life agent in your area.</div>
              <div className={styles.portalArrow}>Get connected →</div>
            </Link>
            <Link href="/claims" className={styles.portalCard}>
              <div className={styles.portalIcon}>◇</div>
              <div className={styles.portalTitle}>File a Claim</div>
              <div className={styles.portalDesc}>We are here when you need us most. Start the claims process with our team.</div>
              <div className={styles.portalArrow}>Start a claim →</div>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
