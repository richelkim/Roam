import Image from 'next/image'
import Link from 'next/link'
import { HomeAbout } from './components/home-about'
import { SITE_NAME } from './content/site'

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

    </>
  )
}
