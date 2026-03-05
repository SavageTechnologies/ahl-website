import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Locations & States',
  description: 'American Home Life conducts business across multiple states. Contact our Home Office at (800) 876-0199 for product availability in your state.',
}

export default function LocationsPage() {
  return (
    <InnerLayout
      eyebrow="About Us · Locations"
      title={<>Where We <em>Operate.</em></>}
      intro="For over 100 years, American Home Life has served middle-market consumers by offering a comprehensive product portfolio of both traditional and final expense life insurance products, fixed annuities, and more."
    >
      <section className={styles.body}>
        <div className={styles.notice}>
          <p>American Home Life conducts business in multiple states. <strong>Product availability may vary by state.</strong> Please contact the Home Office at <a href="tel:18008760199">(800) 876-0199</a> for details on availability in your state.</p>
        </div>

        <div className={styles.mapPlaceholder}>
          <div className={styles.mapLabel}>Licensed States Map</div>
          <div className={styles.mapSub}>Contact (800) 876-0199 to confirm product availability in your state.</div>
        </div>
      </section>
    </InnerLayout>
  )
}
