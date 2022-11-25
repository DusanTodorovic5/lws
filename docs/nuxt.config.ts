export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  content: {
    highlight: {
      preload: ['json', 'shell', 'html', 'md', 'yaml', 'go']
    }
  }
})
