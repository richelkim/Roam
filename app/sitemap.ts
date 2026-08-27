import { hikes } from './content/hikes'

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roam-hike.vercel.app'

export default async function sitemap() {
  const hikePages = hikes.filter((hike) => hike.state !== 'completed').map((hike) => ({
    url: `${baseUrl}/hikes/${hike.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/hikes', '/how-it-works'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...hikePages]
}
