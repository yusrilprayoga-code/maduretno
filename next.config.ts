import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
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
      },
      {
        hostname: "maduretno.kec-buluspesantren.kebumenkab.go.id",
      }
    ],
  },
};

export default nextConfig;
