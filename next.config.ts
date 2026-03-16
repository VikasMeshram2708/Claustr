import type { NextConfig } from "next";
import "./app/env";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "ui-avatars.com",
      },
    ],
  },
  typedRoutes: true,
  cacheComponents: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
