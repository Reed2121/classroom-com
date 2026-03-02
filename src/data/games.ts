export interface Game {
  id: number;
  name: string;
  image: string;
  category: string;
}

const BASE = "https://clever.com.dab.ca";

export const games: Game[] = [
  { id: 1172, name: "Spacewaves", image: `${BASE}/5/img/spacewaves.jpeg`, category: "Action" },
  { id: 813, name: "Geometry Dash Lite", image: `${BASE}/5/img/geometry%20dash%20lite.jpeg`, category: "Rhythm" },
  { id: 746, name: "Drive Mad 200 Levels", image: `${BASE}/5/img/Drive%20Mad%20200%20Levels.jpeg`, category: "Racing" },
  { id: 970, name: "Speed Stars", image: `${BASE}/5/img/speed%20stars.jpeg`, category: "Racing" },
  { id: 1158, name: "Escape Road 2", image: `${BASE}/5/img/escape%20road%202.jpeg`, category: "Racing" },
  { id: 49, name: "Retro Bowl", image: `${BASE}/img/retrobowl.webp`, category: "Sports" },
  { id: 743, name: "Get Yoked", image: `${BASE}/5/img/get%20yoked.jpeg`, category: "Action" },
  { id: 680, name: "Ragdoll Hit", image: `${BASE}/3/img/ragdoll%20hit.jpg`, category: "Action" },
  { id: 982, name: "Survival Race", image: `${BASE}/5/img/survival%20race.jpeg`, category: "Racing" },
  { id: 739, name: "Polytrack", image: `${BASE}/3/img/new%20polytrack.jpg`, category: "Racing" },
  { id: 243, name: "Bitlife", image: `${BASE}/img/bitlife.jpg`, category: "Simulation" },
  { id: 926, name: "Ragdoll Archers", image: `${BASE}/5/img/ragdoll%20archers.jpeg`, category: "Action" },
  { id: 744, name: "Granny", image: `${BASE}/5/img/granny.jpeg`, category: "Horror" },
  { id: 170, name: "Geometry Dash", image: `${BASE}/img/dash.png`, category: "Rhythm" },
  { id: 551, name: "Color Switch", image: `${BASE}/2/img/color%20switch.png`, category: "Puzzle" },
  { id: 46, name: "Idle Shark", image: `${BASE}/img/sharkgame.webp`, category: "Idle" },
  { id: 730, name: "Block Blast", image: `${BASE}/3/img/block%20blast.jpg`, category: "Puzzle" },
  { id: 757, name: "Bee Swarm Simulator", image: `${BASE}/5/img/Bee%20swarm%20simulator.jpeg`, category: "Simulation" },
  { id: 1155, name: "Cuphead", image: `${BASE}/5/img/cuphead.png`, category: "Action" },
];

export const categories = [...new Set(games.map(g => g.category))];

export const getPlayUrl = (id: number) => `${BASE}/play/?id=${id}`;
