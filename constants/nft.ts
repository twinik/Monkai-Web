type NFTTraitName =
  | "scene"
  | "pot"
  | "body"
  | "necklace"
  | "face"
  | "glasses"
  | "petals"
  | "hat"
  | "bonus"
  | "genetics"
  | "class"
  | "genome"
  | "name";

interface INFTtraits {
  name: NFTTraitName;
  availableTraits: Array<{
    name: string | number;
    inCirculation: number;
  }>;
}

export const NFT_TRAITS: INFTtraits[] = [
  {
    name: "scene",
    availableTraits: [
      {
        name: "Solana",
        inCirculation: 186,
      },
      {
        name: "Bomb",
        inCirculation: 197,
      },
      {
        name: "Kusama",
        inCirculation: 187,
      },
      {
        name: "Pink",
        inCirculation: 193,
      },
      {
        name: "Blue",
        inCirculation: 178,
      },
      {
        name: "Orange",
        inCirculation: 179,
      },
      {
        name: "Caustic",
        inCirculation: 163,
      },
      {
        name: "Yellow",
        inCirculation: 183,
      },
      {
        name: "Hirst",
        inCirculation: 186,
      },
      {
        name: "Solana Spray",
        inCirculation: 202,
      },
      {
        name: "Warhol",
        inCirculation: 184,
      },
      {
        name: "Matrix",
        inCirculation: 182,
      },
      {
        name: "Brick Wall",
        inCirculation: 186,
      },
      {
        name: "Rising Sun",
        inCirculation: 196,
      },
      {
        name: "Field",
        inCirculation: 194,
      },
      {
        name: "Lineup",
        inCirculation: 184,
      },
      {
        name: "Love",
        inCirculation: 162,
      },
    ],
  },
  {
    name: "body",
    availableTraits: [
      {
        name: "Concrete",
        inCirculation: 254,
      },
      {
        name: "Kusama",
        inCirculation: 245,
      },
      {
        name: "Black",
        inCirculation: 251,
      },
      {
        name: "Brick",
        inCirculation: 251,
      },
      {
        name: "Green",
        inCirculation: 242,
      },
      {
        name: "Bumble",
        inCirculation: 143,
      },
      {
        name: "Solana",
        inCirculation: 254,
      },
      {
        name: "Trippy",
        inCirculation: 255,
      },
      {
        name: "Dead",
        inCirculation: 253,
      },
      {
        name: "Pink",
        inCirculation: 238,
      },
      {
        name: "Tiedye",
        inCirculation: 124,
      },
      {
        name: "Hirst",
        inCirculation: 243,
      },
      {
        name: "Gold",
        inCirculation: 248,
      },
      {
        name: "Glass",
        inCirculation: 141,
      },
    ],
  },
  {
    name: "pot",
    availableTraits: [
      {
        name: "Blue",
        inCirculation: 243,
      },
      {
        name: "Cbrown",
        inCirculation: 246,
      },
      {
        name: "Graff",
        inCirculation: 245,
      },
      {
        name: "Pink",
        inCirculation: 232,
      },
      {
        name: "Matrix",
        inCirculation: 248,
      },
      {
        name: "Purple",
        inCirculation: 249,
      },
      {
        name: "Hippie",
        inCirculation: 138,
      },
      {
        name: "Hirst",
        inCirculation: 254,
      },
      {
        name: "Kusama",
        inCirculation: 250,
      },
      {
        name: "Gold",
        inCirculation: 146,
      },
      {
        name: "Orange",
        inCirculation: 252,
      },
      {
        name: "Solana",
        inCirculation: 252,
      },
      {
        name: "Black",
        inCirculation: 260,
      },
      {
        name: "Weed",
        inCirculation: 127,
      },
    ],
  },
  {
    name: "necklace",
    availableTraits: [
      {
        name: "None",
        inCirculation: 2247,
      },
      {
        name: "Solana",
        inCirculation: 177,
      },
      {
        name: "Pearls",
        inCirculation: 174,
      },
      {
        name: "Bow Tie",
        inCirculation: 182,
      },
      {
        name: "Tie",
        inCirculation: 181,
      },
      {
        name: "Chain",
        inCirculation: 181,
      },
    ],
  },
  {
    name: "face",
    availableTraits: [
      {
        name: "Mad",
        inCirculation: 320,
      },
      {
        name: "Snaggle",
        inCirculation: 269,
      },
      {
        name: "Smile",
        inCirculation: 280,
      },
      {
        name: "Cheese",
        inCirculation: 324,
      },
      {
        name: "High",
        inCirculation: 344,
      },
      {
        name: "Lips",
        inCirculation: 332,
      },
      {
        name: "Frozen",
        inCirculation: 259,
      },
      {
        name: "Lips Joint",
        inCirculation: 327,
      },
      {
        name: "Two Teeth",
        inCirculation: 322,
      },
      {
        name: "Alien",
        inCirculation: 150,
      },
      {
        name: "Skull",
        inCirculation: 144,
      },
      {
        name: "Sad",
        inCirculation: 71,
      },
    ],
  },
  {
    name: "glasses",
    availableTraits: [
      {
        name: "Aviator",
        inCirculation: 243,
      },
      {
        name: "Round",
        inCirculation: 242,
      },
      {
        name: "Wraps",
        inCirculation: 241,
      },
      {
        name: "Shades",
        inCirculation: 240,
      },
      {
        name: "Heart",
        inCirculation: 242,
      },
      {
        name: "None",
        inCirculation: 1290,
      },
      {
        name: "Thug Life",
        inCirculation: 237,
      },
      {
        name: "Movie",
        inCirculation: 243,
      },
      {
        name: "Star",
        inCirculation: 164,
      },
    ],
  },
  {
    name: "petals",
    availableTraits: [
      {
        name: "Graff3",
        inCirculation: 187,
      },
      {
        name: "Black",
        inCirculation: 243,
      },
      {
        name: "Dream",
        inCirculation: 223,
      },
      {
        name: "Graff2",
        inCirculation: 199,
      },
      {
        name: "Spring",
        inCirculation: 200,
      },
      {
        name: "Solana",
        inCirculation: 200,
      },
      {
        name: "Pink",
        inCirculation: 196,
      },
      {
        name: "Acid",
        inCirculation: 199,
      },
      {
        name: "Graff1",
        inCirculation: 206,
      },
      {
        name: "Hirst",
        inCirculation: 213,
      },
      {
        name: "Kusama",
        inCirculation: 192,
      },
      {
        name: "Matrix",
        inCirculation: 206,
      },
      {
        name: "Fire",
        inCirculation: 200,
      },
      {
        name: "Gold",
        inCirculation: 205,
      },
      {
        name: "Drips",
        inCirculation: 202,
      },
      {
        name: "None",
        inCirculation: 71,
      },
    ],
  },
  {
    name: "hat",
    availableTraits: [
      {
        name: "None",
        inCirculation: 898,
      },
      {
        name: "Kangol",
        inCirculation: 250,
      },
      {
        name: "Cop",
        inCirculation: 205,
      },
      {
        name: "Rasta",
        inCirculation: 271,
      },
      {
        name: "Rose Brim",
        inCirculation: 173,
      },
      {
        name: "Stars",
        inCirculation: 76,
      },
      {
        name: "Fedora",
        inCirculation: 240,
      },
      {
        name: "Crown",
        inCirculation: 36,
      },
      {
        name: "Halo",
        inCirculation: 113,
      },
      {
        name: "Top Hat",
        inCirculation: 271,
      },
      {
        name: "Horns",
        inCirculation: 115,
      },
      {
        name: "Starter",
        inCirculation: 232,
      },
      {
        name: "Bucket",
        inCirculation: 248,
      },
      {
        name: "Beanie",
        inCirculation: 14,
      },
    ],
  },
  {
    name: "bonus",
    availableTraits: [
      {
        name: "None",
        inCirculation: 2911,
      },
      {
        name: "Shrooms",
        inCirculation: 36,
      },
      {
        name: "Tron Wings",
        inCirculation: 36,
      },
      {
        name: "Gold Wings",
        inCirculation: 36,
      },
      {
        name: "Tron Eyes",
        inCirculation: 10,
      },
      {
        name: "White Wings",
        inCirculation: 38,
      },
      {
        name: "Solana Wings",
        inCirculation: 38,
      },
      {
        name: "Rain",
        inCirculation: 37,
      },
    ],
  },
  {
    name: "genetics",
    availableTraits: [
      {
        name: "Sprouts",
        inCirculation: 3142,
      },
    ],
  },
  {
    name: "class",
    availableTraits: [
      {
        name: "Special",
        inCirculation: 136,
      },
      {
        name: "Exotic",
        inCirculation: 16,
      },
    ],
  },
  {
    name: "genome",
    availableTraits: [
      {
        name: 1,
        inCirculation: 125,
      },
      {
        name: 2,
        inCirculation: 15,
      },
      {
        name: 3,
        inCirculation: 10,
      },
      {
        name: 4,
        inCirculation: 2,
      },
    ],
  },
  {
    name: "name",
    availableTraits: [
      {
        name: "WIFEY",
        inCirculation: 1,
      },
      {
        name: "POPULAR IN HS",
        inCirculation: 1,
      },
      {
        name: "PERFECT",
        inCirculation: 1,
      },
      {
        name: "SOL MAXI",
        inCirculation: 1,
      },
      {
        name: "DEEP FREEZE",
        inCirculation: 1,
      },
      {
        name: "LETS GET WEIRD",
        inCirculation: 1,
      },
      {
        name: "SOLPREME",
        inCirculation: 1,
      },
      {
        name: "GUCCI PFP",
        inCirculation: 1,
      },
      {
        name: "KINGS KING",
        inCirculation: 1,
      },
      {
        name: "HIP HOP",
        inCirculation: 1,
      },
      {
        name: "LOVE IS FRAGILE",
        inCirculation: 1,
      },
      {
        name: "WAR OF THE WORLDS",
        inCirculation: 1,
      },
      {
        name: "ANTI DEFI",
        inCirculation: 1,
      },
      {
        name: "ROAD TRIP",
        inCirculation: 1,
      },
      {
        name: "DAZED AND CONFUSED PFP",
        inCirculation: 1,
      },
      {
        name: "BURN WALLET",
        inCirculation: 1,
      },
      {
        name: "BOMBER",
        inCirculation: 1,
      },
      {
        name: "DEATH IS CUTE",
        inCirculation: 1,
      },
      {
        name: "GOD IS FEMALE",
        inCirculation: 1,
      },
      {
        name: "THAT ONE EMO",
        inCirculation: 1,
      },
      {
        name: "PEARLY GATES",
        inCirculation: 1,
      },
      {
        name: "MADISON AVE",
        inCirculation: 1,
      },
      {
        name: "SOLD MY STARTUP",
        inCirculation: 1,
      },
      {
        name: "15 MINS",
        inCirculation: 1,
      },
      {
        name: "FERRIS BUELLER 2022",
        inCirculation: 1,
      },
      {
        name: "HOWDY",
        inCirculation: 1,
      },
      {
        name: "I MATCH",
        inCirculation: 1,
      },
      {
        name: "USUAL SUSPECTS",
        inCirculation: 1,
      },
      {
        name: "ORIGINAL OG",
        inCirculation: 1,
      },
      {
        name: "JUST LIKE US",
        inCirculation: 1,
      },
      {
        name: "FAMILY",
        inCirculation: 1,
      },
      {
        name: "THANK YOU",
        inCirculation: 1,
      },
      {
        name: "GUCCI GANG",
        inCirculation: 1,
      },
      {
        name: "CHASE",
        inCirculation: 1,
      },
      {
        name: "HAPPY DAYS",
        inCirculation: 1,
      },
      {
        name: "YEAH BOY",
        inCirculation: 1,
      },
      {
        name: "SOL QUEEN",
        inCirculation: 1,
      },
      {
        name: "LONELY AT THE TOP PFP",
        inCirculation: 1,
      },
      {
        name: "METAVERSE GARDENER",
        inCirculation: 1,
      },
      {
        name: "LAND OF THE RISING SUN",
        inCirculation: 1,
      },
      {
        name: "FRACTIONALIZED FLOWER",
        inCirculation: 1,
      },
      {
        name: "COMING FOR YOU",
        inCirculation: 1,
      },
      {
        name: "DAUGHTER DAY",
        inCirculation: 1,
      },
      {
        name: "FUCK DOT",
        inCirculation: 1,
      },
      {
        name: "FUCK ADA",
        inCirculation: 1,
      },
      {
        name: "LOVE",
        inCirculation: 1,
      },
      {
        name: "THAT ONE FAMILY",
        inCirculation: 1,
      },
      {
        name: "BAD ANGEL",
        inCirculation: 1,
      },
      {
        name: "MOTHERS DAY",
        inCirculation: 1,
      },
      {
        name: "MOGUL",
        inCirculation: 1,
      },
      {
        name: "PROUD",
        inCirculation: 1,
      },
      {
        name: "CHARLIES TRIP",
        inCirculation: 1,
      },
      {
        name: "PINK EYE",
        inCirculation: 1,
      },
      {
        name: "INVASION",
        inCirculation: 1,
      },
      {
        name: "NO FUCKS GIVEN PFP",
        inCirculation: 1,
      },
      {
        name: "HOW IT STARTED",
        inCirculation: 1,
      },
      {
        name: "PLAYGROUND",
        inCirculation: 1,
      },
      {
        name: "VANILLA ICE",
        inCirculation: 1,
      },
      {
        name: "FUCK YOU TO BUDDY",
        inCirculation: 1,
      },
      {
        name: "THE BLUE PILL",
        inCirculation: 1,
      },
      {
        name: "KING KUSAMA",
        inCirculation: 1,
      },
      {
        name: "SOL VAPORZ",
        inCirculation: 1,
      },
      {
        name: "GAGOSIAN",
        inCirculation: 1,
      },
      {
        name: "CLASS TRIP",
        inCirculation: 1,
      },
      {
        name: "PUSHA T",
        inCirculation: 1,
      },
      {
        name: "CHARLIE BROWN",
        inCirculation: 1,
      },
      {
        name: "RESPECT",
        inCirculation: 1,
      },
      {
        name: "FALLING DOWN",
        inCirculation: 1,
      },
      {
        name: "CASH MONEY",
        inCirculation: 1,
      },
      {
        name: "OIL SLICK",
        inCirculation: 1,
      },
      {
        name: "SACRED BLUEPRINT",
        inCirculation: 1,
      },
      {
        name: "FALLEN ANGEL",
        inCirculation: 1,
      },
      {
        name: "FOR THE LOVE OF MONEY",
        inCirculation: 1,
      },
      {
        name: "RIDING GIANTS",
        inCirculation: 1,
      },
      {
        name: "WARHOL OVER HIRST",
        inCirculation: 1,
      },
      {
        name: "AVIATOR LOVE PFP",
        inCirculation: 1,
      },
      {
        name: "NOT ALL DAYS ARE GREEN",
        inCirculation: 1,
      },
      {
        name: "BLACK WIDOW",
        inCirculation: 1,
      },
      {
        name: "IT FOLLOWS",
        inCirculation: 1,
      },
      {
        name: "EIFFEL 65",
        inCirculation: 1,
      },
      {
        name: "THE REAPER",
        inCirculation: 1,
      },
      {
        name: "WELCOME TO THE JUNGLE",
        inCirculation: 1,
      },
      {
        name: "ATTACK OF THE CLONES",
        inCirculation: 1,
      },
      {
        name: "SELL OUT",
        inCirculation: 1,
      },
      {
        name: "THE WHALE",
        inCirculation: 1,
      },
      {
        name: "HOW ITS GOING",
        inCirculation: 1,
      },
      {
        name: "HEY HEY",
        inCirculation: 1,
      },
      {
        name: "BAD MOM",
        inCirculation: 1,
      },
      {
        name: "INKA GODDESS",
        inCirculation: 1,
      },
      {
        name: "ANDY",
        inCirculation: 1,
      },
      {
        name: "DOG PARK",
        inCirculation: 1,
      },
      {
        name: "BUILDESTROY",
        inCirculation: 1,
      },
      {
        name: "WAR COUNCIL",
        inCirculation: 1,
      },
      {
        name: "I LIKE TO PARTY",
        inCirculation: 1,
      },
      {
        name: "HI CHAD",
        inCirculation: 1,
      },
      {
        name: "MONDAY",
        inCirculation: 1,
      },
      {
        name: "SKETCH BOOK",
        inCirculation: 1,
      },
      {
        name: "ANOTHER SELLOUT",
        inCirculation: 1,
      },
      {
        name: "AHHH",
        inCirculation: 1,
      },
      {
        name: "WHAT COULD HAVE BEEN",
        inCirculation: 1,
      },
      {
        name: "THAT ONE NIGHT",
        inCirculation: 1,
      },
      {
        name: "CHARLIES ANGEL",
        inCirculation: 1,
      },
      {
        name: "HES HERE PFP",
        inCirculation: 1,
      },
      {
        name: "DEATH TO BEARS",
        inCirculation: 1,
      },
      {
        name: "THE LAB",
        inCirculation: 1,
      },
      {
        name: "BLOTTER PAPER",
        inCirculation: 1,
      },
      {
        name: "ALIEN COLLECTOR",
        inCirculation: 1,
      },
      {
        name: "MAKE IT RAIN",
        inCirculation: 1,
      },
      {
        name: "GOLDEN IDOL",
        inCirculation: 1,
      },
      {
        name: "ICE MAN PFP",
        inCirculation: 1,
      },
      {
        name: "BEAR MARKET",
        inCirculation: 1,
      },
      {
        name: "MONDAY PFP",
        inCirculation: 1,
      },
      {
        name: "WE COME IN PEACE",
        inCirculation: 1,
      },
      {
        name: "DECONSTRUCTED BAUHAUS",
        inCirculation: 1,
      },
      {
        name: "LONELY KING",
        inCirculation: 1,
      },
      {
        name: "SEE YOU NEXT YEAR",
        inCirculation: 1,
      },
      {
        name: "BABY ALIEN",
        inCirculation: 1,
      },
      {
        name: "SCHOOL PICTURE",
        inCirculation: 1,
      },
      {
        name: "NEW NOW",
        inCirculation: 1,
      },
      {
        name: "FLOATER",
        inCirculation: 1,
      },
      {
        name: "MOURNING",
        inCirculation: 1,
      },
      {
        name: "ANGRY ARTIST",
        inCirculation: 1,
      },
      {
        name: "NOOT NOOT",
        inCirculation: 1,
      },
      {
        name: "SHE COOL",
        inCirculation: 1,
      },
      {
        name: "HARD FLEX",
        inCirculation: 1,
      },
      {
        name: "COOL DAD",
        inCirculation: 1,
      },
      {
        name: "CROOKED COP",
        inCirculation: 1,
      },
      {
        name: "ANGRY GOLD",
        inCirculation: 1,
      },
      {
        name: "DONT FEAR THE REAPER",
        inCirculation: 1,
      },
      {
        name: "FUCK HIRST",
        inCirculation: 1,
      },
      {
        name: "STONKS",
        inCirculation: 1,
      },
      {
        name: "MIDSOMMAR",
        inCirculation: 1,
      },
      {
        name: "SHES ON FIRE PFP",
        inCirculation: 1,
      },
      {
        name: "JUST RUN",
        inCirculation: 1,
      },
      {
        name: "FORGOT THE PAPERS",
        inCirculation: 1,
      },
      {
        name: "HARD ASF",
        inCirculation: 1,
      },
      {
        name: "HI",
        inCirculation: 1,
      },
      {
        name: "WHERE AM I",
        inCirculation: 1,
      },
      {
        name: "3D HIRST",
        inCirculation: 1,
      },
      {
        name: "MIB",
        inCirculation: 1,
      },
      {
        name: "NOW IN 3D",
        inCirculation: 1,
      },
      {
        name: "DONT FUCK WITH ME",
        inCirculation: 1,
      },
      {
        name: "TRINITY",
        inCirculation: 1,
      },
      {
        name: "WANT SOME CANDY",
        inCirculation: 1,
      },
      {
        name: "BAD IS GOOD",
        inCirculation: 1,
      },
      {
        name: "ROYAL COURT",
        inCirculation: 1,
      },
      {
        name: "OVERPAID",
        inCirculation: 1,
      },
      {
        name: "REKT MOONBOY",
        inCirculation: 1,
      },
      {
        name: "ELEVEN MADISON PARK",
        inCirculation: 1,
      },
      {
        name: "THE RED PILL",
        inCirculation: 1,
      },
      {
        name: "THE SHINING",
        inCirculation: 1,
      },
      {
        name: "YOU SKATE BRO",
        inCirculation: 1,
      },
    ],
  },
];

export const NFT_CANDY_MACHINE_ID =
  "8J9W44AfgWFMSwE4iYyZMNCWV9mKqovS5YHiVoKuuA2b";

export const BASE_API_URI = "https://sol-api-cnkt3.ondigitalocean.app";
// export const BASE_API_URI = 'http://localhost:5000';

export const NFTS_API = {
  GET_ALL: `${BASE_API_URI}/nft/${NFT_CANDY_MACHINE_ID}`,
  GET_MINTED_INFO: `${BASE_API_URI}/nft/minted-info`,
};
