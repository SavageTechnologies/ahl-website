import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'File a Claim',
  description: 'File a life insurance claim with American Home Life Insurance Company. We are here when you need us most.',
}

export default function ClaimsPage() {
  return (
    <InnerLayout
      eyebrow="Claims"
      title={<>We Are Here <em>When You Need Us.</em></>}
      intro="Our founders understood that our commitment to our policyholders is one of trust — to deliver at the time of need. Our staff works every day to ensure we are providing you with the service you deserve."
    >
      <section className={styles.claimsBody}>

        <div className={styles.noticeBar}>
          <div className={styles.noticeTitle}>Not sure which number to call?</div>
          <div className={styles.noticeRow}>
            <div className={styles.noticeItem}>
              <div className={styles.noticeLabel}>Bank memo says <strong>"Amer Home Life"</strong> or policy begins with <strong>AMH</strong>:</div>
              <a href="tel:18002590468" className={styles.noticePhone}>1-800-259-0468</a>
            </div>
            <div className={styles.noticeDivider} />
            <div className={styles.noticeItem}>
              <div className={styles.noticeLabel}>Bank memo says <strong>"American Home Life"</strong>:</div>
              <a href="tel:18008760199" className={styles.noticePhone}>(800) 876-0199</a>
            </div>
          </div>
        </div>

        <div className={styles.claimsGrid}>
          <div className={styles.claimsInfo}>
            <div className="eyebrow">How to File</div>
            <h2 className="section-title">Starting a <em>Claim.</em></h2>
            <div className={styles.claimsSteps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <div className={styles.stepText}>
                  <div className={styles.stepTitle}>Contact Our Home Office</div>
                  <div className={styles.stepDesc}>Call us at the appropriate number above. Our team will guide you through the process and let you know exactly what documentation is needed.</div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <div className={styles.stepText}>
                  <div className={styles.stepTitle}>Gather Documentation</div>
                  <div className={styles.stepDesc}>You will typically need the original policy, a certified death certificate, and completed claim forms. Our staff will provide all required forms.</div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <div className={styles.stepText}>
                  <div className={styles.stepTitle}>Submit Your Claim</div>
                  <div className={styles.stepDesc}>Submit your completed forms and documentation to our Home Office. We process claims promptly and keep you informed throughout.</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.claimsContact}>
            <div className="eyebrow">Contact</div>
            <div className={styles.contactCard}>
              <div className={styles.contactOrg}>The American Home Life Insurance Company</div>
              <div className={styles.contactAddr}>
                PO Box 1497<br />
                400 S. Kansas Ave<br />
                Topeka, Kansas 66601
              </div>
              <div className={styles.contactPhones}>
                <a href="tel:18008760199">(800) 876-0199</a>
                <a href="tel:17852356276">(785) 235-6276</a>
              </div>
              <div className={styles.contactNote}>
                Our Policyowner Services team is available to assist you. Please have your policy number ready when you call.
              </div>
            </div>
          </div>
        </div>

      </section>
    </InnerLayout>
  )
}
