import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import Link from 'next/link'
import styles from '../product.module.css'

export const metadata: Metadata = {
  title: 'Final Expense Insurance',
  description: 'AHL final expense insurance helps cover end-of-life costs, easing the financial burden on your loved ones.',
}

const FEATURES = [
  { title: 'Cover End-of-Life Costs', desc: 'Designed specifically to cover funeral and burial expenses, medical bills, and other final costs.' },
  { title: 'Ease the Burden', desc: 'Spare your loved ones the financial stress of unexpected expenses during an already difficult time.' },
  { title: 'Simplified Qualification', desc: 'Final expense policies are designed to be accessible — providing coverage when traditional policies may not be an option.' },
  { title: 'Permanent Protection', desc: 'Coverage that does not expire and premiums that remain stable, giving you lasting peace of mind.' },
]

export default function FinalExpensePage() {
  return (
    <InnerLayout
      eyebrow="Products · Final Expense"
      title={<>Final Expense <em>Insurance.</em></>}
      intro="Thoughtfully designed coverage to ease the financial burden of end-of-life costs, giving your family peace of mind and the freedom to focus on what matters most."
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
            <p>Final expense insurance is a type of whole life insurance designed to help cover the costs associated with the end of life — including funeral expenses, burial costs, outstanding medical bills, and other final obligations.</p>
            <p>Whether you're securing protection for yourself or helping a loved one plan ahead, AHL's final expense products provide <strong>permanent, reliable coverage</strong> backed by over 115 years of service to American families.</p>
            <p>The tax-free benefits of life insurance mean your family receives the full benefit — no deductions, no delays at the time of greatest need.</p>
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
