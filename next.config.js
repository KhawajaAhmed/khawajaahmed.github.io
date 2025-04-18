/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Adjust this to match your GitHub repository name if not using username.github.io
  // basePath: '/portfolio_3',
};

module.exports = nextConfig;
