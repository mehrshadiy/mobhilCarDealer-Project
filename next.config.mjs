/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
        {
      protocol: 'https',
      hostname: 'cwebgostar.navaxcollege.com'
    }
    ]
  }
};

export default nextConfig;
