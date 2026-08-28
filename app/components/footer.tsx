import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-wordmark" href="/">Roam</Link>
        <p>For people who like going places.</p>
      </div>
      <div className="footer-meta technical">
        <span>TORONTO, ONTARIO</span>
        <span>© {new Date().getFullYear()} Roam</span>
        <span>V1 · TORONTO + GTA</span>
      </div>
    </footer>
  )
}
