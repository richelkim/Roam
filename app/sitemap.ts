export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utmhike.vercel.app'

export default async function sitemap() {
  const routes = ['', '/hikes', '/how-it-works'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
