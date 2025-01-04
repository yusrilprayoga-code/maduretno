import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.digitaldesa.com",
        pathname: "/**",
      },
      {
        hostname: "aceternity.com",
      }
    ],
  },
};

export default nextConfig;
