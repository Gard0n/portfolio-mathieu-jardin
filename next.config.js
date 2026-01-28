/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/portfolio-mathieu-jardin",
  trailingSlash: true
};

module.exports = nextConfig;
