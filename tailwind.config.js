// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#e6f0fe',
          200: '#cde1fe',
          300: '#a5cafd',
          400: '#4c95fa',
          500: '#0663e5',
          600: '#054fb9',
          700: '#033477',
          800: '#021e46',
          900: '#010f23',
        },
        gray: {
          ...colors.gray,
          1000: '#030600',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: `${theme('colors.primary.700')}`,
              },
              code: { color: theme('colors.primary.500') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.pink.600'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: `${theme('colors.primary.300')}`,
              },
              code: { color: theme('colors.pink.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.pink.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
