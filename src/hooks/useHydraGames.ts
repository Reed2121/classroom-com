import { useState, useEffect } from "react";
import { Game, HydraGameRaw, HYDRA_GAMES_JSON, hydraGameToGame } from "@/data/games";

export const useHydraGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(HYDRA_GAMES_JSON)
      .then((res) => res.json())
      .then((data: HydraGameRaw[]) => {
        // Filter out entries with title "1" or very short meaningless titles
        const valid = data.filter((g) => g.title.length > 1);
        setGames(valid.map(hydraGameToGame));
      })
      .catch((err) => console.error("Failed to load Hydra games:", err))
      .finally(() => setLoading(false));
  }, []);

  return { games, loading };
};
