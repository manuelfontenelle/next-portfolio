/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

// module.exports = nextConfig
module.exports = {
	nextConfig,

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	// ACTIVER POUR EXPORT PROJET
	images: {
		unoptimized: true,
	},
	// assetPrefix: "./",
}
