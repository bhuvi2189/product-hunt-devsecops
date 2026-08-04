// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['@/styles/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Explicitly set to use JavaScript
  typescript: {
    strict: false,
    typeCheck: false,
  },

  // Set source directory
  srcDir: 'src/',

  // Build for Docker/Kubernetes
  nitro: {
    compatibilityDate: '2025-06-01',
    preset: 'node-server',
  },

  modules: ['@vueuse/motion/nuxt'],

  app: {
    head: {
      title: 'Product Hunt',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
});
