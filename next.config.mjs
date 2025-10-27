/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d27c8oqoqzlxum.cloudfront.net",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
