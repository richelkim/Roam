import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHike } from '../../content/hikes'
import { RsvpPreview } from './rsvp-preview'

export const metadata: Metadata = { title: 'Join a Hike' }

function tallyUrlFor(hikeName: string, hikeId: string) {
  const base = process.env.NEXT_PUBLIC_TALLY_FORM_URL
  if (!base) return null
  try {
    const url = new URL(base)
    url.searchParams.set('hike_name', hikeName)
    url.searchParams.set('hike_id', hikeId)
    return url.toString()
  } catch {
    return null
  }
}

export default async function JoinPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hike = getHike(slug)
  if (!hike || hike.state !== 'upcoming') notFound()
  const tallyUrl = tallyUrlFor(hike.title, hike.slug)

  return (
    <main className="join-page page-shell">
      <header>
        <p className="technical blue">Roam {hike.number} · RSVP</p>
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
