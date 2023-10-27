/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrite
  /*
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/i/flow/login',
      },
    ]
  },*/
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/i/flow/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
