import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import StatesMap from '@/components/ui/StatesMap'
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
          <p>American Home Life conducts business in the states shown below. <strong>Product availability may vary by state.</strong> Hover over any state to see details. Please contact the Home Office at <a href="tel:18008760199">(800) 876-0199</a> for additional information.</p>
        </div>
        <StatesMap />
      </section>
    </InnerLayout>
  )
}
