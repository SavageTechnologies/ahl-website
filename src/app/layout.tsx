import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'American Home Life Insurance — Trusted for Generations',
    template: '%s | American Home Life Insurance',
  },
  description:
    'The American Home Life Insurance Company has been insuring individuals since 1909. A mutual company offering whole life, term, final expense, preneed, and annuity products. Trusted for Generations.',
  metadataBase: new URL('https://www.amhomelife.com'),
  openGraph: {
    siteName: 'American Home Life Insurance',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
