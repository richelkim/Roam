import Image from 'next/image'
import Link from 'next/link'
import { RouteMark } from './components/route-mark'
import { hikes } from './content/hikes'

const featured = hikes.find((hike) => hike.slug === 'riverwood-loop')!

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <Image
          src="/images/roam-hero.jpg"
          alt="Editorial photograph of friends walking through an Ontario ravine"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-wash" />
        <div className="hero-copy">
          <h1 id="home-title">Roam</h1>
          <div className="hero-bottom">
            <p className="hero-tagline">For people who<br />like going somewhere.</p>
          </div>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="featured-photo">
          <Image
            src={featured.heroImage}
            alt={featured.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            className="cover-image"
          />
        </div>
        <div className="featured-details">
          <div className="featured-heading-row">
            <p className="technical featured-label">UPCOMING HIKE</p>
            <span className="status-dot">REGISTRATION OPEN</span>
          </div>
          <p className="hike-number technical">Roam {featured.number}</p>
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
            Roam is a Toronto + GTA hiking club started by students at the
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
        <RouteMark className="intro-route" />
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
          <li><span>03</span><div><h3>Show up and roam</h3><p>Meet at the shared point, walk together, and leave with a new part of the city.</p></div></li>
        </ol>
      </section>

      <section className="final-cta">
        <Image src="/images/river-break.jpg" alt="Four people sitting together beside an Ontario river" fill sizes="100vw" className="cover-image final-cta-image" />
        <div className="cta-wash" />
        <div className="cta-glass" aria-hidden="true" />
        <div className="final-cta-copy">
          <p className="technical">NEXT OUTING</p>
          <h2>Come for the trail.<br />Stay for the people.</h2>
          <Link className="button-primary inverse" href={`/hikes/${featured.slug}`}>JOIN A HIKE <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}
