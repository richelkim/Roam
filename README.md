# Roam

Roam is a Toronto + GTA hiking club made by students, for everyone.

## RSVP configuration

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_TALLY_FORM_URL`: the public Tally form URL. The hike name and ID are appended as query parameters.
- `RSVP_RECIPIENT_EMAIL`: the private organizer notification recipient. This is intentionally server-only and must not be exposed in client code.

Without a Tally URL, the site shows a clearly labelled, non-submitting RSVP preview.
is an internal preview until the production Tally form is connected and the organizers are ready to share it.
