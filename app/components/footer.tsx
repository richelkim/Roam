import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-wordmark" href="/">Roam</Link>
        <p>For people who like going somewhere.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/hikes">Hikes</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/hikes">Join a Hike</Link>
      </nav>
      <div className="footer-meta technical">
        <span>TORONTO, ONTARIO</span>
        <span>© {new Date().getFullYear()} Roam</span>
        <span>V1 · SAMPLE EVENTS LABELED</span>
      </div>
    </footer>
  )
}
