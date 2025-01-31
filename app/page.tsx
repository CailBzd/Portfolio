import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Salut, je suis Pierre BIZARD 👋</h1>
      <p className="text-lg text-gray-600 mt-4">
      Développeur et Responsable produit, je me consacre à guider mes projets avec rigueur, en surmontant les défis pour atteindre des résultats durables.
      </p>
      <div className="mt-6">
        <Link href="/project">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Voir mes projets 🚀
          </button>
        </Link>
      </div>
    </div>
  );
}
