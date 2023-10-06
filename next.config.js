/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "randomuser.me",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
