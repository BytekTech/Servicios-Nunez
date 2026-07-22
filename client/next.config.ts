import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.IP_LOCAL ? [process.env.IP_LOCAL] : [],
  images: {
    // AVIF primero: retiene más detalle por byte que WebP, así las fotos de los
    // heroes se ven más nítidas al mismo tamaño servido (con fallback a WebP).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
