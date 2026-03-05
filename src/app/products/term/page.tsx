import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import Link from 'next/link'
import styles from '../product.module.css'

export const metadata: Metadata = {
  title: 'Term Life Insurance',
  description: 'AHL term life insurance provides a guaranteed death benefit and guaranteed premiums for a specific number of years.',
}

const FEATURES = [
  { title: 'Guaranteed Death Benefit', desc: 'Your beneficiaries receive the full policy amount during the coverage term — guaranteed.' },
  { title: 'Locked-In Premiums', desc: 'Your premium rate is guaranteed for the term of the policy — no surprises, no increases.' },
  { title: 'Flexible Coverage Periods', desc: 'Choose a term that fits your family\'s needs and timeline, aligning coverage with financial obligations.' },
  { title: 'Affordable Protection', desc: 'Term life is one of the most cost-effective ways to provide significant protection for your family.' },
]

export default function TermPage() {
  return (
    <InnerLayout
      eyebrow="Products · Term Life"
      title={<>Term Life <em>Insurance.</em></>}
      intro="Guaranteed death benefit and premiums for a specific number of years. Term life insurance is an affordable way to provide your family with significant protection during critical years."
      cta={{ label: 'Request a Quote', href: '/get-quote' }}
    >
      <section className={styles.productBody}>
        <div className={styles.featuresGrid}>
          {FEATURES.map(f => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureDot} />
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.prose}>
          <div className="eyebrow">About This Product</div>
          <div className={styles.proseText}>
            <p>Term life insurance provides a <strong>guaranteed death benefit</strong> and guaranteed premiums for a specific number of years. It is designed to protect your family during the years when coverage matters most — while raising children, paying down a mortgage, or building financial security.</p>
            <p>You may want to consider a <strong>combination of both permanent and term coverage</strong> to address both your immediate and long-term financial protection needs.</p>
            <p>American Home Life offers term products designed to meet the needs of middle-market families with straightforward, reliable coverage backed by over 115 years of experience.</p>
          </div>
          <div className={styles.proseCtas}>
            <Link href="/get-quote" className="btn-primary">Request a Quote</Link>
            <Link href="/request-agent" className="btn-outline">Find an Agent</Link>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}
