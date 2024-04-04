import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div
        className="z-5 shapes absolute -left-7 top-[450px] z-10 hidden w-2/5 max-w-96 text-gray-900 transition-colors ease-in dark:text-gray-100 xl:flex lg:w-3/12 xl:top-[400px] xl:w-1/5"
        aria-hidden="true"
      >
        <svg
          className="transition-transform ease-in hover:-translate-x-1 hover:text-primary-600 dark:hover:text-primary-400"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="currentColor" />
        </svg>
        <svg
          className="transition-transform ease-in hover:-rotate-3 hover:text-primary-600 dark:hover:text-primary-400"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="currentColor" />
        </svg>
        <svg
          className="-ml-2.5 transition-transform ease-in hover:-rotate-3 hover:text-primary-600 dark:hover:text-primary-400"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,10 100,100 10,100" fill="currentColor" />
        </svg>
      </div>
      <div>
        <div className="relative mx-5 mb-10 mt-14 sm:mb-20 xl:mb-36 xl:mx-32">
          <div>
            <h1 className="text-4xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:leading-10 md:text-6xl md:leading-14">
              Hello, welcome! 👋
            </h1>
            <p className="mt-5 text-xl">
              I'm Tim Damen, a front-end developer, accessibility advocate, NX and Tailwind fan,
              developer experience enthusiast and team lead. Welcome to my blog.
            </p>
            <p className="mt-5 text-xl">
              <strong>
                Here, you'll discover{' '}
                <Link
                  href="/blog"
                  className="underline text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  my blog
                </Link>
                , learn more{' '}
                <Link
                  href="/about"
                  className="underline text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  about me
                </Link>
                , explore my public{' '}
                <Link
                  href="/speaking"
                  className="underline text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  speaking
                </Link>{' '}
                talks, and find out how to{' '}
                <Link
                  href="/speaking"
                  className="underline text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  contact me
                </Link>
                .
              </strong>
            </p>
            <div
              className="flex w-8/12 mx-auto mt-10 sm:w-5/12 lg:w-4/12 xl:hidden"
              aria-hidden="true"
            >
              <svg
                className="transition-transform ease-in hover:-translate-x-1 hover:text-primary-600 dark:hover:text-primary-400"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="currentColor" />
              </svg>
              <svg
                className="transition-transform ease-in hover:-rotate-3 hover:text-primary-600 dark:hover:text-primary-400"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" fill="currentColor" />
              </svg>
              <svg
                className="-ml-2.5 transition-transform ease-in hover:-rotate-3 hover:text-primary-600 dark:hover:text-primary-400"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="50,10 100,100 10,100" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-6 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:leading-10 md:text-4xl md:leading-14">
            Recent blog posts
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-600 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-600 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
