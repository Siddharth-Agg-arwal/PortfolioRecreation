/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    trailingslash: true,
}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'prabhavkhandelwal.com',
          port: '',
          pathname: '/assets/img/work/boldvoice.png**',
        },
      ],
    },
  }
