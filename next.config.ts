import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Permet un bon fonctionnement sur Vercel
  trailingSlash: true,  // Ajoute un "/" à la fin des URLs (utile si besoin d’un chemin absolu)
};

export default nextConfig;
