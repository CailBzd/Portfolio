import Link from "next/link";
import { Github } from "lucide-react";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Porfolio",
      repo: "CailBzd/Portfolio",
      description: "Mon portfolio personnel, présentant mes projets et compétences.",
      technologies: "Next.js, Tailwind CSS, Vercel"
    },
    {
      name: "ViviLink-App",
      repo: "CailBzd/ViviLink-App",
      description: "Un réseau social de quartier permettant aux habitants d'échanger des services et des événements locaux.",
      technologies: "React Native, Firebase, TypeScript"
    },
    {
      name: "LocalMarketPlace",
      repo: "CailBzd/LocalMarketPlace",
      description: "Une plateforme pour vendre et acheter des produits locaux facilement.",
      technologies: "React, Node.js, MongoDB"
    },
    {
      name: "mon-projet-finance",
      repo: "CailBzd/mon-projet-finance",
      description: "Application de gestion financière pour suivre ses dépenses et investissements.",
      technologies: "Vue.js, Firebase, Chart.js"
    },
    {
      name: "TODO-List-CQRS",
      repo: "CailBzd/TODO-List-CQRS-",
      description: "Un gestionnaire de tâches implémentant le pattern CQRS pour améliorer la scalabilité.",
      technologies: ".NET Core, React, PostgreSQL"
    },
    {
      name: "EventPlanner",
      repo: "CailBzd/EventPlanner",
      description: "Application permettant d'organiser et gérer des événements en ligne.",
      technologies: "Angular, NestJS, MySQL"
    }
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
            <Link
              href={`https://github.com/${project.repo}`}
              target="_blank"
              className="text-xl font-semibold text-blue-500 flex items-center"
            >
              <Github size={20} className="mr-2" />
              {project.name}
            </Link>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <p className="text-gray-500 mt-2">Technologies : {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
