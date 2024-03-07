/** @format */
type: "module"
const nextConfig = {
  experimental: {
     transpilePackages: ["problematic-package", "other-problematic-package", "etc", "..."],
   },
 }


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
        },
      ],
    },
  }