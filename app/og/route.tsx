import { ImageResponse } from 'next/og'
import { SITE_NAME } from '../content/site'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'For people who like going places.'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full justify-between bg-[#F2F0E8] text-[#161713] p-16">
        <div tw="flex text-6xl font-bold tracking-tight">{SITE_NAME}</div>
        <div tw="flex flex-row w-full items-end justify-between">
          <h2 tw="flex w-3/4 text-7xl font-bold tracking-tight leading-none">{title}</h2>
          <div tw="flex text-2xl text-[#1647FF]">Toronto · GTA</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
