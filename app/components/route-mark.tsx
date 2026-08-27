export function RouteMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`route-mark ${className}`} viewBox="0 0 360 220" role="img" aria-label="Abstract illustrative route line">
      <path d="M18 178C50 151 54 94 95 97c42 3 35 58 77 57 48-2 28-90 82-101 33-7 42 23 43 51 1 36 24 44 46 31" />
      <circle cx="18" cy="178" r="5" />
      <circle cx="343" cy="135" r="5" />
    </svg>
  )
}
