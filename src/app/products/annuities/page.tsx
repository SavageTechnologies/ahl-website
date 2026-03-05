import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import Link from 'next/link'
import styles from '../product.module.css'

export const metadata: Metadata = {
  title: 'Annuities',
  description: 'AHL offers qualified and non-qualified tax-deferred flexible premium annuities, including Traditional and Roth IRAs.',
}

const FEATURES = [
  { title: 'Tax-Deferred Growth', desc: 'Your annuity grows tax-deferred, allowing your savings to compound without the drag of annual taxes.' },
  { title: 'Flexible Premiums', desc: 'Flexible premium options let you contribute on a schedule that fits your financial situation.' },
  { title: 'Traditional & Roth IRAs', desc: 'Qualified annuity options include both Traditional and Roth IRA structures for retirement planning.' },
  { title: 'Non-Qualified Options', desc: 'Non-qualified tax-deferred annuities provide additional savings vehicles outside of retirement accounts.' },
]

export default function AnnuitiesPage() {
  return (
    <InnerLayout
      eyebrow="Products · Annuities"
      title={<>Annuities for <em>Retirement Security.</em></>}
      intro="Qualified and non-qualified tax-deferred flexible premium annuities designed to grow your retirement savings and provide financial security for your future."
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
            <p>American Home Life offers both <strong>qualified</strong> (Traditional and Roth IRA) and <strong>non-qualified</strong> tax-deferred flexible premium annuities to support your long-term financial planning and retirement security.</p>
            <p>Our annuity products are designed to help you accumulate savings on a tax-advantaged basis, providing a reliable financial foundation for your retirement years.</p>
            <p>Contact a licensed AHL agent to discuss which annuity product is right for your individual financial situation and retirement goals.</p>
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
