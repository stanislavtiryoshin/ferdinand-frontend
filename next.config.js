/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["127.0.0.1"],
  },
};

module.exports = nextConfig;
