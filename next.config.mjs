/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    remotePatterns: [{ hostname: 'k.kakaocdn.net' }, { hostname: 'lh3.googleusercontent.com' }]
  }
};

export default nextConfig;
