'use client'

import { useState } from 'react'

export function RsvpPreview({ hikeName, hikeId }: { hikeName: string; hikeId: string }) {
  const [previewed, setPreviewed] = useState(false)

  if (previewed) {
    return (
      <div className="form-message" role="status">
        <p className="technical blue">PREVIEW COMPLETE</p>
        <h2>Nothing was submitted.</h2>
        <p>Add the production Tally URL and private organizer notification email before accepting RSVPs.</p>
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
      <label>Emergency contact name<input required name="emergency_contact_name" /></label>
      <label>Emergency contact phone number<input required type="tel" name="emergency_contact_phone" /></label>
      <div className="risk-section">
        <details className="risk-disclosure">
          <summary>Participation &amp; Assumption of Risk</summary>
          <p>Hiking and outdoor activities involve inherent risks, including uneven terrain, slips and falls, changing weather, wildlife, physical exertion, and travel to and from trail locations. By joining a Roam hike, you confirm that you are participating voluntarily and are responsible for deciding whether the hike is appropriate for your fitness and experience level. You agree to follow reasonable safety instructions from the hike organizers and to bring suitable footwear, clothing, water, and any personal medication or equipment you may need.</p>
        </details>
        <label className="check-label"><input required type="checkbox" name="risk_acknowledgement" /> <span>I have read and understand the Participation &amp; Assumption of Risk statement above.</span></label>
      </div>
      <label>Anything the hike lead should know? <span>optional</span><textarea name="notes" rows={4} /></label>
      <button className="button-primary" type="submit">PREVIEW RSVP <span aria-hidden="true">↗</span></button>
      <p className="technical form-footnote">PREVIEW ONLY · THIS FORM WILL NOT SEND</p>
    </form>
  )
}
