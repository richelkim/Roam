'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_NAME } from '../content/site'

export default function Footer() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-wordmark" href="/">{SITE_NAME}</Link>
        <p>For people who like going places.</p>
      </div>
      <div className="footer-meta technical">
        <span>TORONTO, ONTARIO</span>
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
        <span>V1 · TORONTO + GTA</span>
      </div>
    </footer>
  )
}
