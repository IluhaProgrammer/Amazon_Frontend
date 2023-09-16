/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL
    },
    images: {domains: ["loremflickr.com", "www.aptronixindia.com", "papik.pro", "cloudflare-ipfs.com"]}
}

module.exports = nextConfig
