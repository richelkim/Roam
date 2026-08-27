import Link from 'next/link'

const navItems = [
  { href: '/hikes', label: 'Hikes' },
  { href: '/how-it-works', label: 'How It Works' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <Link className="site-wordmark" href="/" aria-label="Roam home">Roam</Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <Link className="nav-cta" href="/hikes">Join a Hike <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
