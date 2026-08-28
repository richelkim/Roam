'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { SITE_NAME } from '../content/site'
import { HOME_ROUTE_TRACE, RouteTrace } from './route-trace'

export function HomeAbout() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  function openAbout() {
    setIsOpen(true)
    dialogRef.current?.showModal()
    closeRef.current?.focus()
  }

  function closeAbout() {
    dialogRef.current?.close()
  }

  function restoreTriggerFocus() {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <>
      <button
        ref={triggerRef}
        className="hero-about-trigger"
        type="button"
        aria-haspopup="dialog"
        aria-controls="home-about-dialog"
        aria-expanded={isOpen}
        onClick={openAbout}
      >
        About {SITE_NAME}
      </button>

      <dialog
        ref={dialogRef}
        className="about-dialog"
        id="home-about-dialog"
        aria-labelledby="home-about-title"
        onClose={restoreTriggerFocus}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeAbout()
        }}
      >
        <div className="about-dialog__panel">
          <button
            ref={closeRef}
            className="about-dialog__close technical"
            type="button"
            aria-label={`Close About ${SITE_NAME}`}
            onClick={closeAbout}
          >
            CLOSE <span aria-hidden="true">×</span>
          </button>

          <section className="about-dialog__content page-grid">
            <div className="intro-copy">
              <h2 id="home-about-title">We take the long way out of the city.</h2>
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
            <RouteTrace
              path={HOME_ROUTE_TRACE}
              distance="8.5 KM"
              className="intro-route about-dialog__route"
            />
          </section>

          <section className="how-preview about-dialog__how" aria-labelledby="about-how-title">
            <div className="section-heading">
              <p className="technical blue">HOW IT WORKS</p>
              <h2 id="about-how-title">
                Pick a trail.
                <br />
                We’ll sort the rest.
              </h2>
              <Link className="text-link" href="/how-it-works">
                THE FULL DETAILS →
              </Link>
            </div>
            <ol className="steps-list">
              <li>
                <span>01</span>
                <div><h3>Find a hike</h3><p>Read the pace, distance, transit plan, and what the day is likely to feel like.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Put your name down</h3><p>Share a few details through a short RSVP so the group can plan well.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Show up and hike</h3><p>Meet at the shared point, walk together, and leave with a new part of the city.</p></div>
              </li>
            </ol>
          </section>
        </div>
      </dialog>
    </>
  )
}
