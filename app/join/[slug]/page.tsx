import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHike } from '../../content/hikes'
import { tallyUrlFor } from '../../content/rsvp'
import { formatHikeNumber } from '../../content/site'
import { RsvpPreview } from './rsvp-preview'

export const metadata: Metadata = { title: 'Join a Hike' }

export default async function JoinPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hike = getHike(slug)
  if (!hike || hike.state !== 'upcoming') notFound()
  const tallyUrl = tallyUrlFor(hike.title, hike.slug)

  return (
    <main className="join-page page-shell">
      <header>
        <p className="technical blue">{formatHikeNumber(hike.number)} · RSVP</p>
        <h1>Join<br />{hike.title}</h1>
        <p>{hike.date} · {hike.time}<br />{hike.location}</p>
      </header>
      <aside className="setup-notice">
        <strong>TALLY FORM NOT CONNECTED</strong>
        <p>The production Tally URL and private organizer recipient email still need to be configured.</p>
      </aside>
      {tallyUrl ? (
        <iframe className="tally-frame" src={tallyUrl} title={`RSVP for ${hike.title}`} />
      ) : (
        <RsvpPreview hikeName={hike.title} hikeId={hike.slug} />
      )}
    </main>
  )
}
