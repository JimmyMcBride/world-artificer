/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Any experimental features can be added here
  },
  transpilePackages: ['@world-artificer/shared'],
  eslint: {
    // Run ESLint on these directories during production builds
    dirs: ['src', 'pages', 'components', 'lib', 'utils'],
  },
  typescript: {
    // Enable type checking during builds
    ignoreBuildErrors: false,
  },
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;