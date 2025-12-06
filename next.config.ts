import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
    domains: ["img.youtube.com"],
    unoptimized: true,
}};

export default nextConfig;
