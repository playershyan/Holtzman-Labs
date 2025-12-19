import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "vera.lk" },
      {
        protocol: "https",
        hostname: "i-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app",
      },
      { protocol: "https", hostname: "gym-demo-2-ten.vercel.app" },
      { protocol: "https", hostname: "gym-demo-1-tau.vercel.app" },
      { protocol: "https", hostname: "gym-demo-3-teal.vercel.app" },
      { protocol: "https", hostname: "aurium-one.vercel.app" },
      { protocol: "https", hostname: "restaurant-demo-1-alpha.vercel.app" },
      { protocol: "https", hostname: "restaurant-demo-2-umber.vercel.app" },
    ],
  },
};

export default nextConfig;
