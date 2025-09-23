/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Disable ESLint during build
  },
  // Your other settings here
};
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./cloudflare-loader.js",
    domains: ["blakshade.com"], // adjust if you use www
  },
};

module.exports = nextConfig;