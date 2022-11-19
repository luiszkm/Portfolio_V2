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
        hostname: 'github.com' || 'aws.amazon.com',
        pathname: '/**',
      },
    ],
  },

}

module.exports = nextConfig


