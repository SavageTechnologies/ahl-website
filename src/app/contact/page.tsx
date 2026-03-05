import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the American Home Life Insurance Company. Home Office in Topeka, Kansas. (800) 876-0199.',
}

const DIRECTORY = [
  { name: 'Tom Lobell',        title: 'President & Chief Executive Officer',          initial: 'TL' },
  { name: 'Les E. Diehl, J.D.', title: 'Secretary',                                   initial: 'LD' },
  { name: 'Adam Heiman, CPA',  title: 'Vice President · Chief Financial Officer · Treasurer', initial: 'AH' },
  { name: 'Nathan Ansley',     title: 'Vice President · Marketing & Legal Services',  initial: 'NA' },
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="page-hero">
          <div className="page-hero-eyebrow">Contact Us</div>
          <h1>We are here <em>when you need us.</em></h1>
          <p>Our staff and agents work hard every day to ensure we are providing the service you deserve. Reach out by phone, mail, or through our online form.</p>
        </div>

        <section className={styles.contactGrid}>

          {/* Important notice */}
          <div className={styles.notice}>
            <div className={styles.noticeTitle}>Not sure which number to call?</div>
            <div className={styles.noticeRow}>
              <div className={styles.noticeItem}>
                <div className={styles.noticeLabel}>If your bank statement memo says <strong>"Amer Home Life"</strong> or your policy begins with <strong>AMH</strong>:</div>
                <a href="tel:18002590468" className={styles.noticePhone}>1-800-259-0468</a>
              </div>
              <div className={styles.noticeDivider} />
              <div className={styles.noticeItem}>
                <div className={styles.noticeLabel}>If your bank statement memo says <strong>"American Home Life"</strong>:</div>
                <a href="tel:18008760199" className={styles.noticePhone}>(800) 876-0199</a>
              </div>
            </div>
          </div>

          {/* Address + general */}
          <div className={styles.infoCol}>
            <div className="eyebrow">Home Office</div>
            <div className={styles.addressBlock}>
              <div className={styles.addressLine}>The American Home Life Insurance Company</div>
              <div className={styles.addressLine}>PO Box 1497</div>
              <div className={styles.addressLine}>400 S. Kansas Ave</div>
              <div className={styles.addressLine}>Topeka, Kansas 66601</div>
            </div>
            <div className={styles.phoneBlock}>
              <a href="tel:18008760199" className={styles.phoneLink}>(800) 876-0199</a>
              <a href="tel:17852356276" className={styles.phoneLink}>(785) 235-6276</a>
            </div>
          </div>

          {/* Directory */}
          <div className={styles.directoryCol}>
            <div className="eyebrow">Directory</div>
            <div className={styles.directoryGrid}>
              {DIRECTORY.map(p => (
                <div key={p.name} className={styles.dirCard}>
                  <div className={styles.dirInitial}>{p.initial}</div>
                  <div className={styles.dirInfo}>
                    <div className={styles.dirName}>{p.name}</div>
                    <div className={styles.dirTitle}>{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
