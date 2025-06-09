// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@storyblok/nuxt'],
  storyblok: {
    accessToken: 'Bl0sSr750NIQKoAnT7iKTAtt'
  },
  css: ['~/assets/main.css']
})