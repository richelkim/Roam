import Link from 'next/link'
import { SITE_NAME } from '../content/site'

export default function Footer() {
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
