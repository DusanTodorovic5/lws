export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
<<<<<<< HEAD:nuxt.config.ts
  modules: ['@nuxtjs/tailwindcss'],
=======
  modules: [
    '@nuxtjs/tailwindcss',
    // (_, nuxt) => {
    //   nuxt.hook('tailwindcss:config', function (tailwindConfig) { console.log(tailwindConfig) })
    // }
  ],
>>>>>>> main:docs/nuxt.config.ts
  content: {
    highlight: {
      preload: ['json', 'shell', 'html', 'md', 'yaml', 'go']
    }
  }
})
