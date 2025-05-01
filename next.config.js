/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to avoid de-optimization warning
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
  // Adjust this to match your GitHub repository name if not using username.github.io
  // basePath: '/portfolio_3',
};

module.exports = nextConfig;
