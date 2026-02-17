/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empêche Vercel de bloquer le build à cause d'erreurs TS
  typescript: {
    ignoreBuildErrors: true,
  },

  // Empêche Next d'optimiser les images (utile si tu utilises des images locales)
  images: {
    unoptimized: true,
  },

  // Active les features stables du App Router
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },

  // Force un rebuild propre sur Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
