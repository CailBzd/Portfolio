'use client';

import { useState, useEffect } from "react";
import supabase from "../lib/supabase";

const BugCatcher = () => {
  const [score, setScore] = useState(0);
  const [bugs, setBugs] = useState<{ id: number; x: number; y: number }[]>([]);
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState<{ name: string; score: number }[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameTime, setGameTime] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [intervalTime, setIntervalTime] = useState(1000);

  const MAX_BUGS = 30;

  // Générer des bugs
  useEffect(() => {
    
    if (!gameStarted || gameOver || bugs.length >= MAX_BUGS) return;

    const interval = setInterval(() => {
      setBugs((prevBugs) => {
        if (prevBugs.length >= MAX_BUGS-1) {
          console.log("game over")
          setGameOver(true); // Mettre fin au jeu si la limite est atteinte
          return prevBugs;
        }

        return [
          ...prevBugs,
          { id: Date.now(), x: Math.random() * 90, y: Math.random() * 90 },
        ];
      });

      setIntervalTime((prevTime) => Math.max(prevTime - 30, 100));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, bugs.length, intervalTime]);

  // Timer du jeu
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const timer = setInterval(() => {
      if (gameTime > 0 && !gameOver) {
        setGameTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        setGameOver(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver, gameTime]);

  // Récupérer les scores du leaderboard
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    const { data, error } = await supabase
      .from("scores_bugcatcher")
      .select("*")
      .order("score", { ascending: false })
      .limit(5);

    if (error) {
      console.error("Erreur lors de la récupération du leaderboard:", error);
    } else {
      setLeaderboard(data || []);
    }
  };

  // Attraper un bug
  const catchBug = (id: number) => {
    if (gameOver) return;
    setBugs((prevBugs) => prevBugs.filter((bug) => bug.id !== id));
    setScore(score + 1);
  };

  // Enregistrer le score
  const saveScore = async () => {
    if (name.trim() === "") return;
    const { error } = await supabase.from("scores_bugcatcher").insert([{ name, score }]);

    if (error) {
      console.error("Erreur lors de l'enregistrement du score:", error);
    } else {
      setScore(0);
      setName("");
      fetchLeaderboard();
    }
  };

  // Réinitialiser le jeu
  const restartGame = () => {
    setGameOver(false);
    setGameTime(30);
    setScore(0);
    setBugs([]);
    setIntervalTime(1000);
    setGameStarted(false);
  };

  // Démarrer le jeu
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setBugs([]);
    setGameTime(30);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center relative">
      <h2 className="text-xl font-semibold mb-2">🐞 Attrape les Bugs !</h2>
      <p className="text-gray-700 mb-4">
        Attrape un maximum de bugs avant que le temps ne s&apos;écoule ! Attention, il ne doit pas y avoir plus de 30 bugs.
      </p>

      {gameOver ? (
        <>
          <p className="text-gray-800 mb-4">Jeu terminé !</p>
          <p className="text-gray-800 mb-4">Ton score final : {score}</p>
          <div className="mt-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="border p-2 rounded mb-4 w-64 mx-auto text-center"
            />
            <button onClick={saveScore} className="bg-blue-500 text-white px-4 py-2 rounded">
              Enregistrer le score
            </button>
          </div>
          <button
            onClick={restartGame}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Rejouer
          </button>
        </>
      ) : (
        <>
          {!gameStarted && (
            <button
              onClick={startGame}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Démarrer le jeu
            </button>
          )}
          {gameStarted && (
            <>
              <p className="text-gray-800 mb-4">Temps restant : {gameTime}s</p>
              <p className="text-gray-800 mb-4">Score : {score}</p>
              <p className="text-gray-800 mb-4">Bugs affichés : {bugs.length}</p>
              <div
                className="relative w-[300px] h-[300px] border border-gray-400 mx-auto"
                style={{ position: "relative" }}
              >
                {bugs.map((bug) => (
                  <div
                    key={bug.id}
                    onClick={() => catchBug(bug.id)}
                    className="absolute bg-red-500 w-5 h-5 rounded-full cursor-pointer"
                    style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {/* Classement */}
      <h3 className="text-lg font-semibold mt-6">🏆 Classement</h3>
      <ul className="mt-2">
        {leaderboard.map((entry, index) => (
          <li key={index} className="text-gray-800">{index + 1}. {entry.name} - {entry.score} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default BugCatcher;
