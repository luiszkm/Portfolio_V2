/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolioluis.s3.sa-east-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '/xesque.rocketseat.dev',
        pathname: '/**',
      },
    ],
  },

}

module.exports = nextConfig


