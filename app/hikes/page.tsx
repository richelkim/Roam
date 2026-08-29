import type { Metadata } from 'next'
import { HikeCard } from '../components/hike-card'
import { HikeUsefulDetails } from '../components/hike-useful-details'
import { hikeListUsefulDetails, hikes } from '../content/hikes'
import { SITE_NAME } from '../content/site'

export const metadata: Metadata = {
  title: 'Hikes',
  description: `Upcoming hikes from ${SITE_NAME} around Toronto and the Greater Toronto Area.`,
}

export default function HikesPage() {
  const visibleHikes = hikes.filter((hike) => hike.state !== 'completed')

  return (
    <main>
      <header className="index-hero page-shell">
        <div className="index-title-row">
          <p className="technical">TORONTO + GTA</p>
        </div>
        <h1>Hikes</h1>
      </header>

      <section className="hike-index page-shell" aria-label="Hike listings">
        {visibleHikes.map((hike) => <HikeCard key={hike.slug} hike={hike} />)}
      </section>

      <HikeUsefulDetails hike={hikeListUsefulDetails} contextLabel="FOR EVERY HIKE" />
    </main>
  )
}
