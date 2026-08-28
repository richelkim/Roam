import Image from 'next/image'
import Link from 'next/link'
import { HomeAbout } from './components/home-about'
import { hikes } from './content/hikes'
import { formatHikeNumber, SITE_NAME } from './content/site'

const featured = hikes.find((hike) => hike.slug === 'riverwood-loop')!

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <Image
          src="/images/roam-hero-mountain.png"
          alt="Hikers crossing a meadow beside a mountain lake"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-wash" />
        <HomeAbout />
        <Link className="hero-rsvp-card" href="/hikes">
          <span className="hero-rsvp-card__top">
            <span>JOIN A HIKE</span>
            <span aria-hidden="true">↗</span>
          </span>
          <strong>RSVP</strong>
        </Link>
        <div className="hero-copy">
          <h1 id="home-title">{SITE_NAME}</h1>
          <div className="hero-bottom">
            <p className="hero-tagline">For people who<br />like going places.</p>
          </div>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="featured-details">
          <div className="featured-heading-row">
            <p className="technical featured-label">UPCOMING HIKE</p>
            <span className="status-dot">REGISTRATION OPEN</span>
          </div>
          <p className="hike-number technical">{formatHikeNumber(featured.number)}</p>
          <h2 id="featured-title">{featured.title}</h2>
          <p className="featured-location">{featured.location}</p>
          <div className="spec-grid">
            <div><span>DATE</span><strong>{featured.dateShort}</strong></div>
            <div><span>START</span><strong>{featured.time}</strong></div>
            <div><span>DISTANCE</span><strong>{featured.distance}</strong></div>
            <div><span>DURATION</span><strong>{featured.duration}</strong></div>
            <div><span>ELEVATION</span><strong>{featured.elevation}</strong></div>
            <div><span>DIFFICULTY</span><strong>{featured.difficulty}</strong></div>
          </div>
          <p className="featured-description">{featured.shortDescription}</p>
          <div className="action-row">
            <Link className="button-primary" href={`/hikes/${featured.slug}`}>
              VIEW HIKE <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/hikes">ALL HIKES →</Link>
          </div>
        </div>
      </section>

    </>
  )
}
