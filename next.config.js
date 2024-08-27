/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/thumbnail',
      },
      {
        protocol: 'https',
        hostname: '"api.microlink.io"',
        port: '',
        pathname: '/',
      },
    ],
  },
}

module.exports = nextConfig
