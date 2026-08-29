import type { RouteGeometry } from '../components/route-trace'

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
  routeGeometry: RouteGeometry
  routeLabel: string
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
    routeGeometry: {
      viewBox: '0 0 360 220',
      d: 'M26 173 L41 158 L38 142 L54 128 L72 132 L86 118 L80 101 L95 86 L113 91 L129 77 L142 60 L159 66 L164 83 L181 92 L199 84 L204 65 L221 53 L238 59 L250 77 L266 85 L282 78 L296 62 L312 68 L324 86 L316 104 L299 113 L280 108 L264 120 L269 138 L252 150 L233 143 L216 155 L198 161 L182 150 L164 155 L147 166 L128 160 L111 173 L92 167 L76 179 L58 175 L44 185',
      start: [26, 173],
      end: [44, 185],
    },
    routeLabel: 'LOOP / RIVER + MEADOW',
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
    routeGeometry: {
      viewBox: '0 0 360 220',
      d: 'M34 180 L48 167 L45 149 L62 138 L80 142 L94 128 L88 111 L104 99 L123 105 L139 91 L154 72 L171 78 L184 63 L200 70 L209 90 L225 101 L240 95 L252 78 L269 84 L283 102 L276 120 L292 132 L312 125 L325 140 L317 157 L299 166 L281 160 L263 171 L244 164 L226 177 L207 170 L189 181 L170 174 L151 187 L132 179 L114 190 L95 184 L78 194 L60 189 L47 198',
      start: [34, 180],
      end: [47, 198],
    },
    routeLabel: 'RAVINE / CREEK + CEDAR',
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
    routeGeometry: {
      viewBox: '0 0 360 220',
      d: 'M30 170 L47 151 L43 132 L62 116 L82 121 L99 104 L117 110 L134 91 L154 97 L171 76 L190 83 L207 65 L226 74 L241 96 L260 103 L279 91 L298 102 L315 124 L307 145 L288 156 L269 150 L250 165 L230 158 L211 174 L191 168 L171 182 L151 175 L132 188 L111 181 L92 192 L72 185 L53 194',
      start: [30, 170],
      end: [53, 194],
    },
    routeLabel: 'RIVER / MUD + SNACKS',
  },
]

export const hikeListUsefulDetails = {
  meetingInformation: 'The exact meeting point is sent after your RSVP is confirmed.',
  transitInformation: 'Transit and carpool details are shared before each hike.',
  whatToBring: [
    'Water',
    'A weather-ready layer',
    'Trail shoes that can get muddy',
    'A snack',
    'Any personal medication',
  ],
}

export function getHike(slug: string) {
  return hikes.find((hike) => hike.slug === slug)
}
