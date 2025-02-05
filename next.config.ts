import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com/",
      "encrypted-tbn0.gstatic.com",
      "cdn-cjhkj.nitrocdn.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during production builds
  },
};

export default nextConfig;
