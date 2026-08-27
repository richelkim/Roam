import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How to join a Roam hike, what to expect, and how the club keeps outings clear and welcoming.',
}

export default function HowItWorksPage() {
  return (
    <main>
      <header className="index-hero page-shell how-hero">
        <div className="index-title-row"><p className="technical blue">FIRST TIME?</p><p className="technical">START HERE</p></div>
        <h1>How it<br />works</h1>
        <p className="index-intro">You don’t need a membership, a full gear closet, or a friend who already knows everyone.</p>
      </header>

      <section className="how-main page-shell">
        <ol className="how-big-steps">
          <li><span>01</span><div><p className="technical blue">FIND YOUR DAY</p><h2>Choose the hike that sounds like you.</h2><p>Every listing shows distance, estimated time, elevation, difficulty, transit notes, and the social pace of the day.</p></div></li>
          <li><span>02</span><div><p className="technical blue">RSVP</p><h2>Tell Richel the useful bits.</h2><p>The short Tally form asks about experience, transportation, an optional contact, and anything that would help with planning. It also records which hike you chose.</p></div></li>
          <li><span>03</span><div><p className="technical blue">GET THE DETAILS</p><h2>Watch your inbox.</h2><p>Confirmed participants receive the exact meeting point, weather update, transportation plan, and final packing note privately before the hike.</p></div></li>
          <li><span>04</span><div><p className="technical blue">SHOW UP</p><h2>Walk at the group’s pace.</h2><p>Roam is about seeing somewhere new together. No one is scored, timed, or expected to perform expertise.</p></div></li>
        </ol>
      </section>

      <section className="split-image-copy">
        <div className="split-image"><Image src="/images/bridge-notes.jpg" alt="Photograph of hikers exchanging a folded trail note" fill sizes="50vw" className="cover-image" /></div>
        <div className="split-copy"><p className="technical blue">GOOD TO KNOW</p><h2>Ordinary outdoor risks are still real.</h2><p>Weather changes. Trails can be muddy, uneven, or slippery. Every RSVP includes an acknowledgement of ordinary outdoor-activity risks, and each confirmed hike should be reviewed against current conditions before details are sent.</p><Link className="button-primary" href="/hikes">SEE THE HIKES <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="faq page-shell section-space">
        <p className="technical blue">QUESTIONS PEOPLE ASK</p>
        <details><summary>Do I need hiking experience?</summary><p>No. Pick a difficulty that suits you and answer the experience question honestly so the group can plan well.</p></details>
        <details><summary>Is Roam only for U of T students?</summary><p>No. Roam is open to everyone, though the club is primarily shaped around University of Toronto students.</p></details>
        <details><summary>What if I don’t have a car?</summary><p>That’s expected. Each hike includes transportation planning, and the RSVP asks about transit, driving, and carpool availability.</p></details>
        <details><summary>Can I come alone?</summary><p>Yes. The point is to arrive without needing to know everyone already.</p></details>
      </section>
    </main>
  )
}
