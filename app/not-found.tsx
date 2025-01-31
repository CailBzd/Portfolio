export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page introuvable</h1>
      <p className="mt-2 text-lg text-gray-600">Oups ! La page que vous cherchez n'existe pas.</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Retour à l'accueil
      </a>
    </div>
  );
}
