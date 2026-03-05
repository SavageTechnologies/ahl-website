import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import Link from 'next/link'
import styles from '../product.module.css'

export const metadata: Metadata = {
  title: 'Preneed Life Insurance',
  description: 'AHL preneed life insurance lets you plan and fund your funeral arrangements in advance, sparing your family difficult decisions.',
}

const FEATURES = [
  { title: 'Plan Ahead', desc: 'Make your funeral and burial arrangements in advance, ensuring your wishes are known and honored.' },
  { title: 'Fund Your Arrangements', desc: 'Lock in today\'s prices and fund your plan, protecting against inflation in funeral costs over time.' },
  { title: 'Spare Your Family', desc: 'Remove the burden of difficult financial and planning decisions from your loved ones at a time of grief.' },
  { title: 'Peace of Mind', desc: 'Knowing your arrangements are made and funded provides lasting peace of mind for you and your family.' },
]

export default function PreneedPage() {
  return (
    <InnerLayout
      eyebrow="Products · Preneed"
      title={<>Preneed <em>Planning.</em></>}
      intro="Plan and fund your funeral arrangements in advance. A meaningful act of care that spares your family difficult decisions and financial burdens at the most difficult of times."
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
            <p>Preneed life insurance is specifically designed to fund pre-arranged funeral and burial plans. By planning and funding your arrangements in advance, you protect your family from the financial and emotional burden of making these decisions under duress.</p>
            <p>AHL has provided preneed life insurance policies for decades — helping individuals and families plan for life's final milestone with dignity, care, and financial certainty.</p>
            <p>Contact a licensed American Home Life agent to learn more about preneed planning options available in your state.</p>
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
