import type { Metadata } from 'next'
import { HikeCard } from '../components/hike-card'
import { hikes } from '../content/hikes'

export const metadata: Metadata = {
  title: 'Hikes',
  description: 'Upcoming Roam hikes around Toronto and the Greater Toronto Area.',
}

export default function HikesPage() {
  const visibleHikes = hikes.filter((hike) => hike.state !== 'completed')

  return (
    <main>
      <header className="index-hero page-shell">
        <div className="index-title-row">
          <p className="technical blue">UPCOMING / FULL</p>
          <p className="technical">TORONTO + GTA</p>
        </div>
        <h1>Hikes</h1>
        <p className="index-intro">A few hours outside, a clear plan, and a group of people who were strangers that morning.</p>
      </header>

      <aside className="sample-notice page-shell" aria-label="Sample content notice">
        <strong>SAMPLE CONTENT</strong>
        <p>These V1 listings are fictional demonstrations. No hike or route on this site is currently confirmed or verified.</p>
      </aside>

      <section className="hike-index page-shell" aria-label="Hike listings">
        {visibleHikes.map((hike) => <HikeCard key={hike.slug} hike={hike} />)}
      </section>
    </main>
  )
}
