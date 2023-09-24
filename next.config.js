/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'vision-creations-vmgfq.ondigitalocean.app', 'mdbcdn.b-cdn.net', 'images.unsplash.com'],
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});

module.exports = nextConfig;
