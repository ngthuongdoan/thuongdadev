export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Thuong Da Dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Doan Ngoc Thuong Personal Website, focus on Frontend and Javascript Ecosystem. VueJS lover',
      },
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: 'Thuong Da Dev - Frontend Developer' },
      { property: 'og:site_name', content: 'Thuong Da Dev' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      {
        property: 'og:url',
        content: 'http://www.ngthuongdoan.com',
      },
      {
        property: 'og:image:url',
        content: 'http://www.ngthuongdoan.com/ngthuongdoan.jpg',
      },
      // Often the same as your meta description, but not always.
      {
        property: 'og:description',
        content:
          'Doan Ngoc Thuong Personal Website, focus on Frontend and Javascript Ecosystem. VueJS lover',
      },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:site',
        content: 'http://www.ngthuongdoan.com',
      },
      { name: 'twitter:title', content: 'Thuong Da Dev - Frontend Developer' },
      {
        name: 'twitter:description',
        content:
          'Doan Ngoc Thuong Personal Website, focus on Frontend and Javascript Ecosystem. VueJS lover',
      },
      // Your twitter handle, if you have one.
      {
        name: 'twitter:image:src',
        content: 'http://www.ngthuongdoan.com/ngthuongdoan.jpg',
      },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Thuong Da Dev - Frontend Developer' },
      {
        itemprop: 'description',
        content:
          'Doan Ngoc Thuong Personal Website, focus on Frontend and Javascript Ecosystem. VueJS lover',
      },
      {
        itemprop: 'image',
        content: 'http://www.ngthuongdoan.com/ngthuongdoan.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'http://www.ngthuongdoan.com' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/fullpage', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: '0.0.0.0',
  },
}
