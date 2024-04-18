// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  strapi: {
    url: 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql",
      }
    },
  },
})
