import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // standalone output for Docker
  // output: 'standalone',

  experimental: {
    typedRoutes: true,
  },

  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },

  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },

  images: {
    domains: ['placehold.co'],
    remotePatterns: [],
  },
}

export default nextConfig
