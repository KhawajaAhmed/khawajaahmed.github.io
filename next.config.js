/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: 'export',
  images: {
    unoptimized: true,
    // Adding domains for remote images if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Uncomment this if you're deploying to a GitHub Pages project site
  // basePath: '/portfolio_3',
};

module.exports = nextConfig;
