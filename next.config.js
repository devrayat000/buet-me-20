// const nextPwa = require('next-pwa')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, {}) {
    return config
  }
}

module.exports = nextConfig

// module.exports = nextPwa({
//   ...nextConfig,
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: false,
//   }
// })
