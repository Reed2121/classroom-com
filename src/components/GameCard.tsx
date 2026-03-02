import { Game } from "@/data/games";
import { Gamepad2 } from "lucide-react";

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard = ({ game, onPlay }: GameCardProps) => {
  return (
    <button
      onClick={() => onPlay(game)}
      className="group relative rounded-lg overflow-hidden bg-card border border-border game-card-hover text-left w-full"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-primary/90 rounded-full p-4 shadow-lg">
            <Gamepad2 className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-display text-sm font-semibold text-foreground truncate">
          {game.name}
        </h3>
        <span className="text-xs text-muted-foreground font-body">{game.category}</span>
      </div>
    </button>
  );
};

export default GameCard;
