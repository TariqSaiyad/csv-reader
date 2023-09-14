/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_SITE_URL,
}

module.exports = nextConfig
