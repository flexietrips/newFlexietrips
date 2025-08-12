/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovable-growth-4951fded8b.media.strapiapp.com',
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
