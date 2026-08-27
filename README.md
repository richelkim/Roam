# Roam

For people who like going somewhere.

Roam is a Toronto-area hiking club website built with Next.js. V1 includes Home, Hikes, individual hike pages, How It Works, and an RSVP handoff prepared for Tally.

## Content model

The single typed Hikes collection lives in `app/content/hikes.ts`. Each record supports:

- `upcoming`, `full`, and `completed` states
- date, time, location, distance, duration, elevation, and difficulty
- meeting, transportation, and packing information
- photographs
- optional `stravaEmbedUrl` or `stravaRouteUrl`

Completed entries remain available in the collection for future use but are not surfaced in V1.

## RSVP configuration

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_TALLY_FORM_URL`: the public Tally form URL. The hike name and ID are appended as query parameters.
- `RSVP_RECIPIENT_EMAIL`: Richel’s private notification recipient. This is intentionally server-only and must not be exposed in client code.

Without a Tally URL, the site shows a clearly labelled, non-submitting RSVP preview.

## Development

```bash
pnpm install
pnpm dev
```

## Sample-content policy

All bundled events, route information, and photographs are illustrative sample content. No route is presented as verified, and sample meeting information must never be used for navigation.
