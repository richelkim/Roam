import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HikeUsefulDetails } from '../../components/hike-useful-details'
import { RouteMark } from '../../components/route-mark'
import { getHike, hikes } from '../../content/hikes'
import { formatHikeNumber } from '../../content/site'

export function generateStaticParams() {
  return hikes.filter((hike) => hike.state !== 'completed').map((hike) => ({ slug: hike.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const hike = getHike(slug)
  if (!hike) return {}
  return {
    title: `${hike.title} · ${formatHikeNumber(hike.number)}`,
    description: hike.shortDescription,
  }
}

export default async function HikePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const hike = getHike(slug)
  if (!hike || hike.state === 'completed') notFound()

  return (
    <main>
      <section className="hike-hero">
        <Image src={hike.heroImage} alt={hike.imageAlt} fill loading="eager" fetchPriority="high" sizes="100vw" className="cover-image" />
        <div className="hero-wash detail" />
        <div className="hike-hero-copy">
          <div className="hike-hero-meta technical">
            <span>{formatHikeNumber(hike.number)}</span>
            <span>{hike.registrationLabel}</span>
          </div>
          <h1>{hike.title}</h1>
          <p>{hike.location}</p>
        </div>
      </section>

      <section className="hike-spec-band">
        <div><span>DATE</span><strong>{hike.date}</strong></div>
        <div><span>TIME</span><strong>{hike.time}</strong></div>
        <div><span>DISTANCE</span><strong>{hike.distance}</strong></div>
        <div><span>DURATION</span><strong>{hike.duration}</strong></div>
        <div><span>ELEVATION</span><strong>{hike.elevation}</strong></div>
        <div><span>DIFFICULTY</span><strong>{hike.difficulty}</strong></div>
      </section>

      <section className="story-block page-grid section-space">
        <p className="section-kicker technical blue">THE DAY</p>
        <div className="story-copy">
          <h2>River, meadow, a little mud.</h2>
          <p>{hike.description}</p>
          {hike.state === 'upcoming' ? (
            <Link className="button-primary" href={`/join/${hike.slug}`}>JOIN THIS HIKE <span aria-hidden="true">↗</span></Link>
          ) : (
            <span className="button-disabled" aria-disabled="true">THIS HIKE IS FULL</span>
          )}
        </div>
      </section>

      <section className="route-section">
        <div className="route-poster">
          <div className="route-poster-top technical"><span>RIVERWOOD LOOP</span><span>ROUTE 001</span></div>
          <RouteMark />
          <div className="route-poster-bottom"><strong>{hike.distance}</strong><span className="technical">LOOP / RIVER + MEADOW</span></div>
        </div>
        <div className="route-copy">
          <p className="technical blue">ROUTE</p>
          <h2>Route coming soon.</h2>
          <p>No public Strava route has been added. The hike lead can add either a public embed or external URL to this hike’s record when it’s ready.</p>
          {hike.stravaEmbedUrl ? (
            <iframe className="strava-frame" src={hike.stravaEmbedUrl} title={`${hike.title} Strava route`} loading="lazy" />
          ) : hike.stravaRouteUrl ? (
            <a className="text-link" href={hike.stravaRouteUrl} target="_blank" rel="noreferrer">OPEN IN STRAVA ↗</a>
          ) : (
            <span className="route-placeholder technical">NO ROUTE ADDED</span>
          )}
        </div>
      </section>

      <HikeUsefulDetails hike={hike} />
    </main>
  )
}
