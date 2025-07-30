/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Disable ESLint during build
  },
  // Your other settings here
};

module.exports = nextConfig;