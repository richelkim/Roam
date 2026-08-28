export type HikeState = 'upcoming' | 'full' | 'completed'

export type Hike = {
  slug: string
  number: string
  title: string
  location: string
  date: string
  dateShort: string
  time: string
  distance: string
  duration: string
  elevation: string
  difficulty: string
  state: HikeState
  registrationLabel: string
  shortDescription: string
  description: string
  meetingInformation: string
  transitInformation: string
  whatToBring: string[]
  heroImage: string
  imageAlt: string
  stravaEmbedUrl?: string
  stravaRouteUrl?: string
}

export const hikes: Hike[] = [
  {
    slug: 'riverwood-loop',
    number: '001',
    title: 'Riverwood Loop',
    location: 'Mississauga, Ontario',
    date: 'Saturday, September 19, 2026',
    dateShort: 'SEP 19, 2026',
    time: '10:00 AM',
    distance: '8.5 KM',
    duration: 'APPROX. 2.5 HRS',
    elevation: '85 M EST.',
    difficulty: 'EASY–MODERATE',
    state: 'upcoming',
    registrationLabel: 'Registration open',
    shortDescription: 'A relaxed loop through woodland, meadow, and the Credit River valley—close enough for a day trip, far enough to feel elsewhere.',
    description: 'We’ll follow an 8.5 km loop through the Riverwood area at a conversational pace, pausing by the river and meadow.',
    meetingInformation: 'The exact meeting point will be emailed after RSVP.',
    transitInformation: 'A transit and carpool note will be shared with participants. The plan assumes departure from central Toronto.',
    whatToBring: ['1–1.5 L of water', 'Weather-ready layer', 'Trail shoes that can get muddy', 'A snack', 'Any personal medication'],
    heroImage: '/images/riverwood-river.jpg',
    imageAlt: 'Photograph of a wooded river bend in the Greater Toronto Area',
  },
  {
    slug: 'cedar-ridge-path',
    number: '002',
    title: 'Cedar Ridge Path',
    location: 'Scarborough, Ontario',
    date: 'Saturday, October 03, 2026',
    dateShort: 'OCT 03, 2026',
    time: '9:30 AM',
    distance: '7.2 KM',
    duration: 'APPROX. 2 HRS',
    elevation: '70 M EST.',
    difficulty: 'EASY',
    state: 'full',
    registrationLabel: 'Full',
    shortDescription: 'An east-end ravine walk with cedar shade, creek crossings, and an easy pace.',
    description: 'A low-key east-end ravine walk shaped around cedar shade, creek crossings, and an easy group pace.',
    meetingInformation: 'Meeting details are shared with registered participants.',
    transitInformation: 'Transportation details are shared with registered participants.',
    whatToBring: ['Water', 'Weather-ready layer', 'Comfortable trail shoes'],
    heroImage: '/images/roam-hero.jpg',
    imageAlt: 'Photograph of friends walking in a leafy ravine',
  },
  {
    slug: 'credit-river-pilot',
    number: '000',
    title: 'Credit River Pilot',
    location: 'Peel Region, Ontario',
    date: 'Sunday, June 14, 2026',
    dateShort: 'JUN 14, 2026',
    time: '11:00 AM',
    distance: '6.4 KM',
    duration: 'APPROX. 2 HRS',
    elevation: '60 M EST.',
    difficulty: 'EASY',
    state: 'completed',
    registrationLabel: 'Completed',
    shortDescription: 'A completed entry retained in the collection but not surfaced in V1.',
    description: 'A low-key river walk, a little mud, and a long snack break.',
    meetingInformation: 'This outing is complete.',
    transitInformation: 'This outing is complete.',
    whatToBring: ['Water', 'Weather-ready layer'],
    heroImage: '/images/river-break.jpg',
    imageAlt: 'Photograph of friends resting beside an Ontario river',
  },
]

export function getHike(slug: string) {
  return hikes.find((hike) => hike.slug === slug)
}
