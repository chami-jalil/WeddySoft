/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static site generation
  images: {
    unoptimized: true, // required if you use <Image />
  },

};

module.exports = nextConfig;
