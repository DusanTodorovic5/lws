export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      preload: ['json', 'shell', 'html', 'md', 'yaml', 'go']
    }
  }
})
