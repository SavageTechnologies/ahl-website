import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a life insurance quote from American Home Life Insurance Company.',
}

export default function GetQuotePage() {
  return (
    <InnerLayout
      eyebrow="Get Started"
      title={<>Request a <em>Quote.</em></>}
      intro="Contact our team to get a personalized quote for any of our life insurance or annuity products. A licensed AHL agent will reach out to discuss your needs."
    >
      <section className={styles.formBody}>
        <div className={styles.formGrid}>
          <div className={styles.formLeft}>
            <div className="eyebrow">Contact Us</div>
            <h2 className="section-title">We will be in <em>touch.</em></h2>
            <p className={styles.formNote}>
              To request a quote, please call our Home Office directly or use the contact information below. A licensed agent will discuss your coverage needs and provide personalized product options.
            </p>
            <div className={styles.formPhones}>
              <a href="tel:18008760199" className={styles.formPhone}>(800) 876-0199</a>
              <a href="tel:17852356276" className={styles.formPhone}>(785) 235-6276</a>
            </div>
            <div className={styles.formAddress}>
              The American Home Life Insurance Company<br />
              PO Box 1497 · 400 S. Kansas Ave<br />
              Topeka, Kansas 66601
            </div>
          </div>
          <div className={styles.formRight}>
            {/* Quote form placeholder — wire to your backend or form service */}
            <div className={styles.formPlaceholder}>
              <div className={styles.formPlaceholderLabel}>Quote Request Form</div>
              <div className={styles.formPlaceholderSub}>Form integration coming soon. Please call (800) 876-0199 to speak with an agent.</div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}
