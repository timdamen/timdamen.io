import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between transition-transform ease-in hover:rotate-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 164 148"
              height="75"
              width="75"
              className="text-gray-900 transition-colors ease-in hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
            >
              <g
                transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path d="M0 740 l0 -740 820 0 820 0 0 740 0 740 -820 0 -820 0 0 -740z m640 75 l0 -295 80 0 80 0 0 296 0 296 168 -3 c166 -4 168 -4 235 -37 117 -58 171 -156 171 -312 0 -182 -78 -295 -231 -335 -46 -12 -135 -15 -450 -15 l-393 0 0 55 0 55 105 0 105 0 0 295 0 295 65 0 65 0 0 -295z"></path>
                <path d="M930 760 l0 -240 71 0 c94 0 146 17 190 61 40 40 59 97 59 179 0 168 -78 240 -260 240 l-60 0 0 -240z"></path>{' '}
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 transition-all ease-in-out hover:text-primary-600 hover:underline dark:text-gray-100 dark:hover:text-primary-300 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
