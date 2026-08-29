export function tallyUrlFor(hikeName: string, hikeId: string) {
  const base = process.env.NEXT_PUBLIC_TALLY_FORM_URL
  if (!base) return null

  try {
    const url = new URL(base)
    url.searchParams.set('hike_name', hikeName)
    url.searchParams.set('hike_id', hikeId)
    return url.toString()
  } catch {
    return null
  }
}
