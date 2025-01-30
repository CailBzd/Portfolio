import React from "react";

interface Project {
    name: string;
    link: string;
    description: string;
  }
  
  const projects: Project[] = [
    { name: "ELA Build", link: "https://ela-build.com", description: "Logiciel SaaS pour la maîtrise d'œuvre." },
    { name: "ViviLink", link: "#", description: "Projet en cours..." },
  ];
  
  export default function Projects() {
    return (
      <div className="container">
        <h1>Mes projets</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h2>{project.name}</h2>
              </a>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  