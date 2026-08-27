import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <p className="technical blue">404 / OFF TRAIL</p>
      <h1>This path<br />doesn’t go anywhere.</h1>
      <Link className="button-primary" href="/">BACK TO Roam <span aria-hidden="true">↗</span></Link>
    </main>
  )
}
