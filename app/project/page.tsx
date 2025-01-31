import Link from "next/link";
import { Github } from "lucide-react";
import React from "react";

export default function Projects() {
  const projects = [
    { name: "ViviLink-App", repo: "CailBzd/ViviLink-App" },
    { name: "LocalMarketPlace", repo: "CailBzd/LocalMarketPlace" },
    { name: "ViviLink-Server", repo: "CailBzd/ViviLink-Server" },
    { name: "my-building-project", repo: "CailBzd/my-building-project" },
    { name: "mon-projet-finance", repo: "CailBzd/mon-projet-finance" },
    { name: "nextjs-cctp-builder", repo: "CailBzd/nextjs-cctp-builder" },
    { name: "MyTemplate", repo: "CailBzd/MyTemplate" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Titre de la page */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-12 rounded-lg shadow-lg mb-8">
        <h1 className="text-5xl font-bold">Mes Projets</h1>
        <p className="text-lg mt-2">Quelques projets sur lesquels j’ai travaillé récemment.</p>
      </div>

      {/* Liste des projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
            <p className="text-gray-500 mt-2">Dépôt GitHub :</p>
            <Link
              href={`https://github.com/${project.repo}`}
              target="_blank"
              className="flex items-center mt-2 text-blue-600 hover:text-blue-800"
            >
              <Github size={20} className="mr-2" />
              {project.repo}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
