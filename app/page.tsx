import Image from 'next/image'
import Link from 'next/link'
import { HOME_ROUTE_TRACE, RouteTrace } from './components/route-trace'
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

      <section className="intro page-grid section-space">
        <div className="intro-copy">
          <h2>We take the long way out of the city.</h2>
          <p>
            {SITE_NAME} is a Toronto + GTA hiking club started by students at the
            University of Toronto. We welcome all hiking levels (we’re
            definitely not experts ourselves). The club began primarily
            because we think it’s important to make it easier to get outside,
            meet new people, and have good conversations along the way.
          </p>
          <p>
            We believe in the power of doing things together, and hope group
            hikes can create a collective environment where people get to meet
            each other. It’s about having fun and getting some exercise!
          </p>
        </div>
        <RouteTrace path={HOME_ROUTE_TRACE} distance="8.5 KM" className="intro-route" />
      </section>

      <section className="how-preview page-shell section-space" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="technical blue">HOW IT WORKS</p>
          <h2 id="how-title">Pick a trail.<br />We’ll sort the rest.</h2>
          <Link className="text-link" href="/how-it-works">THE FULL DETAILS →</Link>
        </div>
        <ol className="steps-list">
          <li><span>01</span><div><h3>Find a hike</h3><p>Read the pace, distance, transit plan, and what the day is likely to feel like.</p></div></li>
          <li><span>02</span><div><h3>Put your name down</h3><p>Share a few details through a short RSVP so the group can plan well.</p></div></li>
          <li><span>03</span><div><h3>Show up and hike</h3><p>Meet at the shared point, walk together, and leave with a new part of the city.</p></div></li>
        </ol>
      </section>

    </>
  )
}
