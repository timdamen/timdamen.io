import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <>
      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
      </section>

      <section className="prose max-w-[575px] pb-8 pt-8 text-xl dark:prose-invert xl:col-span-2">
        <p className="font-bold">
          I’m always open for a conversation, be it for questions, event speaking invitations, or
          feedback on my work. Here’s how you can connect with me.
        </p>
        <h2>Preferred Contact Method</h2>
        <p>
          For the quickest and most detailed reponse, drop me a line at{' '}
          <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>, Or directly plan a
          meeting with me via <a href="https://cal.com/timdamen">cal.com/timdamen</a>.
        </p>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href={siteMetadata.twitter} rel="noopener noreferrer" target="_blank">
              @timdamen_io on X
            </a>
          </li>
          <li>
            <a href={siteMetadata.linkedin} rel="noopener noreferrer" target="_blank">
              Tim Damen on LinkedIn
            </a>
          </li>
        </ul>
        <p>Looking forward to hearing from you! ❤️</p>
      </section>
    </>
  )
}
