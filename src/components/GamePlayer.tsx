import { Game, getPlayUrl } from "@/data/games";
import { X, Maximize2 } from "lucide-react";
import { useState } from "react";

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const [fullscreen, setFullscreen] = useState(false);

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
        <iframe
          src={getPlayUrl(game.id)}
          className="w-full h-full rounded-md border border-border"
          title={game.name}
          allowFullScreen
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
};

export default GamePlayer;
