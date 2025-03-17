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
export const sideBarItems = [
  {
    id: 1,
    title: "Home",
    icon: <House size={size} />,
    route: "/",
  },
  {
    id: 2,
    title: "Book Catagories",
    icon: <BookText size={size} />,
    route: "/book-catagories",
  },
  {
    id: 3,
    title: "Old School Cartoons",
    icon: <Sticker size={size} />,
    route: "/old-school-cartoons",
  },
  {
    id: 4,
    title: "Movies & TV Shows",
    icon: <Clapperboard size={size} />,
    route: "/movies-and-tv-shows",
  },
  {
    id: 5,
    title: "Music",
    icon: <Music size={size} />,
    route: "/music",
  },
  {
    id: 6,
    title: "Photography",
    icon: <Camera size={size} />,
    route: "/photography",
  },
  {
    id: 7,
    title: "Sport & Fitness",
    icon: <Dumbbell size={size} />,
    route: "/sport-and-fitness",
  },
  {
    id: 8,
    title: "Technology & Gadgets",
    icon: <Microchip size={size} />,
    route: "/technology-and-gadgets",
  },
  {
    id: 9,
    title: "Travel & Exploration",
    icon: <Plane size={size} />,
    route: "/travel-and-exploration",
  },
  {
    id: 10,
    title: "Writing & Journaling",
    icon: <SquarePen size={size} />,
    route: "/writing-and-journaling",
  },
];
