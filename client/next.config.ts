import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.IP_LOCAL ? [process.env.IP_LOCAL] : [],
};

export default nextConfig;
