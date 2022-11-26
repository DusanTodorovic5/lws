export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxtjs/tailwindcss',
    // (_, nuxt) => {
    //   nuxt.hook('tailwindcss:config', function (tailwindConfig) { console.log(tailwindConfig) })
    // }
  ],
  content: {
    highlight: {
      preload: ['json', 'shell', 'html', 'md', 'yaml', 'go']
    }
  }
})
