import { useState, useEffect } from "react";
import { Game, HydraGameRaw, HYDRA_GAMES_JSON, hydraGameToGame } from "@/data/games";

export const useHydraGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(HYDRA_GAMES_JSON)
      .then((res) => res.json())
      .then((data: HydraGameRaw[]) => {
        const valid = data.filter((g) => g.title && g.title.length > 1 && g.file_name);
        setGames(valid.map(hydraGameToGame));
      })
      .catch((err) => console.error("Failed to load Hydra games:", err))
      .finally(() => setLoading(false));
  }, []);

  return { games, loading };
};
