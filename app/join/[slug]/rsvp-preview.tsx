'use client'

import { useState } from 'react'

export function RsvpPreview({ hikeName, hikeId }: { hikeName: string; hikeId: string }) {
  const [previewed, setPreviewed] = useState(false)

  if (previewed) {
    return (
      <div className="form-message" role="status">
        <p className="technical blue">PREVIEW COMPLETE</p>
        <h2>Nothing was submitted.</h2>
        <p>Add the production Tally URL and Richel’s private notification email before accepting RSVPs.</p>
      </div>
    )
  }

  return (
    <form className="rsvp-form" onSubmit={(event) => { event.preventDefault(); setPreviewed(true) }}>
      <input type="hidden" name="hike_id" value={hikeId} />
      <input type="hidden" name="hike_name" value={hikeName} />
      <label>Name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      <label>Instagram or phone <span>optional</span><input name="contact" /></label>
      <label>Hiking experience<select required name="experience" defaultValue=""><option value="" disabled>Choose one</option><option>New to hiking</option><option>A few hikes</option><option>Regular hiker</option></select></label>
      <label>Transportation situation<select required name="transportation" defaultValue=""><option value="" disabled>Choose one</option><option>Transit only</option><option>I can drive</option><option>I would need a ride</option><option>Not sure yet</option></select></label>
      <label>Anything Richel should know? <span>optional</span><textarea name="notes" rows={4} /></label>
      <label className="check-label"><input required type="checkbox" name="risk_acknowledgement" /> <span>I understand that ordinary outdoor activities involve risks including weather, uneven terrain, slips, and falls.</span></label>
      <button className="button-primary" type="submit">PREVIEW RSVP <span aria-hidden="true">↗</span></button>
      <p className="technical form-footnote">PREVIEW ONLY · THIS FORM WILL NOT SEND</p>
    </form>
  )
}
