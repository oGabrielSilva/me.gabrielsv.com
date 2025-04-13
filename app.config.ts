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
  },
})
