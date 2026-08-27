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
  galleryImages: string[]
  imageAlt: string
  isSample: boolean
  routeVerified: boolean
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
    description: 'We’ll follow an illustrative 8.5 km loop through the Riverwood area at a conversational pace, pausing by the river and meadow. This listing demonstrates how a Roam outing will be presented. The event is not currently confirmed and the route has not been field-verified.',
    meetingInformation: 'Sample only: the exact meeting point would be emailed after RSVP. Never travel to a sample meeting point.',
    transitInformation: 'A transit and carpool note would be shared with confirmed participants. The sample plan assumes departure from central Toronto.',
    whatToBring: ['1–1.5 L of water', 'Weather-ready layer', 'Trail shoes that can get muddy', 'A snack', 'Any personal medication'],
    heroImage: '/images/riverwood-river.jpg',
    galleryImages: ['/images/bridge-notes.jpg', '/images/river-break.jpg'],
    imageAlt: 'Illustrative sample photograph of a wooded river bend in the Greater Toronto Area',
    isSample: true,
    routeVerified: false,
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
    registrationLabel: 'Sample listing · full',
    shortDescription: 'A sample east-end ravine walk with cedar shade, creek crossings, and an easy pace.',
    description: 'This fictional listing demonstrates the Full state in the shared Hikes collection. It is not an announced Roam event.',
    meetingInformation: 'No meeting point: this is sample content only.',
    transitInformation: 'Sample transit details would appear here for a confirmed event.',
    whatToBring: ['Water', 'Weather-ready layer', 'Comfortable trail shoes'],
    heroImage: '/images/roam-hero.jpg',
    galleryImages: ['/images/bridge-notes.jpg'],
    imageAlt: 'Illustrative sample photograph of friends walking in a leafy ravine',
    isSample: true,
    routeVerified: false,
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
    registrationLabel: 'Sample completed entry',
    shortDescription: 'An illustrative completed entry retained in the collection but not surfaced in V1.',
    description: 'This is fictional sample content demonstrating the Completed state in the shared Hikes collection. It is not a record of a real club event.',
    meetingInformation: 'Completed sample content. No meeting details are active.',
    transitInformation: 'Completed sample content. No transportation plan is active.',
    whatToBring: ['Completed sample packing list'],
    heroImage: '/images/river-break.jpg',
    galleryImages: ['/images/riverwood-river.jpg', '/images/bridge-notes.jpg'],
    imageAlt: 'Illustrative sample photograph of friends resting beside an Ontario river',
    isSample: true,
    routeVerified: false,
  },
]

export function getHike(slug: string) {
  return hikes.find((hike) => hike.slug === slug)
}
