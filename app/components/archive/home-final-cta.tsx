import Image from 'next/image'
import Link from 'next/link'

/**
 * Archived homepage section. Keep unrendered until the final outing CTA is restored.
 */
export function HomeFinalCta() {
  return (
    <section className="final-cta">
      <Image
        src="/images/river-break.jpg"
        alt="Four people sitting together beside an Ontario river"
        fill
        sizes="100vw"
        className="cover-image final-cta-image"
      />
      <div className="cta-wash" />
      <div className="cta-glass" aria-hidden="true" />
      <div className="final-cta-copy">
        <p className="technical">NEXT OUTING</p>
        <h2>
          Come for the trail.
          <br />
          Stay for the people.
        </h2>
        <Link className="button-primary inverse" href="/hikes">
          JOIN A HIKE <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
