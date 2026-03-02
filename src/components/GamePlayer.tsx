import { Game, getCleverPlayUrl, HYDRA_ASSETS_BASE } from "@/data/games";
import { X, Maximize2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [hydraHtml, setHydraHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (game.source === "hydra" && game.fileName) {
      setLoading(true);
      fetch(`${HYDRA_ASSETS_BASE}/${game.fileName}?t=${Date.now()}`)
        .then((res) => res.text())
        .then((html) => setHydraHtml(html))
        .catch((err) => {
          console.error("Failed to load game:", err);
          setHydraHtml("<h1 style='color:white;text-align:center;padding:40px'>Failed to load game</h1>");
        })
        .finally(() => setLoading(false));
    }
  }, [game]);

  const iframeSrc =
    game.source === "clever" && game.cleverId
      ? getCleverPlayUrl(game.cleverId)
      : undefined;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 border-b border-border">
        <h2 className="font-display text-lg font-bold text-primary neon-text">
          {game.name}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="p-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-muted hover:bg-destructive text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={`flex-1 ${fullscreen ? "" : "p-4"}`}>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : game.source === "clever" ? (
          <iframe
            src={iframeSrc}
            className="w-full h-full rounded-md border border-border"
            title={game.name}
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        ) : hydraHtml ? (
          <iframe
            srcDoc={hydraHtml}
            className="w-full h-full rounded-md border border-border"
            title={game.name}
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        ) : null}
      </div>
    </div>
  );
};

export default GamePlayer;
