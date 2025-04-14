import ptBR from '~/assets/i18n/pt-BR'

export default defineAppConfig({
  theme: {
    default: 'dark',
    storage: {
      key: 'otech__theme',
    },
    html: {
      attr: 'data-bs-theme',
    },
  },
  i18n: {
    storage: {
      key: 'otech__lang',
    },
    default: ptBR,
    languages: [ptBR],
  },
  owner: {
    firstName: 'Gabriel',
    lastName: 'Silva',
    fullName: 'Gabriel Henrique da Silva',
    articlesURI: '',
    imageURI: '/image/gabriel-silva.webp',
    social: [
      {
        name: 'WhatsApp',
        uri: 'https://wa.me/+5587996494152?text=Oi%2C%20Gabriel',
        icon: 'fa-brands fa-whatsapp',
      },
      {
        name: 'LinkedIn',
        uri: 'https://linkedin.com/in/ogabriel-henrique',
        icon: 'fa-brands fa-linkedin',
      },
      {
        name: 'GitHub',
        uri: 'https://github.com/oGabrielSilva',
        icon: 'fa-brands fa-github',
      },
      {
        name: 'Twitter/X',
        uri: 'https://x.com/odev_gabriel',
        icon: 'fa-brands fa-x-twitter',
      },
      {
        name: 'E-mail',
        uri: 'mailto:odev.gabriel@gmail.com?subject=Oi%2C%20Gabriel%20%3A)',
        icon: 'fa-solid fa-envelope',
      },
    ],
    skills: [
      { name: 'Nuxt', icon: 'lineicons:nuxt', uri: 'https://nuxt.com/' },
      { name: 'Vue.js', icon: 'fa-brands:vuejs', uri: 'https://vuejs.org/' },
      { name: 'React.js', icon: 'fa6-brands:react', uri: 'https://react.dev/' },
      { name: 'Next.js', icon: 'ri:vercel-fill', uri: 'https://nextjs.org/' },
      {
        name: 'TypeScript',
        icon: 'akar-icons:typescript-fill',
        uri: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Nest.js',
        icon: 'vscode-icons:file-type-nestjs',
        uri: 'https://nestjs.com/',
      },
      {
        name: 'Node.js',
        icon: 'fa6-brands:node-js',
        uri: 'https://nodejs.org/',
      },
      {
        name: 'WordPress',
        icon: 'fa6-brands:wordpress',
        uri: 'https://wordpress.org/',
      },
    ],
  },
})
