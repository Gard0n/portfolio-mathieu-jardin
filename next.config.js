/** @type {import('next').NextConfig} */
const basePath = "/portfolio-mathieu-jardin";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  output: "export",
  images: {
    unoptimized: true
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  trailingSlash: true
};

module.exports = nextConfig;
