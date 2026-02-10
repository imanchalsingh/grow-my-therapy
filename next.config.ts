import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "careersinpsychology.org",
      },
      {
        protocol: "https",
        hostname: "summitcounseling.org",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "wallpaperbat.com",
      },
    ],
  },
};

export default nextConfig;
