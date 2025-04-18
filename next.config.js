/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for username.github.io repositories
  // They are served from the root domain
};

module.exports = nextConfig;
