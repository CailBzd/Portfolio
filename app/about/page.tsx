import { Briefcase, MapPin, Calendar, BookOpen } from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "ELA Software",
      title: "Product Owner / Responsable d'équipe",
      date: "Oct. 2016 - Aujourd'hui (8 ans 4 mois)",
      location: "Vertou, Pays de la Loire, France",
      description: [
        "Encadrement d'une équipe de développeurs et gestion des projets stratégiques.",
        "Planification détaillée des projets et suivi des livraisons.",
        "Développement et maintenance de solutions innovantes en ReactJS, TypeScript, .Net Core, PostgreSQL, Docker et Kubernetes.",
        "Migration vers le Web avec des technologies modernes.",
        "Création d'outils internes (CRM, tableaux de bord) avec VueJS et .Net Core.",
        "Développement d'une application web de gestion de licences.",
        "Veille technologique et amélioration continue des processus."
      ],
    },
    {
      company: "iXAPACK",
      title: "Informaticien industriel",
      date: "Juin 2016 - Sept. 2016 (4 mois)",
      location: "Le Temple, France",
      description: [
        "Développement d'interfaces sur des machines de conditionnement (VB6).",
        "Programmation d'un équipement d'identification (codes à barres) en Java."
      ],
    },
    {
      company: "Nexio SAS",
      title: "Alternant Analyste Programmeur",
      date: "Sept. 2013 - Mai 2016 (2 ans 9 mois)",
      location: "IUT Blagnac, France",
      description: [
        "Développement d'un logiciel de simulation de compatibilité électromagnétique."
      ],
    },
    {
      company: "Microgat Informatique",
      title: "Développeur Web",
      date: "Mai 2011 - Juin 2011 (2 mois)",
      location: "Parthenay, France",
      description: [
        "Maintenance informatique.",
        "Développement d'un site intranet en HTML/CSS."
      ],
    }
  ];

  const formations = [
    {
      school: "Orsys",
      degree: "Formation Management d'Équipe",
      date: "Novembre 2024",
      location: "Formation externe",
    },
    {
      school: "IUT Blagnac",
      degree: "Licence Pro - Analyse des systèmes informatiques",
      date: "2013 - 2014",
      location: "Blagnac, France",
    },
    {
      school: "Lycée Léonce Vieljeux - La Rochelle",
      degree: "BTS IRIS - Informatique et Réseaux",
      date: "2010 - 2012",
      location: "La Rochelle, France",
    },
    {
      school: "Lycée Paul Guérin - Niort",
      degree: "Baccalauréat STI - Génie Mécanique Productique",
      date: "2008 - 2010",
      location: "Niort, France",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-12 rounded-lg shadow-lg mb-8">
        <h1 className="text-5xl font-bold">À propos de moi</h1>
        <p className="text-lg mt-2">
          Product Owner et Développeur passionné par l&apos;innovation et la technologie.
        </p>
      </div>

      {/* Navigation rapide */}
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#experience" className="text-blue-600 hover:underline font-medium">Expériences</a>
        <a href="#formation" className="text-blue-600 hover:underline font-medium">Formations</a>
      </div>

      {/* Expériences Professionnelles */}
      <h2 id="experience" className="text-3xl font-semibold mb-6 text-gray-800">Expérience Professionnelle</h2>
      <div className="relative border-l-4 border-blue-500 ml-4 pl-6 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Icône */}
            <div className="absolute -left-9 top-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
              <Briefcase size={24} />
            </div>

            {/* Titre et Entreprise */}
            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>

            {/* Date et Lieu */}
            <div className="flex items-center text-gray-500 mt-2 space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{exp.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Liste des missions */}
            <ul className="list-disc list-inside mt-4 text-gray-700">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Formations */}
      <h2 id="formation" className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Formation</h2>
      <div className="relative border-l-4 border-green-500 ml-4 pl-6 space-y-8">
        {formations.map((edu, index) => (
          <div key={index} className="relative bg-gray-100 p-6 rounded-lg shadow-md">
            {/* Icône */}
            <div className="absolute -left-9 top-6 bg-green-500 text-white p-2 rounded-full shadow-md">
              <BookOpen size={24} />
            </div>

            {/* Titre et Établissement */}
            <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600 font-medium">{edu.school}</p>

            {/* Date et Lieu */}
            <div className="flex items-center text-gray-500 mt-2 space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{edu.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
