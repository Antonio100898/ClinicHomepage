/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'he', 'ar', 'am', 'ti'],
    defaultLocale: 'he',
    localeDetection: false,
  },
}

const createNextPluginPreval = require('next-plugin-preval/config')
const withNextPluginPreval = createNextPluginPreval()

module.exports = withNextPluginPreval(nextConfig)
