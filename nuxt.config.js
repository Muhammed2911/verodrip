export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'Verodrip',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  loading: {
    color: '#EA871B',
    height: '4px',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/axios',
    { src: '~/plugins/vue-toast', ssr: false },
    { src: '~/plugins/validation.js', ssr: false },
    { src: '~/plugins/vue-agile.js', ssr: false },
    { src: '~/plugins/vue-selectbox.js', ssr: false },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-toast', ssr: false },
    { src: '~/plugins/vue-slick', ssr: false },
    { src: '~/plugins/country-code', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-vuex-localstorage',
    'cookie-universal-nuxt',
    [
      'nuxt-i18n',
      {
        lazy: true,
        loadLanguagesAsync: true,
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en/index.js',
          },
          {
            name: 'Russian',
            code: 'ru',
            iso: 'ru',
            file: 'ru/index.js',
          },
          {
            name: 'Turkish',
            code: 'tr',
            iso: 'tr',
            file: 'tr/index.js',
          },
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        fallbackLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
        rootRedirect: 'en',
      },
    ],
  ],

  styleResources: {
    scss: ['~/assets/css/_colors.scss'],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
  router: {
    routeNameSplitter: '/',
  },
}
