import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css"; // Assure-toi que Tailwind est bien importé ici.

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Développeur passionné par le web et les technologies modernes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        {/* 🔹 Navigation */}
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-xl font-bold">Mon Portfolio</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Accueil</Link></li>
                <li><Link href="/project" className="hover:underline">Projets</Link></li>
                <li><Link href="/about" className="hover:underline">À propos</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 🔹 Contenu principal */}
        <main className="container mx-auto p-6">{children}</main>

        {/* 🔹 Footer */}
        <footer className="bg-gray-900 text-white py-4 mt-6 text-center">
          <p>© {new Date().getFullYear()} Mon Portfolio | Développé par Pierre BIZARD</p>
          <div className="mt-2">
            <a href="https://github.com/CailBzd" target="_blank" className="mx-2 hover:text-blue-400">GitHub</a>
            <a href="https://linkedin.com/in/pbizard" target="_blank" className="mx-2 hover:text-blue-400">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
