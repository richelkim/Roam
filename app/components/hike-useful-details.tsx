import type { Hike } from '../content/hikes'

type UsefulDetailsHike = Pick<
  Hike,
  'meetingInformation' | 'transitInformation' | 'whatToBring'
>

export function HikeUsefulDetails({ hike }: { hike: UsefulDetailsHike }) {
  return (
    <section className="logistics page-shell section-space">
      <div className="section-heading horizontal">
        <div><p className="technical blue">BEFORE YOU GO</p><h2>Useful details.</h2></div>
        <p className="technical">WHAT TO EXPECT</p>
      </div>
      <div className="logistics-grid">
        <article><span className="technical">MEETING</span><p>{hike.meetingInformation}</p></article>
        <article><span className="technical">GETTING THERE</span><p>{hike.transitInformation}</p></article>
        <article><span className="technical">BRING</span><ul>{hike.whatToBring.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
    </section>
  )
}
