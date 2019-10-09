import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/composition-api'],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */

  build: {
    babel: {
      presets({ isServer }) {
        return [
          [require.resolve('babel-preset-vca-jsx')],
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              targets: isServer ? { node: 'current' } : { ie: '9' },
            },
          ],
        ]
      },
    },
  },
}

export default config
