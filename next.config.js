/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ne PAS définir distDir ici : par défaut c'est ".next" (minuscule)
  // Si tu veux le forcer : distDir: '.next',
};

module.exports = nextConfig;

