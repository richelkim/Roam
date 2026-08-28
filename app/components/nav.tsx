'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_NAME } from '../content/site'

export function Navbar() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <Link
      className="site-wordmark site-wordmark-only"
      href="/"
      aria-label={`${SITE_NAME} home`}
    >
      {SITE_NAME}
    </Link>
  )
}
