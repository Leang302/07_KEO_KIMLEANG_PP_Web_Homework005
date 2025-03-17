import {
  BookText,
  Camera,
  Clapperboard,
  Dumbbell,
  House,
  Microchip,
  Music,
  Plane,
  SquarePen,
  Sticker,
} from "lucide-react";
const size = 20;
const color = "text-custom-red";
export const sideBarItems = [
  {
    id: 1,
    title: "Home",
    icon: <House size={size} className={color} />,
    route: "/",
  },
  {
    id: 2,
    title: "Book Catagories",
    icon: <BookText size={size} className={color} />,
    route: "/book-catagories",
  },
  {
    id: 3,
    title: "Old School Cartoons",
    icon: <Sticker size={size} className={color} />,
    route: "/old-school-cartoons",
  },
  {
    id: 4,
    title: "Movies & TV Shows",
    icon: <Clapperboard size={size} className={color} />,
    route: "/movies-and-tv-shows",
  },
  {
    id: 5,
    title: "Music",
    icon: <Music size={size} className={color} />,
    route: "/music",
  },
  {
    id: 6,
    title: "Photography",
    icon: <Camera size={size} className={color} />,
    route: "/photography",
  },
  {
    id: 7,
    title: "Sport & Fitness",
    icon: <Dumbbell size={size} className={color} />,
    route: "/sport-and-fitness",
  },
  {
    id: 8,
    title: "Technology & Gadgets",
    icon: <Microchip size={size} className={color} />,
    route: "/technology-and-gadgets",
  },
  {
    id: 9,
    title: "Travel & Exploration",
    icon: <Plane size={size} className={color} />,
    route: "/travel-and-exploration",
  },
  {
    id: 10,
    title: "Writing & Journaling",
    icon: <SquarePen size={size} className={color} />,
    route: "/writing-and-journaling",
  },
];
