import BugCatcher from "@/components/bugCatcher";
import JokeGenerator from "@/components/jokeGenerator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-gray-800">Salut, je suis Pierre BIZARD 👋</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl text-center">
        Développeur et Responsable produit, je me consacre à guider mes projets avec rigueur, en surmontant les défis pour atteindre des résultats durables.
      </p>

      <div className="mt-8">
        <Link href="/project">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            Voir mes projets 🚀
          </button>
        </Link>
      </div>

      <div className="mt-12 grid md:grid-cols-1 gap-12 max-w-4xl w-full px-4">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <BugCatcher />
        </div>

        <div className="w-full flex overflow-x-auto gap-6 py-4">
          <JokeGenerator />
        </div>
      </div>
    </div>
  );
}
