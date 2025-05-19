/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
};

module.exports = nextConfig;