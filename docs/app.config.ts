export default defineAppConfig({
  docus: {
    title: 'LWS',
    layout: 'docs',
    description: 'Access text, images, and other media with Nuxt and the Sanity headless CMS.',
    debug: false,
    cover: { src: '/assets/lws.png', alt: 'A screenshot of the Nuxt Sanity module.' },
    footer: {
      credits: false,
      iconLinks: [
        {
          icon: 'logos:github-icon',
          href: 'https://github.com/LWSSC/lws',
          label: 'Code repository'
        },
      ]
    },
  }
})
