/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // allow images from your Strapi server
  },
};

module.exports = nextConfig;
