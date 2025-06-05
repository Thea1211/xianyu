/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.app'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
