/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.im.ge",
      "im.ge",
      "drive.google.com"
    ],
  },
}

module.exports = nextConfig
