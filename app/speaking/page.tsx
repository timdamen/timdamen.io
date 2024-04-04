import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Speaking' })

export default function Page() {
  return (
    <div>
      <section className="relative lg:flex">
        <div className="pt-6 space-y-2 lg:w-[55%] md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Speaking
          </h1>
          <p className="text-xl font-bold prose dark:prose-invert">
            I love to share my toughts and experiences with others. From guest lectures to
            conferences or meetups, from live coding on stage to key notes - I'm always open for a
            conversation. On this page you can find out which subject I cover, where I've spoken
            before, and how to invite me to your event.
          </p>
        </div>
        <figure className="w-full mt-5 transition-transform ease-in-out lg:rotate-3 lg:w-5/12 xl:w-6/12 lg:ml-10 lg:absolute lg:block lg:-right-10 xl:-right-32 lg:-top-10 hover:rotate-0">
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
        <h2>What I talk about</h2>
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
          </li>
        </ul>
        {/* <figure className="-ml-5">
          <img
            alt="Tim Damen on stage"
            className="w-[105%] max-w-none rotate-2"
            src="/static/images/meetup-abnamro.jpg"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm rotate-2">
            At Passionate People x ABN AMRO Front-end meetup in Amsterdam (2023). Photo by Nicole
            Ortiz Franco
          </figcaption>
        </figure> */}
        <h2>Previous events</h2>
        <p>
          If you'd like me at your event, email me. Please be as detailed as you can: budget, date,
          location, target audience, audience expected size etc can help me get back to you quicker.
        </p>
        <h2>Free guest lectures</h2>
        <p>
          Booking a quest lecture as an educational institution is free of charge. I'm happy to share
          my knowledge and experience with students. These lectures are usually 1-2 hours long
          and can be customised to your needs. Feel free to contact me for more information.
        </p>
        <h2>Inquiry</h2>
        <p>
          If you'd like me at your event, email me. Please be as detailed as you can: budget, date,
          location, target audience, audience expected size etc can help me get back to you quicker.
        </p>
      </section>
    </div>
  )
}
