/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'firebasestorage.googleapis.com',
			port: '',
			pathname: '/v0/b/collection-c2379.appspot.com/o/**',
		  },
		],
	},
};

module.exports = nextConfig;
