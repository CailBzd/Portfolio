"use client";

import React, { useState } from "react";

const jokes = [
  "Tu sais pourquoi l'iPhone 6 se plie ? Parce que l'Apple Store.",
  "Quand quelqu'un de triste joue aux jeux vidéo pour oublier, on peut dire qu'il se console.",
  "Pourquoi les geeks doivent-ils suivre une formation incendie ? À cause des pare-feux.",
  "Quel Pokémon a une mitraillette ? Ratatatatatatatata.",
  "À quoi sert Internet Explorer ? À télécharger Google Chrome.",
  "Quand est-ce que Windows ne bug pas ? Quand l'ordinateur est éteint.",
  "De quelle couleur sont tes yeux ? ;) #1292f4 et toi ? :)",
  "Que dit une mère à son fils geek quand le dîner est servi ? Alt Tab !!!",
  "T'as pris quoi comme résolution pour cette nouvelle année ? 1080p.",
  "Quelle est la meilleure heure pour écouter de la musique ? Deezer...",
  "De nos jours, le zip ça devient rar...",
];


export default function JokeGenerator() {
  const [joke, setJoke] = useState("Clique pour voir une blague !");

  const getNewJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">😂 Blague de Développeur</h2>
      <p className="text-gray-700 mb-4">{joke}</p>
      <p className="text-gray-500 text-sm italic">
        Source : <a href="https://hitek.fr/actualite/top-20-blagues-geek_5381" target="_blank" className="text-blue-500 hover:underline">Hitek</a>
      </p>
      <button
        onClick={getNewJoke}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Nouvelle blague
      </button>
    </div>

  );
}
