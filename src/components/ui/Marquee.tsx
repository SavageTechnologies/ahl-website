import styles from './Marquee.module.css'

const ITEMS = [
  'Trusted for Generations',
  'Whole Life Insurance',
  'Est. 1909',
  'Term Life',
  'Final Expense',
  'Preneed Planning',
  'Fixed Annuities',
  'Mutual Company',
  'BBB Accredited',
  'Topeka, Kansas',
  'Family Financial Security',
  'Guaranteed Death Benefit',
  'Over 115 Years of Service',
]

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <div key={i} className={styles.item}>{item}</div>
        ))}
      </div>
    </div>
  )
}
