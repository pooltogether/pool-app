const chalk = require("chalk")
const _ = require('lodash')

const isProduction = process.env.NODE_ENV === 'production'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  generateEtags: false,
  future: {
    strictPostcssConfiguration: true
  },
  compress: false,
  inlineImageLimit: 48, // make it tiny so that it doesn't inline,
  // exportTrailingSlash: true,
}


const allConfig =
  withBundleAnalyzer(
    {
      ...nextConfig,
      async redirects() {
        return [
          {
            source: '/prizes',
            destination: '/prizes/mainnet/PT-cDAI',
            permanent: true,
          }
        ]
      },
      publicRuntimeConfig: {
        locizeProjectId: process.env.NEXT_PUBLIC_LOCIZE_PROJECT_ID,
        locizeApiKey: process.env.NEXT_PUBLIC_LOCIZE_DEV_API_KEY,
        locizeVersion: process.env.NEXT_PUBLIC_LOCIZE_VERSION
      },
    })

console.log('')
console.log(chalk.green('Using next.js config options:'))
console.log(allConfig)
console.log('')

module.exports = allConfig
