/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "shikimori.one",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
