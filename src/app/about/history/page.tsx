import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Our History',
  description: 'American Home Life Insurance Company has been insuring individuals since 1909. Learn about our history as a mutual company trusted for generations.',
}

export default function HistoryPage() {
  return (
    <InnerLayout
      eyebrow="About Us · History"
      title={<>Founded in <em>1909.</em></>}
      intro="American Home Life has been insuring individuals since our founding in 1909. We have endured and grown over a century through world wars, the Great Depression, global recessions, and natural disasters — all while serving the life insurance needs of those who place their trust in us."
    >
      <section className={styles.body}>

        <div className={styles.prose}>
          <div className="eyebrow">Our Story</div>
          <h2 className="section-title">A Mutual Company.<br /><em>Trusted for Generations.</em></h2>

          <div className={styles.proseGrid}>
            <div className={styles.proseText}>
              <p>The American Home Life Insurance Company was founded in 1909 with a simple but enduring mission: to provide financial security and peace of mind to individuals and families throughout their lives.</p>
              <p>We are a <strong>mutual company</strong> — owned by our policyholders and operated entirely for their benefit. We are not beholden to stockholders or Wall Street. Our obligations are to the families and communities who trust us.</p>
              <p>Through world wars, the Great Depression, global economic recessions, and natural disasters, American Home Life has remained steadfast in its commitment to policyholders. We have not only endured — we have grown.</p>
              <p>Our financial strength and overall practices are rated <strong>"Secure"</strong> by the most recognized insurance rating organization. We provide life insurance policies, preneed life insurance policies, and annuities for all of life's milestones — providing financial security and risk protection for today and tomorrow.</p>
              <p>American Home Life has been <em>"Trusted for Generations"</em> and will be here for you today, and for generations to come.</p>
            </div>

            <div className={styles.proseSide}>
              <div className={styles.milestone}>
                <div className={styles.milestoneYear}>1909</div>
                <div className={styles.milestoneText}>Founded in Topeka, Kansas as a mutual life insurance company.</div>
              </div>
              <div className={styles.milestone}>
                <div className={styles.milestoneYear}>100+</div>
                <div className={styles.milestoneText}>Years serving middle-market consumers with traditional and final expense life insurance, annuities, and preneed products.</div>
              </div>
              <div className={styles.milestone}>
                <div className={styles.milestoneYear}>Today</div>
                <div className={styles.milestoneText}>Operating across multiple states, rated "Secure," and continuing to serve families with the same commitment as our founders.</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </InnerLayout>
  )
}
