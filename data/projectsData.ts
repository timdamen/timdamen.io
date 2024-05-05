interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'web-accessibility.io',
    description: `Plain language summary of the Web Content Accessibility Guidelines.`,
    imgSrc: '/static/images/web-accessibility-io.webp',
    href: 'https://www.web-accessibility.io/playbook',
  },
  {
    title: 'nicoleortizfranco.nl',
    description: `Portfolio website for my wife.`,
    imgSrc: '/static/images/portfolio-website.webp',
    href: 'https://nicole-ortiz-franco.netlify.app/',
  },
]

export default projectsData
