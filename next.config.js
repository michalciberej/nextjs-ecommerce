/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freepngimg.com',
        port: '',
        pathname: '/thumb/**',
      },
    ],
  },}

module.exports = nextConfig
