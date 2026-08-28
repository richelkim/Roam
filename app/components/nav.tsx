import Link from 'next/link'
import { SITE_NAME } from '../content/site'

const navItems = [
  { href: '/how-it-works', label: 'How It Works' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <Link className="site-wordmark" href="/" aria-label={`${SITE_NAME} home`}>{SITE_NAME}</Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <Link className="nav-cta" href="/hikes">JOIN A HIKE <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
