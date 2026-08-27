import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RouteMark } from '../../components/route-mark'
import { getHike, hikes } from '../../content/hikes'

export function generateStaticParams() {
  return hikes.filter((hike) => hike.state !== 'completed').map((hike) => ({ slug: hike.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const hike = getHike(slug)
  if (!hike) return {}
  return {
    title: `${hike.title} · Roam ${hike.number}`,
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
            <span>Roam {hike.number}</span>
            <span>{hike.registrationLabel}</span>
          </div>
          <h1>{hike.title}</h1>
          <p>{hike.location}</p>
        </div>
        <span className="sample-stamp technical">SAMPLE EVENT · ROUTE NOT VERIFIED</span>
      </section>

      <aside className="sample-notice page-shell detail-notice">
        <strong>THIS IS A FICTIONAL PLACEHOLDER</strong>
        <p>Do not use this listing for navigation or travel. Details below demonstrate the intended content structure only.</p>
      </aside>

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
            <span className="button-disabled" aria-disabled="true">THIS SAMPLE IS FULL</span>
          )}
        </div>
      </section>

      <section className="route-section">
        <div className="route-poster">
          <div className="route-poster-top technical"><span>ILLUSTRATIVE TRACE</span><span>NOT FOR NAVIGATION</span></div>
          <RouteMark />
          <div className="route-poster-bottom"><strong>{hike.distance}</strong><span className="technical">SAMPLE / UNVERIFIED</span></div>
        </div>
        <div className="route-copy">
          <p className="technical blue">ROUTE</p>
          <h2>Route coming soon.</h2>
          <p>No public Strava route has been added. When a verified route is available, Richel can paste either its public embed or external URL into this hike’s record.</p>
          {hike.stravaEmbedUrl ? (
            <iframe className="strava-frame" src={hike.stravaEmbedUrl} title={`${hike.title} Strava route`} loading="lazy" />
          ) : hike.stravaRouteUrl ? (
            <a className="text-link" href={hike.stravaRouteUrl} target="_blank" rel="noreferrer">OPEN IN STRAVA ↗</a>
          ) : (
            <span className="route-placeholder technical">NO ROUTE ADDED</span>
          )}
        </div>
      </section>

      <section className="logistics page-shell section-space">
        <div className="section-heading horizontal">
          <div><p className="technical blue">BEFORE YOU GO</p><h2>Useful details.</h2></div>
          <p className="technical">SAMPLE INFORMATION</p>
        </div>
        <div className="logistics-grid">
          <article><span className="technical">MEETING</span><p>{hike.meetingInformation}</p></article>
          <article><span className="technical">GETTING THERE</span><p>{hike.transitInformation}</p></article>
          <article><span className="technical">BRING</span><ul>{hike.whatToBring.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="detail-gallery" aria-label="Illustrative hike photographs">
        {hike.galleryImages.map((src, index) => (
          <div className="detail-gallery-image" key={src}>
            <Image src={src} alt={`Illustrative sample field photograph ${index + 1} for ${hike.title}`} fill sizes="50vw" className="cover-image" />
          </div>
        ))}
      </section>

      <section className="detail-join page-shell">
        <p className="technical blue">Roam {hike.number} · SAMPLE</p>
        <h2>For people who like going somewhere.</h2>
        {hike.state === 'upcoming' ? <Link className="button-primary" href={`/join/${hike.slug}`}>JOIN THIS HIKE <span aria-hidden="true">↗</span></Link> : null}
      </section>
    </main>
  )
}
