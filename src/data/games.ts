export interface Game {
  id: string;
  name: string;
  image: string;
  category: string;
  source: "clever" | "hydra";
  // clever-specific
  cleverId?: number;
  // hydra-specific
  fileName?: string;
}

const CLEVER_BASE = "https://clever.com.dab.ca";
const HYDRA_ASSETS = "https://cdn.jsdelivr.net/gh/Hydra-Network/hydra-assets@main";
const HYDRA_THUMBS = `${HYDRA_ASSETS}/thumbs`;

export const cleverGames: Game[] = [
  { id: "c-1172", name: "Spacewaves", image: `${CLEVER_BASE}/5/img/spacewaves.jpeg`, category: "Action", source: "clever", cleverId: 1172 },
  { id: "c-813", name: "Geometry Dash Lite", image: `${CLEVER_BASE}/5/img/geometry%20dash%20lite.jpeg`, category: "Rhythm", source: "clever", cleverId: 813 },
  { id: "c-746", name: "Drive Mad 200 Levels", image: `${CLEVER_BASE}/5/img/Drive%20Mad%20200%20Levels.jpeg`, category: "Racing", source: "clever", cleverId: 746 },
  { id: "c-970", name: "Speed Stars", image: `${CLEVER_BASE}/5/img/speed%20stars.jpeg`, category: "Racing", source: "clever", cleverId: 970 },
  { id: "c-1158", name: "Escape Road 2", image: `${CLEVER_BASE}/5/img/escape%20road%202.jpeg`, category: "Racing", source: "clever", cleverId: 1158 },
  { id: "c-49", name: "Retro Bowl", image: `${CLEVER_BASE}/img/retrobowl.webp`, category: "Sports", source: "clever", cleverId: 49 },
  { id: "c-743", name: "Get Yoked", image: `${CLEVER_BASE}/5/img/get%20yoked.jpeg`, category: "Action", source: "clever", cleverId: 743 },
  { id: "c-680", name: "Ragdoll Hit", image: `${CLEVER_BASE}/3/img/ragdoll%20hit.jpg`, category: "Action", source: "clever", cleverId: 680 },
  { id: "c-982", name: "Survival Race", image: `${CLEVER_BASE}/5/img/survival%20race.jpeg`, category: "Racing", source: "clever", cleverId: 982 },
  { id: "c-739", name: "Polytrack", image: `${CLEVER_BASE}/3/img/new%20polytrack.jpg`, category: "Racing", source: "clever", cleverId: 739 },
  { id: "c-243", name: "Bitlife", image: `${CLEVER_BASE}/img/bitlife.jpg`, category: "Simulation", source: "clever", cleverId: 243 },
  { id: "c-926", name: "Ragdoll Archers", image: `${CLEVER_BASE}/5/img/ragdoll%20archers.jpeg`, category: "Action", source: "clever", cleverId: 926 },
  { id: "c-744", name: "Granny", image: `${CLEVER_BASE}/5/img/granny.jpeg`, category: "Horror", source: "clever", cleverId: 744 },
  { id: "c-170", name: "Geometry Dash", image: `${CLEVER_BASE}/img/dash.png`, category: "Rhythm", source: "clever", cleverId: 170 },
  { id: "c-551", name: "Color Switch", image: `${CLEVER_BASE}/2/img/color%20switch.png`, category: "Puzzle", source: "clever", cleverId: 551 },
  { id: "c-46", name: "Idle Shark", image: `${CLEVER_BASE}/img/sharkgame.webp`, category: "Idle", source: "clever", cleverId: 46 },
  { id: "c-730", name: "Block Blast", image: `${CLEVER_BASE}/3/img/block%20blast.jpg`, category: "Puzzle", source: "clever", cleverId: 730 },
  { id: "c-757", name: "Bee Swarm Simulator", image: `${CLEVER_BASE}/5/img/Bee%20swarm%20simulator.jpeg`, category: "Simulation", source: "clever", cleverId: 757 },
  { id: "c-1155", name: "Cuphead", image: `${CLEVER_BASE}/5/img/cuphead.png`, category: "Action", source: "clever", cleverId: 1155 },
  { id: "c-1205", name: "Five Nights at Freddy's", image: `${CLEVER_BASE}/5/img/Five%20nights%20at%20epstiens.jpeg`, category: "Horror", source: "clever", cleverId: 1205 },
];

export const getCleverPlayUrl = (id: number) => `${CLEVER_BASE}/play/?id=${id}`;

export interface HydraGameRaw {
  file_name: string;
  title: string;
  thumb: string;
  frame?: string;
}

export const hydraGameToGame = (raw: HydraGameRaw): Game => ({
  id: `h-${raw.file_name}`,
  name: raw.title,
  image: `${HYDRA_THUMBS}/${raw.thumb.replace("thumbs/", "")}`,
  category: "Hydra",
  source: "hydra",
  fileName: raw.file_name,
});

export const HYDRA_GAMES_JSON = "https://cdn.jsdelivr.net/gh/Hydra-Network/bromine@main/src/data/gmes.json";
export const HYDRA_ASSETS_BASE = HYDRA_ASSETS;
