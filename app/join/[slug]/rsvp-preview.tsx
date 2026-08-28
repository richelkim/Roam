'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SITE_NAME } from '../../content/site'

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export function RsvpPreview({ hikeName, hikeId }: { hikeName: string; hikeId: string }) {
  const [previewed, setPreviewed] = useState(false)
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set())
  const [validationAttempt, setValidationAttempt] = useState(0)

  const isInvalid = (name: string) => invalidFields.has(name)
  const invalidClass = (name: string) => isInvalid(name) ? `is-invalid validation-shake-${validationAttempt % 2}` : undefined

  function handleFieldChange(event: ChangeEvent<FormControl>) {
    const field = event.currentTarget
    if (field.name && field.checkValidity()) {
      setInvalidFields((current) => {
        if (!current.has(field.name)) return current
        const next = new Set(current)
        next.delete(field.name)
        return next
      })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const requiredControls = Array.from(event.currentTarget.elements).filter(
      (element): element is FormControl =>
        (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) && element.required,
    )
    const invalidControls = requiredControls.filter((control) => !control.checkValidity())

    if (invalidControls.length > 0) {
      setInvalidFields(new Set(invalidControls.map((control) => control.name)))
      setValidationAttempt((attempt) => attempt + 1)
      const firstInvalid = invalidControls[0]
      requestAnimationFrame(() => {
        firstInvalid.focus({ preventScroll: true })
        firstInvalid.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'center',
        })
      })
      return
    }

    setInvalidFields(new Set())
    setPreviewed(true)
  }

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
    <form className="rsvp-form" noValidate onSubmit={handleSubmit}>
      <input type="hidden" name="hike_id" value={hikeId} />
      <input type="hidden" name="hike_name" value={hikeName} />
      <label><span className="field-label">Name <span className="required-mark" aria-hidden="true">*</span></span><input required name="name" autoComplete="name" className={invalidClass('name')} aria-invalid={isInvalid('name') || undefined} aria-describedby={isInvalid('name') ? 'name-error' : undefined} onChange={handleFieldChange} />{isInvalid('name') && <span className="form-error" id="name-error">This field is required.</span>}</label>
      <label><span className="field-label">Email <span className="required-mark" aria-hidden="true">*</span></span><input required type="email" name="email" autoComplete="email" className={invalidClass('email')} aria-invalid={isInvalid('email') || undefined} aria-describedby={isInvalid('email') ? 'email-error' : undefined} onChange={handleFieldChange} />{isInvalid('email') && <span className="form-error" id="email-error">This field is required.</span>}</label>
      <label>Instagram or phone <span>optional</span><input name="contact" /></label>
      <label><span className="field-label">Hiking experience <span className="required-mark" aria-hidden="true">*</span></span><select required name="experience" defaultValue="" className={invalidClass('experience')} aria-invalid={isInvalid('experience') || undefined} aria-describedby={isInvalid('experience') ? 'experience-error' : undefined} onChange={handleFieldChange}><option value="" disabled>Choose one</option><option>New to hiking</option><option>A few hikes</option><option>Regular hiker</option></select>{isInvalid('experience') && <span className="form-error" id="experience-error">This field is required.</span>}</label>
      <label><span className="field-label">Transportation situation <span className="required-mark" aria-hidden="true">*</span></span><select required name="transportation" defaultValue="" className={invalidClass('transportation')} aria-invalid={isInvalid('transportation') || undefined} aria-describedby={isInvalid('transportation') ? 'transportation-error' : undefined} onChange={handleFieldChange}><option value="" disabled>Choose one</option><option>Transit only</option><option>I can drive</option><option>I would need a ride</option><option>Not sure yet</option></select>{isInvalid('transportation') && <span className="form-error" id="transportation-error">This field is required.</span>}</label>
      <label><span className="field-label">Emergency contact name <span className="required-mark" aria-hidden="true">*</span></span><input required name="emergency_contact_name" className={invalidClass('emergency_contact_name')} aria-invalid={isInvalid('emergency_contact_name') || undefined} aria-describedby={isInvalid('emergency_contact_name') ? 'emergency-contact-name-error' : undefined} onChange={handleFieldChange} />{isInvalid('emergency_contact_name') && <span className="form-error" id="emergency-contact-name-error">This field is required.</span>}</label>
      <label><span className="field-label">Emergency contact phone number <span className="required-mark" aria-hidden="true">*</span></span><input required type="tel" name="emergency_contact_phone" className={invalidClass('emergency_contact_phone')} aria-invalid={isInvalid('emergency_contact_phone') || undefined} aria-describedby={isInvalid('emergency_contact_phone') ? 'emergency-contact-phone-error' : undefined} onChange={handleFieldChange} />{isInvalid('emergency_contact_phone') && <span className="form-error" id="emergency-contact-phone-error">This field is required.</span>}</label>
      <div className="risk-section">
        <details className="risk-disclosure">
          <summary>Participation &amp; Assumption of Risk</summary>
          <p>Hiking and outdoor activities involve inherent risks, including uneven terrain, slips and falls, changing weather, wildlife, physical exertion, and travel to and from trail locations. By joining a {SITE_NAME} outing, you confirm that you are participating voluntarily and are responsible for deciding whether the hike is appropriate for your fitness and experience level. You agree to follow reasonable safety instructions from the hike organizers and to bring suitable footwear, clothing, water, and any personal medication or equipment you may need.</p>
        </details>
        <div className="checkbox-field">
          <label className={`check-label ${isInvalid('risk_acknowledgement') ? `is-invalid validation-shake-${validationAttempt % 2}` : ''}`}><input required type="checkbox" name="risk_acknowledgement" aria-invalid={isInvalid('risk_acknowledgement') || undefined} aria-describedby={isInvalid('risk_acknowledgement') ? 'risk-acknowledgement-error' : undefined} onChange={handleFieldChange} /> <span>I have read and understand the Participation &amp; Assumption of Risk statement above. <span className="required-mark" aria-hidden="true">*</span></span></label>
          {isInvalid('risk_acknowledgement') && <span className="form-error" id="risk-acknowledgement-error">This field is required.</span>}
        </div>
      </div>
      <label>Anything the hike lead should know? <span>optional</span><textarea name="notes" rows={4} /></label>
      <button className="button-primary" type="submit">PREVIEW RSVP <span aria-hidden="true">↗</span></button>
      <p className="technical form-footnote">PREVIEW ONLY · THIS FORM WILL NOT SEND</p>
    </form>
  )
}
