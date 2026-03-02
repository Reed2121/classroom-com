import { useState, useMemo } from "react";
import { Search, Zap, Loader2 } from "lucide-react";
import { cleverGames, Game } from "@/data/games";
import { useHydraGames } from "@/hooks/useHydraGames";
import GameCard from "@/components/GameCard";
import GamePlayer from "@/components/GamePlayer";
import heroBg from "@/assets/hero-bg.jpg";

const CATEGORIES = ["All", "Action", "Racing", "Rhythm", "Sports", "Puzzle", "Horror", "Simulation", "Idle", "Platformer", "Shooter", "Strategy", "Adventure", "Hydra"];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingGame, setPlayingGame] = useState<Game | null>(null);
  const { games: hydraGames, loading } = useHydraGames();

  const allGames = useMemo(() => [...cleverGames, ...hydraGames], [hydraGames]);

  const filtered = useMemo(() => {
    return allGames.filter((g) => {
      const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || g.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, allGames]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-10 h-10 text-primary animate-pulse-neon" />
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground neon-text tracking-wider">
              MEGA EVOLUTION
            </h1>
            <Zap className="w-10 h-10 text-secondary animate-pulse-neon" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-body font-medium max-w-xl mx-auto">
            {allGames.length}+ games — play instantly, no downloads required.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="container max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card border border-border rounded-xl p-4 neon-box">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground font-body text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">
          🔥 Games <span className="text-primary">({filtered.length})</span>
          {loading && <Loader2 className="inline-block w-5 h-5 ml-2 text-primary animate-spin" />}
        </h2>
        {filtered.length === 0 && !loading ? (
          <p className="text-center text-muted-foreground py-20 text-lg font-body">
            No games found. Try a different search.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} onPlay={setPlayingGame} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-muted-foreground font-body text-sm">
        Mega Evolution © 2026 — Play. Evolve. Dominate.
      </footer>

      {playingGame && <GamePlayer game={playingGame} onClose={() => setPlayingGame(null)} />}
    </div>
  );
};

export default Index;
