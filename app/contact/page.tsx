'use client';

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // Initialisation d'EmailJS avec la clé publique
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID); // Remplace par ta clé publique
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Envoi en cours...");

    // Setup EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; // Remplace par ton ID de service EmailJS
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // Remplace par ton ID de template EmailJS

    // Envoi du formulaire avec EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target as HTMLFormElement)
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          setStatus("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* En-tête */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contactez-moi</h1>
        <p className="text-lg text-gray-500 mt-2">Je serai ravi de discuter de vos projets.</p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Statut de l'envoi */}
        {status && (
          <p className={`mt-4 text-center ${status === "Message envoyé avec succès !" ? "text-green-500" : "text-red-500"}`}>
            {status}
          </p>
        )}

        {/* Bouton de soumission */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
          >
            {isSubmitting ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
}
