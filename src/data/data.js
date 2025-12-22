import FantasyCat from "../assets/FantasyCat.png";
import SciFiCat from "../assets/Sci-fiCat.png";
import FictionCat from "../assets/FictionalCat.png";
import NonFictionCat from "../assets/Non-fictionalCat.png";
import HorrorCat from "../assets/HorrorCat.png";

// Fantasy books
import FantasyOne from "../assets/FantasyOne.png";
import FantasyTwo from "../assets/FantasyTwo.png";
import FantasyThree from "../assets/FantasyThree.png";
import FantasyFour from "../assets/FantasyFour.png";
import FantasyFive from "../assets/FantasyFive.png";
import FantasySix from "../assets/FantasySix.png";

// Sci-Fi books
import SciFiOne from "../assets/Sci-fiOne.png";
import SciFiTwo from "../assets/Sci-fiTwo.png";
import SciFiThree from "../assets/Sci-fiThree.png";
import SciFiFour from "../assets/Sci-fiFour.png";
import SciFiFive from "../assets/Sci-fiFive.png";
import SciFiSix from "../assets/Sci-fiSix.png";

// Fiction
import FicOne from "../assets/FicOne.png";
import FicTwo from "../assets/FicTwo.png";
import FicThree from "../assets/FicThree.png";
import FicFour from "../assets/FicFour.png";
import FicFive from "../assets/FicFive.png";
import FicSix from "../assets/FicSix.png";

// Non-fiction
import NficOne from "../assets/NficOne.png";
import NficTwo from "../assets/NficTwo.png";
import NficThree from "../assets/NficThree.png";
import NficFour from "../assets/NficFour.png";
import NficFive from "../assets/NficFive.png";
import NficSix from "../assets/NficSix.png";

// Horror
import HorOne from "../assets/HorOne.png";
import HorTwo from "../assets/HorTwo.png";
import HorThree from "../assets/HorThree.png";
import HorFour from "../assets/HorFour.png";
import HorFive from "../assets/HorFive.png";
import HorSix from "../assets/HorSix.png";

export const categories = [
  { id: "Fantasy", name: "Fantasy", genre: "fantasy", img: FantasyCat },
  { id: "Sci-fi", name: "Sci-fi", genre: "sci-fi", img: SciFiCat },
  {
    id: "Fiction",
    name: "Fiction",
    genre: "fiction",
    img: FictionCat,
  },
  {
    id: "Non-Fiction",
    name: "Non-Fiction",
    genre: "non-fiction",
    img: NonFictionCat,
  },
  { id: "Horror", name: "Horror", genre: "horror", img: HorrorCat },
];

