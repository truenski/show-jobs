/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  async redirects() {
    return [
      {
        source: "http://localhost:3000/*",
        destination: "/test/jobs",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
