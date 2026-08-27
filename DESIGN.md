---
name: Roam
description: A Toronto hiking club presented like a small independent outdoor publication.
colors:
  paper: "#F2F0E8"
  ink: "#161713"
  forest: "#2F4635"
  forest-deep: "#17251C"
  electric-blue: "#1647FF"
  mist: "#D9DDD0"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(4rem, 17vw, 13rem)"
    fontWeight: 800
    lineHeight: 0.78
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  control: "999px"
  image: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.control}"
    padding: "14px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "13px 19px"
---

# Design System: Roam

## Overview

**Creative North Star: “The Weekend Field Issue”**

Roam feels like a small-run outdoor magazine assembled by people who actually went outside together. The title-case wordmark is a deliberate identity rule. The system adapts Trova’s image-led pacing and bold hierarchy, then strips away the luxury-expedition polish: local terrain is photographed with restraint, logistics sit beside expressive headlines, and the electric-blue route trace becomes the recurring editorial mark.

The personality is youthful, social, direct, and slightly imperfect without resorting to fake distress. **Key Characteristics:** oversized sans-serif wordmarks; full-bleed nature photography; warm paper fields; blue links and route marks; technical mono labels; hard editorial rules; almost no card chrome.

## Colors

Warm paper and forest neutrals carry the publication; electric blue is a deliberate contemporary interruption reserved for action, routes, links, labels, and active states.

**The Blue Means Movement Rule.** Electric blue appears only where the visitor can act, navigate, or follow a route-like line.

## Typography

**Display Font:** Geist (with Arial fallback)  
**Body Font:** Geist (with Arial fallback)  
**Label/Mono Font:** Geist Mono

Large headlines are blunt and compressed by scale rather than a decorative typeface. Small measurements and logistics use mono only because they are technical data.

**The Two Registers Rule.** Human invitations use confident sans-serif; dates, coordinates, distances, and hike numbers use the compact mono register.

## Layout

The layout inherits Trova’s full-width image opening, alternating editorial sections, repeated hike entries, numbered process, photo sequence, and closing photographic call to action. A twelve-column desktop grid collapses to a single deliberate reading column on mobile. Sections alternate between dense data bands and generous visual pauses; horizontal rules replace rounded card containers. V1 has no Archive surface.

## Elevation & Depth

The system uses no decorative shadows. Depth comes from photographic layering, tonal fields, image cropping, and text placed directly over darkened photographs with controlled contrast.

**The Flat Publication Rule.** If an element needs separation, use spacing, a rule, or a change of field—not a floating panel.

## Shapes

Images are nearly square-cornered and feel printed into the page. Small pills are reserved for status and primary actions. Route graphics use a single irregular electric-blue stroke with round endpoints.

## Components

### Buttons

Primary actions are compact electric-blue pills with direct verbs. Ghost actions are transparent with a one-pixel ink border. Both have visible keyboard focus and a small directional arrow.

### Cards / Containers

Hike entries are editorial rows or image-plus-data compositions separated by rules. They do not sit inside soft rounded startup cards.

### Navigation

The wordmark returns Home. Desktop navigation is a compact horizontal index containing Hikes, How It Works, and Join a Hike; mobile navigation wraps into a paper-coloured field with the primary action kept visible.

## Do's and Don'ts

### Do:

- **Do** treat route state, distance, date, and difficulty as first-class content.
- **Do** let one strong photograph own a viewport or section.
- **Do** mark illustrative and unverified sample content near the relevant claim.
- **Do** use restrained transitions and a single route-drawing moment.

### Don't:

- **Don't** introduce glossy gradients, fake film scratches, glass panels, or decorative shadows.
- **Don't** use commercial travel-agency language or athletic performance framing.
- **Don't** place every section in rounded cards.
- **Don't** imply that a sample hike, route, or registration endpoint is confirmed.
- **Don't** set the Roam name in all caps.
