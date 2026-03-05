import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import styles from './InnerLayout.module.css'

interface Props {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  children: React.ReactNode
  cta?: { label: string; href: string }
}

export default function InnerLayout({ eyebrow, title, intro, children, cta }: Props) {
  return (
    <>
      <Nav />
      <main>
        <div className="page-hero">
          <div className="page-hero-eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
          {cta && (
            <div className={styles.heroCta}>
              <Link href={cta.href} className="btn-white">{cta.label}</Link>
            </div>
          )}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
