/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'he'],
    defaultLocale: 'he',
    localeDetection: false,
  },
}

const createNextPluginPreval = require('next-plugin-preval/config')
const withNextPluginPreval = createNextPluginPreval()

module.exports = withNextPluginPreval(nextConfig)
