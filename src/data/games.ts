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
  // Original 20
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
  // 75 new games
  { id: "c-1217", name: "Red Ball 4 Vol 2", image: `${CLEVER_BASE}/5/img/Redball%204%20volume%202.jpeg`, category: "Platformer", source: "clever", cleverId: 1217 },
  { id: "c-1208", name: "Infectonator 2", image: `${CLEVER_BASE}/5/img/Infectonator%202.jpeg`, category: "Strategy", source: "clever", cleverId: 1208 },
  { id: "c-1216", name: "Red Ball 4 Vol 1", image: `${CLEVER_BASE}/5/img/Redball%204%20volume%201.jpeg`, category: "Platformer", source: "clever", cleverId: 1216 },
  { id: "c-1200", name: "Dadish", image: `${CLEVER_BASE}/5/img/Dadish.jpeg`, category: "Platformer", source: "clever", cleverId: 1200 },
  { id: "c-1201", name: "Dadish 2", image: `${CLEVER_BASE}/5/img/Dadish%202.jpeg`, category: "Platformer", source: "clever", cleverId: 1201 },
  { id: "c-1202", name: "Dadish 3", image: `${CLEVER_BASE}/5/img/Dadish%203.jpeg`, category: "Platformer", source: "clever", cleverId: 1202 },
  { id: "c-1204", name: "Duck Life 5", image: `${CLEVER_BASE}/5/img/Ducklife%205.jpeg`, category: "Simulation", source: "clever", cleverId: 1204 },
  { id: "c-1203", name: "Duck Life 4", image: `${CLEVER_BASE}/5/img/Ducklife%204.jpeg`, category: "Simulation", source: "clever", cleverId: 1203 },
  { id: "c-231", name: "Duck Life 3", image: `${CLEVER_BASE}/img/ducklife3.webp`, category: "Simulation", source: "clever", cleverId: 231 },
  { id: "c-1215", name: "Red Ball 3", image: `${CLEVER_BASE}/5/img/Redball%203.jpeg`, category: "Platformer", source: "clever", cleverId: 1215 },
  { id: "c-1211", name: "Mario Combat", image: `${CLEVER_BASE}/5/img/Mario%20combat.jpeg`, category: "Action", source: "clever", cleverId: 1211 },
  { id: "c-1194", name: "Sniper Year One", image: `${CLEVER_BASE}/5/img/sniper%20year%20one.jpeg`, category: "Shooter", source: "clever", cleverId: 1194 },
  { id: "c-1182", name: "Boss Slayer", image: `${CLEVER_BASE}/5/img/boss%20slayer.jpeg`, category: "Action", source: "clever", cleverId: 1182 },
  { id: "c-1193", name: "Schoolboy Escape", image: `${CLEVER_BASE}/5/img/schoolboy%20escape.jpeg`, category: "Adventure", source: "clever", cleverId: 1193 },
  { id: "c-1186", name: "Epic Coaster", image: `${CLEVER_BASE}/5/img/epic%20coaster.jpeg`, category: "Action", source: "clever", cleverId: 1186 },
  { id: "c-1181", name: "Bank Robbery 3", image: `${CLEVER_BASE}/5/img/bank%20robbery%203.jpeg`, category: "Action", source: "clever", cleverId: 1181 },
  { id: "c-1190", name: "Protektor", image: `${CLEVER_BASE}/5/img/protektor.jpeg`, category: "Strategy", source: "clever", cleverId: 1190 },
  { id: "c-1187", name: "Epic Combo", image: `${CLEVER_BASE}/5/img/epic%20combo.jpeg`, category: "Action", source: "clever", cleverId: 1187 },
  { id: "c-1196", name: "TM Driver", image: `${CLEVER_BASE}/5/img/tm%20driver.jpeg`, category: "Racing", source: "clever", cleverId: 1196 },
  { id: "c-1157", name: "Dome Romantik", image: `${CLEVER_BASE}/5/img/dome%20romantik.jpeg`, category: "Puzzle", source: "clever", cleverId: 1157 },
  { id: "c-1161", name: "Gun Knight", image: `${CLEVER_BASE}/5/img/Gun%20Knight.jpeg`, category: "Action", source: "clever", cleverId: 1161 },
  { id: "c-1178", name: "3Dash", image: `${CLEVER_BASE}/5/img/3dash.jpeg`, category: "Rhythm", source: "clever", cleverId: 1178 },
  { id: "c-1164", name: "Minesweeper Plus", image: `${CLEVER_BASE}/5/img/minesweeper%20plus.jpeg`, category: "Puzzle", source: "clever", cleverId: 1164 },
  { id: "c-1169", name: "Revolution Idle", image: `${CLEVER_BASE}/5/img/revolution%20idle.png`, category: "Idle", source: "clever", cleverId: 1169 },
  { id: "c-1173", name: "Stick War", image: `${CLEVER_BASE}/5/img/stickwar.webp`, category: "Strategy", source: "clever", cleverId: 1173 },
  { id: "c-1154", name: "Celeste", image: `${CLEVER_BASE}/5/img/celeste.jpeg`, category: "Platformer", source: "clever", cleverId: 1154 },
  { id: "c-1168", name: "Postal", image: `${CLEVER_BASE}/5/img/postal.jpeg`, category: "Shooter", source: "clever", cleverId: 1168 },
  { id: "c-1171", name: "Slime Ranchers", image: `${CLEVER_BASE}/5/img/slime%20ranchers.jpeg`, category: "Simulation", source: "clever", cleverId: 1171 },
  { id: "c-1163", name: "Melon Playground", image: `${CLEVER_BASE}/5/img/melon%20playground.jpeg`, category: "Simulation", source: "clever", cleverId: 1163 },
  { id: "c-1162", name: "Johnny Upgrade", image: `${CLEVER_BASE}/5/img/Johnny%20Upgrade.jpeg`, category: "Platformer", source: "clever", cleverId: 1162 },
  { id: "c-1174", name: "Stratagem", image: `${CLEVER_BASE}/5/img/stratagem.jpeg`, category: "Strategy", source: "clever", cleverId: 1174 },
  { id: "c-1176", name: "Ultimate Custom Night", image: `${CLEVER_BASE}/5/img/ultimate%20custom%20night.jpeg`, category: "Horror", source: "clever", cleverId: 1176 },
  { id: "c-1177", name: "Zelda Ocarina Of Time", image: `${CLEVER_BASE}/5/img/zelda%20ocarina%20of%20time.jpeg`, category: "Adventure", source: "clever", cleverId: 1177 },
  { id: "c-1175", name: "Surf GO", image: `${CLEVER_BASE}/5/img/surf%20go.jpeg`, category: "Action", source: "clever", cleverId: 1175 },
  { id: "c-992", name: "Doom", image: `${CLEVER_BASE}/5/img/doom.jpeg`, category: "Shooter", source: "clever", cleverId: 992 },
  { id: "c-978", name: "Deltarune DEMO", image: `${CLEVER_BASE}/5/img/deltarune%20DEMO.jpeg`, category: "Adventure", source: "clever", cleverId: 978 },
  { id: "c-1071", name: "Ultrakill", image: `${CLEVER_BASE}/5/img/ultrakill.jpeg`, category: "Shooter", source: "clever", cleverId: 1071 },
  { id: "c-1027", name: "Omori", image: `${CLEVER_BASE}/5/img/omori.jpeg`, category: "Adventure", source: "clever", cleverId: 1027 },
  { id: "c-1040", name: "PVZ NEW", image: `${CLEVER_BASE}/5/img/pvz%20new.jpeg`, category: "Strategy", source: "clever", cleverId: 1040 },
  { id: "c-1065", name: "Townscaper", image: `${CLEVER_BASE}/5/img/townscraper.jpeg`, category: "Simulation", source: "clever", cleverId: 1065 },
  { id: "c-1074", name: "Vex X3M", image: `${CLEVER_BASE}/5/img/vex%20x3m.jpeg`, category: "Platformer", source: "clever", cleverId: 1074 },
  { id: "c-1075", name: "Yandere Simulator", image: `${CLEVER_BASE}/5/img/yandre%20simulator.jpeg`, category: "Simulation", source: "clever", cleverId: 1075 },
  { id: "c-517", name: "Cactus McCoy 2", image: `${CLEVER_BASE}/5/img/cactus%20mccoy%202.jpeg`, category: "Platformer", source: "clever", cleverId: 517 },
  { id: "c-372", name: "Cactus McCoy", image: `${CLEVER_BASE}/5/img/cactus%20mccoy.jpeg`, category: "Platformer", source: "clever", cleverId: 372 },
  { id: "c-738", name: "Epic Boss Fighter", image: `${CLEVER_BASE}/5/img/epic%20boss%20fighter.jpeg`, category: "Action", source: "clever", cleverId: 738 },
  { id: "c-759", name: "Scary Teacher 3D", image: `${CLEVER_BASE}/5/img/scary%20teacher%203d.jpeg`, category: "Horror", source: "clever", cleverId: 759 },
  { id: "c-777", name: "Slender Multiplayer", image: `${CLEVER_BASE}/5/img/slender%20multiplayer.jpeg`, category: "Horror", source: "clever", cleverId: 777 },
  { id: "c-779", name: "Street Fighter 2", image: `${CLEVER_BASE}/5/img/street%20fighter%202.jpeg`, category: "Action", source: "clever", cleverId: 779 },
  { id: "c-745", name: "Jelly Drift", image: `${CLEVER_BASE}/5/img/jelly%20drift.jpeg`, category: "Racing", source: "clever", cleverId: 745 },
  { id: "c-874", name: "Tron", image: `${CLEVER_BASE}/5/img/tron.png`, category: "Action", source: "clever", cleverId: 874 },
  { id: "c-981", name: "Unfair Mario", image: `${CLEVER_BASE}/5/img/unfair%20mario.jpeg`, category: "Platformer", source: "clever", cleverId: 981 },
  { id: "c-518", name: "Toss the Turtle", image: `${CLEVER_BASE}/5/img/Toss%20the%20Turtle.jpeg`, category: "Action", source: "clever", cleverId: 518 },
  { id: "c-749", name: "Baseball Bros", image: `${CLEVER_BASE}/5/img/baseball%20bros.jpeg`, category: "Sports", source: "clever", cleverId: 749 },
  { id: "c-768", name: "Buildnow GG", image: `${CLEVER_BASE}/5/img/buildnow.gg.jpeg`, category: "Shooter", source: "clever", cleverId: 768 },
  { id: "c-798", name: "Drift Hunters", image: `${CLEVER_BASE}/5/img/drift%20hunters.jpeg`, category: "Racing", source: "clever", cleverId: 798 },
  { id: "c-790", name: "Choppy Orc", image: `${CLEVER_BASE}/5/img/choppy%20orc.jpeg`, category: "Platformer", source: "clever", cleverId: 790 },
  { id: "c-961", name: "Snow Rider 3D", image: `${CLEVER_BASE}/5/img/snow%20rider%203d.jpeg`, category: "Racing", source: "clever", cleverId: 961 },
  { id: "c-965", name: "Sonic Revert", image: `${CLEVER_BASE}/5/img/sonic%20revert.jpeg`, category: "Platformer", source: "clever", cleverId: 965 },
  { id: "c-983", name: "Swords and Sandals 2", image: `${CLEVER_BASE}/5/img/swords%20and%20sandals%202.jpeg`, category: "Action", source: "clever", cleverId: 983 },
  { id: "c-985", name: "Thats Not My Neighbor", image: `${CLEVER_BASE}/5/img/thats%20not%20my%20neighbor.jpeg`, category: "Horror", source: "clever", cleverId: 985 },
  { id: "c-995", name: "Road of the Dead", image: `${CLEVER_BASE}/5/img/road%20of%20the%20dead.jpeg`, category: "Racing", source: "clever", cleverId: 995 },
  { id: "c-993", name: "Cat Ninja", image: `${CLEVER_BASE}/5/img/cat%20ninja.jpeg`, category: "Platformer", source: "clever", cleverId: 993 },
  { id: "c-763", name: "Buckshot Roulette", image: `${CLEVER_BASE}/5/img/buckshot%20roulette.jpeg`, category: "Horror", source: "clever", cleverId: 763 },
  { id: "c-155", name: "City Car Driving Stunt", image: `${CLEVER_BASE}/5/img/City%20Car%20Driving%20Stunt%20Master.jpeg`, category: "Racing", source: "clever", cleverId: 155 },
  { id: "c-720", name: "Last Breath", image: `${CLEVER_BASE}/5/img/Last%20Breath.jpeg`, category: "Action", source: "clever", cleverId: 720 },
  { id: "c-145", name: "Solar Smash", image: `${CLEVER_BASE}/5/img/Solar%20Smash.jpeg`, category: "Simulation", source: "clever", cleverId: 145 },
  { id: "c-944", name: "Sans Fight", image: `${CLEVER_BASE}/4/img/sans%20fight.png`, category: "Action", source: "clever", cleverId: 944 },
  { id: "c-946", name: "Football Legends", image: `${CLEVER_BASE}/4/img/football%20legends.jpg`, category: "Sports", source: "clever", cleverId: 946 },
  { id: "c-940", name: "Sandboxels", image: `${CLEVER_BASE}/5/img/sandboxels.jpeg`, category: "Simulation", source: "clever", cleverId: 940 },
  { id: "c-945", name: "Clash Royale", image: `${CLEVER_BASE}/5/img/clash%20royale.jpeg`, category: "Strategy", source: "clever", cleverId: 945 },
  { id: "c-954", name: "Slow Roads", image: `${CLEVER_BASE}/5/img/slow%20roads.jpeg`, category: "Racing", source: "clever", cleverId: 954 },
  { id: "c-761", name: "Boxing Random", image: `${CLEVER_BASE}/5/img/boxing%20random.jpeg`, category: "Sports", source: "clever", cleverId: 761 },
  { id: "c-988", name: "Tomb of the Mask", image: `${CLEVER_BASE}/5/img/tomb%20of%20the%20mask.png`, category: "Puzzle", source: "clever", cleverId: 988 },
  { id: "c-1043", name: "Ragdoll Drop", image: `${CLEVER_BASE}/5/img/ragdoll%20drop.jpeg`, category: "Action", source: "clever", cleverId: 1043 },
  { id: "c-1051", name: "Riddle School", image: `${CLEVER_BASE}/5/img/riddle%20school.jpeg`, category: "Adventure", source: "clever", cleverId: 1051 },
  { id: "c-1064", name: "Super Punch Out", image: `${CLEVER_BASE}/5/img/super%20punch%20out.jpeg`, category: "Sports", source: "clever", cleverId: 1064 },
  { id: "c-1067", name: "Tradecraft", image: `${CLEVER_BASE}/5/img/tradecraft.jpeg`, category: "Strategy", source: "clever", cleverId: 1067 },
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
  image: raw.thumb ? `${HYDRA_THUMBS}/${raw.thumb.replace("thumbs/", "")}` : "",
  category: "Hydra",
  source: "hydra",
  fileName: raw.file_name,
});

export const HYDRA_GAMES_JSON = "https://cdn.jsdelivr.net/gh/Hydra-Network/bromine@main/src/data/gmes.json";
export const HYDRA_ASSETS_BASE = HYDRA_ASSETS;