export const books = [
  {
    id: "fantasy-1",
    title: "The Eternal Dragon's Curse",
    author: "A. L. Rowan",
    genre: "fantasy",
    picks: 142,
    likes: 96,
    rating: 4.7,
    bookUrl: FantasyOne,
  },
  {
    id: "fantasy-2",
    title: "A Wizard's Final Spell",
    author: "Mira Kael",
    genre: "fantasy",
    picks: 118,
    likes: 82,
    rating: 4.5,
    bookUrl: FantasyTwo,
  },
  {
    id: "fantasy-3",
    title: "Whispers of the Forgotten Woods",
    author: "T. R. Solen",
    genre: "fantasy",
    picks: 164,
    likes: 121,
    rating: 4.8,
    bookUrl: FantasyThree,
  },
  {
    id: "fantasy-4",
    title: "Clash of The Ancient Realms",
    author: "Lysandra Vane",
    genre: "fantasy",
    picks: 97,
    likes: 63,
    rating: 4.3,
    bookUrl: FantasyFour,
  },
  {
    id: "fantasy-5",
    title: "City of the Celestial Sky",
    author: "Mira Kael",
    genre: "fantasy",
    picks: 86,
    likes: 54,
    rating: 4.1,
    bookUrl: FantasyFive,
  },
  {
    id: "fantasy-6",
    title: "The Sapphire Crown",
    author: "Seren Holt",
    genre: "fantasy",
    picks: 133,
    likes: 89,
    rating: 4.6,
    bookUrl: FantasySix,
  },

  {
    id: "scifi-1",
    title: "Echoes of The Neon Nebula",
    author: "Kade Mercer",
    genre: "sci-Fi",
    picks: 152,
    likes: 104,
    rating: 4.2,
    bookUrl: SciFiOne,
  },
  {
    id: "scifi-2",
    title: "Starfall Command",
    author: "Rhea Nolan",
    genre: "sci-Fi",
    picks: 129,
    likes: 91,
    rating: 4.3,
    bookUrl: SciFiTwo,
  },
  {
    id: "scifi-3",
    title: "Neon Requiem",
    author: "J. X. Calder",
    genre: "sci-Fi",
    picks: 175,
    likes: 139,
    rating: 4.1,
    bookUrl: SciFiThree,
  },
  {
    id: "scifi-4",
    title: "The Silent Horizon",
    author: "Iris Voss",
    genre: "sci-Fi",
    picks: 94,
    likes: 60,
    rating: 4.2,
    bookUrl: SciFiFour,
  },
  {
    id: "scifi-5",
    title: "Rise of The Synthetics",
    author: "Leo Ashcroft",
    genre: "sci-Fi",
    picks: 111,
    likes: 73,
    rating: 4.1,
    bookUrl: SciFiFive,
  },
  {
    id: "scifi-6",
    title: "Throne of Stars",
    author: "Nina Cross",
    genre: "sci-Fi",
    picks: 136,
    likes: 88,
    rating: 4.2,
    bookUrl: SciFiSix,
  },

  {
    id: "fiction-1",
    title: "The Lighthouse keeper's Secret",
    author: "Hannah Brooks",
    genre: "fiction",
    picks: 121,
    likes: 77,
    rating: 4.2,
    bookUrl: FicOne,
  },
  {
    id: "fiction-2",
    title: "When We Met In The Rain",
    author: "Oliver Reed",
    genre: "fiction",
    picks: 98,
    likes: 61,
    rating: 4.0,
    bookUrl: FicTwo,
  },
  {
    id: "fiction-3",
    title: "The Clockwork Murders",
    author: "Clara Finch",
    genre: "fiction",
    picks: 144,
    likes: 109,
    rating: 4.6,
    bookUrl: FicThree,
  },
  {
    id: "fiction-4",
    title: "The Whispering Woods",
    author: "Samuel Price",
    genre: "fiction",
    picks: 87,
    likes: 49,
    rating: 3.9,
    bookUrl: FicFour,
  },
  {
    id: "fiction-5",
    title: "The Long Way Home",
    author: "Evelyn Hart",
    genre: "fiction",
    picks: 113,
    likes: 72,
    rating: 4.1,
    bookUrl: FicFive,
  },
  {
    id: "fiction-6",
    title: "The House of Immpossible Blooms ",
    author: "Noah Lin",
    genre: "fiction",
    picks: 159,
    likes: 118,
    rating: 4.7,
    bookUrl: FicSix,
  },

  {
    id: "nonfiction-1",
    title: "Stardust And Secrets",
    author: "Dr. A. Chandra",
    genre: "non-fiction",
    picks: 182,
    likes: 146,
    rating: 4.2,
    bookUrl: NficOne,
  },
  {
    id: "nonfiction-2",
    title: "The Silent Emperor",
    author: "M. J. Cassidy",
    genre: "non-fiction",
    picks: 167,
    likes: 133,
    rating: 4.1,
    bookUrl: NficTwo,
  },
  {
    id: "nonfiction-3",
    title: "Mindful Moments",
    author: "S. Ren",
    genre: "non-fiction",
    picks: 139,
    likes: 97,
    rating: 3.0,
    bookUrl: NficThree,
  },
  {
    id: "nonfiction-4",
    title: "Wild Whispers",
    author: "E. H. Thoreau",
    genre: "non-fiction",
    picks: 91,
    likes: 58,
    rating: 4.0,
    bookUrl: NficFour,
  },
  {
    id: "nonfiction-5",
    title: "Brushstrokes of Genius",
    author: "L. Vincent",
    genre: "non-fiction",
    picks: 156,
    likes: 121,
    rating: 4.2,
    bookUrl: NficFive,
  },
  {
    id: "nonfiction-6",
    title: "The Stratergy of Compass",
    author: "K. Potter",
    genre: "non-fiction",
    picks: 127,
    likes: 84,
    rating: 4.3,
    bookUrl: NficSix,
  },

  {
    id: "horror-1",
    title: "The House on Blackwood Hill",
    author: "A. R.Morte",
    genre: "horror",
    picks: 149,
    likes: 102,
    rating: 4.6,
    bookUrl: HorOne,
  },
  {
    id: "horror-2",
    title: "The Night of The Blade",
    author: "J. C. Carver",
    genre: "horror",
    picks: 117,
    likes: 81,
    rating: 4.4,
    bookUrl: HorTwo,
  },
  {
    id: "horror-3",
    title: "Whispers from The Void",
    author: "H. P. Lovecraft",
    genre: "horror",
    picks: 163,
    likes: 131,
    rating: 4.8,
    bookUrl: HorThree,
  },
  {
    id: "horror-4",
    title: "The Shattered Mind",
    author: "S. K. King",
    genre: "horror",
    picks: 92,
    likes: 59,
    rating: 4.1,
    bookUrl: HorFour,
  },
  {
    id: "horror-5",
    title: "The Harvest of Souls",
    author: "A. Blackwood",
    genre: "horror",
    picks: 106,
    likes: 74,
    rating: 4.3,
    bookUrl: HorFive,
  },
  {
    id: "horror-6",
    title: "Dead City Rising",
    author: "M. Brooks",
    genre: "horror",
    picks: 138,
    likes: 99,
    rating: 4.5,
    bookUrl: HorSix,
  },
];
