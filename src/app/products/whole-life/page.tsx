import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import Link from 'next/link'
import styles from '../product.module.css'

export const metadata: Metadata = {
  title: 'Whole Life Insurance',
  description: 'AHL whole life insurance provides a guaranteed death benefit, guaranteed premiums that never increase, and guaranteed cash values that grow over time.',
}

const FEATURES = [
  { title: 'Guaranteed Death Benefit', desc: 'Your beneficiaries receive the full face amount of your policy, guaranteed — regardless of when you pass.' },
  { title: 'Premiums That Never Increase', desc: 'Lock in your premium rate for life. What you pay today is what you\'ll pay for the life of the policy.' },
  { title: 'Guaranteed Cash Value Growth', desc: 'Your policy builds cash value over time — money that is available to you for financial emergencies or other needs.' },
  { title: 'Potential Dividend Payments', desc: 'As a mutual company, AHL policies may pay dividends that provide even more death benefits and cash values over time.' },
]

export default function WholeLifePage() {
  return (
    <InnerLayout
      eyebrow="Products · Whole Life"
      title={<>Whole Life <em>Insurance.</em></>}
      intro="Permanent protection for your family with guarantees you can count on. Whole life insurance provides a guaranteed death benefit, guaranteed premiums that never increase, and guaranteed cash values that grow over time."
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
            <p>Whole life insurance is the cornerstone of financial security for generations of American families. Unlike term life, whole life coverage is <strong>permanent</strong> — it does not expire, and your beneficiaries are guaranteed to receive the death benefit as long as premiums are paid.</p>
            <p>In a lifetime of change, whole life provides something permanent. With AHL, you have options — our whole life products are designed to provide financial security and risk protection to meet your needs for today and tomorrow.</p>
            <p>Our policies may also pay a <strong>dividend</strong> — as a mutual company, we can share our financial success with policyholders in the form of dividends that increase death benefits and cash values over time.</p>
            <p>Security and peace of mind for you and your family is one of the best gifts you can give.</p>
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
