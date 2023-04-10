/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api",
        destination: "http://127.0.0.1:3001",
      },
    ];
  };
  return {
    rewrites,
  };
};

