import { permanentRedirect } from 'next/navigation'

export default function RetiredHikePage() {
  permanentRedirect('/hikes')
}
