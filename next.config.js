/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    DISCORD_CHANNEL_ID: "915846415031357440",
  },
  images: {
    domains: ["www.arweave.net"],
  },
};
