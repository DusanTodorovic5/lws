export default defineAppConfig({
  docus: {
    title: 'LWS',
    layout: 'docs',
    description: 'Open source web service solution made for people',
    debug: false,
    cover: { src: 'https://repository-images.githubusercontent.com/559210047/139e6fe0-7dcb-4c6c-aca3-3aa13581f162' },
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
