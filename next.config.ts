import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Permet un bon fonctionnement sur Vercel
  trailingSlash: true,  // Ajoute un "/" à la fin des URLs (utile si besoin d’un chemin absolu)
  
  // Si tu utilises le dossier 'app' pour la structure du projet
  experimental: {
    appDir: true, // Active la gestion de dossier 'app'
  },
};

export default nextConfig;
