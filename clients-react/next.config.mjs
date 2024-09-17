/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://boasorte.teddybackoffice.com.br/:path*', // Redireciona as requisições para a API
          },
        ];
      },
};

export default nextConfig;
