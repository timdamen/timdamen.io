import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Speaking' })

export default function Page() {
  return (
    <div>
      <section className="relative lg:flex">
        <div className="space-y-2 pt-6 md:space-y-5 lg:w-[55%]">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Speaking
          </h1>
          <p className="text-xl font-bold prose dark:prose-invert">
            I love to share my toughts and experiences with others. From{' '}
            <a href="#free-guest-lectures">guest lectures</a> to conferences or meetups, from live
            coding on stage to key notes - I'm always open for a conversation. On this page you can
            find out which <a href="#what-i-talk-about">subject I cover</a>,{' '}
            <a href="#previous-events">where I've spoken</a> before, and how to{' '}
            <a href="#inquiry">invite me</a> to your event.
          </p>
        </div>
        <figure className="w-full mt-5 transition-transform ease-in-out hover:rotate-0 lg:absolute lg:-right-10 lg:-top-10 lg:ml-10 lg:block lg:w-5/12 lg:rotate-3 xl:-right-32 xl:w-6/12">
          <Image
            alt="Tim Damen on stage"
            src="/static/images/meetup-abnamro.webp"
            loading="lazy"
            width={600}
            height={400}
          />
          <figcaption className="mt-2 text-sm">
            At Passionate People x ABN AMRO Front-end meetup in Amsterdam (2023)
          </figcaption>
        </figure>
      </section>

      <section className="prose max-w-[575px] pb-8 pt-8 text-xl dark:prose-invert xl:col-span-2">
        <h2 id="what-i-talk-about">What I talk about</h2>
        These are some of the subjects I cover in my talks:
        <ul>
          <li>
            <b>Frontend Development</b>
            <br /> Architecture, automating life cycle management, automated testing, quality
            assurance
          </li>
          <li>
            <b>HTML & CSS</b>
            <br /> Scematics, animations, advanced CSS
          </li>
          <li>
            <b>Javascript</b>
            <br /> History, frameworks, run-time vs build-time compontents, performance
          </li>
          <li>
            <b>Web accessibility</b>
            <br /> WCAG, ARIA, automated accessibility testing, ethics on the web
          </li>
          <li>
            <b>Leading a team of engineers</b>
            <br /> How to lead a happy and productive team, decision making, stakeholder management
            and leadership
          </li>
        </ul>
        <h2 id="previous-events">Previous events</h2>
        <p>
          I have spoken at various events, including meetups, conferences, and guest lectures. Some
          of the events I've spoken at include:{' '}
          <a
            href="https://www.meetup.com/frontend-developer-meetup-amsterdam/events/294224306/"
            target="_blank"
          >
            PP x ABN Front-end meetup
          </a>
          ,{' '}
          <a href="https://www.youtube.com/watch?v=i4TkUfmw7Rk">
            DevCon
          </a>
          ,{' '}
          <a href="https://frontendnation.com/">
            FrontendNation
          </a>{' '}
          and quest lectures at{' '}
          <a href="https://www.hogeschoolrotterdam.nl/" target="_blank">
            Rotterdam University of Applied Sciences
          </a>
          .
        </p>
        <figure>
          <iframe
            title="Tim Damen live coding at DevCon in Amsterdam (2024)"
            className="h-[350px] max-h-full w-full max-w-full"
            src="https://www.youtube.com/embed/i4TkUfmw7Rk"
          ></iframe>

          <figcaption className="text-sm">Live coding at DevCon in Amsterdam (2024)</figcaption>
        </figure>
        <h2 id="free-guest-lectures">Free guest lectures</h2>
        <p>
          Booking a quest lecture as an educational institution is free of charge. I'm happy to
          share my knowledge and experience with students. These lectures are usually 1-2 hours long
          and can be customised to your needs. Feel free to <Link href="/contact">reach out</Link>{' '}
          for more information.
        </p>
        <h2 id="inquiry">Inquiry</h2>
        <p>
          If you'd like me at your event, <Link href="/contact">contact me</Link>. Try to be as
          detailed as posible: budget, date, location, target audience, audience expected size etc
          can help me get back to you sooner.
        </p>
      </section>
    </div>
  )
}
