import type { Metadata } from 'next'
import InnerLayout from '@/components/layout/InnerLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Request an Agent',
  description: 'Connect with a licensed American Home Life Insurance agent in your area.',
}

export default function RequestAgentPage() {
  return (
    <InnerLayout
      eyebrow="Get Connected"
      title={<>Find a Licensed <em>Agent.</em></>}
      intro="Connect with a licensed American Home Life Insurance agent in your area. Our agents are knowledgeable, trustworthy, and ready to help you find the right coverage for your family."
    >
      <section className={styles.agentBody}>
        <div className={styles.agentGrid}>
          <div className={styles.agentInfo}>
            <div className="eyebrow">How It Works</div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <div>
                  <div className={styles.stepTitle}>Contact the Home Office</div>
                  <div className={styles.stepDesc}>Call us at (800) 876-0199 and let us know your state and coverage needs. We will connect you with a licensed agent in your area.</div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <div>
                  <div className={styles.stepTitle}>Meet Your Agent</div>
                  <div className={styles.stepDesc}>Your AHL agent will discuss your family's needs, explain your product options, and help you choose the right coverage.</div>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <div>
                  <div className={styles.stepTitle}>Get Covered</div>
                  <div className={styles.stepDesc}>Apply for coverage with confidence, backed by over 115 years of AHL service and a mutual company that answers to you.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.agentContact}>
            <div className="eyebrow">Reach Us</div>
            <div className={styles.contactCard}>
              <div className={styles.contactOrg}>American Home Life Insurance Company</div>
              <div className={styles.contactPhones}>
                <a href="tel:18008760199">(800) 876-0199</a>
                <a href="tel:17852356276">(785) 235-6276</a>
              </div>
              <div className={styles.contactAddr}>
                PO Box 1497 · 400 S. Kansas Ave<br />
                Topeka, Kansas 66601
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  )
}
