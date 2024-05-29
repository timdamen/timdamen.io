import { ImageResponse } from 'next/og'
import Logo from '@/data/logo.svg'
import { ogImageSchema } from '@/lib/validations/og'

const regularFont = fetch(new URL('/public/assets/fonts/Inter-Regular.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

const boldFont = fetch(new URL('/public/assets/fonts/Inter-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export const runtime = 'edge'

export async function GET(req) {
  try {
    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140 ? `${values.heading.substring(0, 140)}...` : values.heading

    const { mode } = values

    const fontSize = heading.length > 100 ? '60px' : '70px'

    const [regularFontData, boldFontData] = await Promise.all([regularFont, boldFont])

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: '#fff',
            background:
              values.type === 'Blog' ? 'linear-gradient(90deg, #054fb9 0%, #4c95fa 100%)' : 'linear-gradient(90deg, #111827 0%, #313e5f 100%)',
          }}
        >
          <span tw="flex items-center justify-between">
            <Logo tw="w-[95px] h-[87px]" />
          </span>
          <div tw="flex flex-col flex-1 py-10 mt-10">
            <div
              tw="flex"
              style={{
                fontWeight: '700',
                marginLeft: '-5px',
                fontSize,
              }}
            >
              {heading}
            </div>
            {values.tags && (
              <div tw="flex align-middle items-center text-xl h-7 tracking-tight font-bold mt-3" style={{ fontFamily: 'Inter' }}>
                <span tw="text-3xl mr-2">🏷️</span> 
                <span tw="bg-white text-blue-900 px-2 rounded">
                  {values.tags.split(' ')[0]}
                </span>
                {values.tags.split(' ')[1] && (
                  <span tw="bg-white text-blue-900 px-2 rounded ml-3">
                    {values.tags.split(' ')[1]}
                  </span>
                )}
                {values.tags.split(' ')[2] && (
                  <span tw="bg-white text-blue-900 px-2 rounded ml-3">
                    {values.tags.split(' ')[2]}
                  </span>
                )}
                {values.tags.split(' ')[3] && (
                  <span tw="bg-white text-blue-900 px-2 rounded ml-3">
                    {values.tags.split(' ')[3]}
                  </span>
                )}
                {values.tags.split(' ')[4] && (
                  <span tw="bg-white text-blue-900 px-2 rounded ml-3">
                    {values.tags.split(' ')[4]}
                  </span>
                )}
              </div>
            )}
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-2xl" style={{ fontFamily: 'Inter', fontWeight: 'normal' }}>
              www.timdamen.io
            </div>
            {values.type && values.author && (
              <div tw="flex items-center">
                <img tw="h-14 w-14 rounded-full mr-3" src='https://www.timdamen.blog/_next/image?url=%2Fstatic%2Fimages%2Favatar.webp&w=96&q=100' alt='profile picture of Tim Damen'/>
                <div tw="flex flex-col text-2xl" style={{ fontFamily: 'Inter' }}>
                  <span>{values.type} by {values.author}</span>
                  <span>@timdamen_io</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: regularFontData,
            weight: 400,
          },
          {
            name: 'Inter',
            data: boldFontData,
            weight: 700,
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
