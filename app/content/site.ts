export const SITE_NAME = 'UTM Hike' as const

export function formatHikeNumber(number: string) {
  return `${SITE_NAME} ${number}`
}
