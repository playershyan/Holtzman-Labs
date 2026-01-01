import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vera.lk" },
      {
        protocol: "https",
        hostname: "i-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app",
      },
    ],
  },
};

export default nextConfig;
