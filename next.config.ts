import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.php/about-us/history',        destination: '/about/history',           permanent: true },
      { source: '/index.php/about-us/locations',       destination: '/about/locations',          permanent: true },
      { source: '/index.php/products/whole-life',      destination: '/products/whole-life',      permanent: true },
      { source: '/index.php/products/term',            destination: '/products/term',            permanent: true },
      { source: '/index.php/products/final-expense',   destination: '/products/final-expense',   permanent: true },
      { source: '/index.php/products/preneed',         destination: '/products/preneed',         permanent: true },
      { source: '/index.php/products/annuities',       destination: '/products/annuities',       permanent: true },
      { source: '/index.php/claims',                   destination: '/claims',                   permanent: true },
      { source: '/index.php/contact-us',               destination: '/contact',                  permanent: true },
      { source: '/index.php/request-a-quote',          destination: '/get-quote',                permanent: true },
      { source: '/index.php/2012-04-02-21-39-41',      destination: '/request-agent',            permanent: true },
      { source: '/index.php/2012-04-02-21-39-19',      destination: '/contact',                  permanent: true },
      { source: '/index.php',                          destination: '/',                         permanent: true },
    ]
  },
}

export default nextConfig
