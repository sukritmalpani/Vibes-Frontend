import { useState } from "react";
import {
  BarChartIcon,
  ChevronsLeft,
  ChevronsRight,
  Headphones,
  HomeIcon,
  Mic,
  Music,
  Search,
  SettingsIcon,
  Star,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const navData = [
  {
    id: 0,
    icon: <Search />,
    text: "Discover",
    link: "/",
  },
  {
    id: 1,
    icon: <Music />,
    text: "Genre",
    link: "explore",
  },
  {
    id: 2,
    icon: <Headphones />,
    text: "Charts",
    link: "statistics",
  },
  {
    id: 3,
    icon: <Mic />,
    text: "Podcast",
    link: "settings",
  },
];

export default function Sidenav() {
  const [open, setopen] = useState(false);

  const toggleOpen = () => {
    setopen(!open);
  };

  const handleMouseEnter = () => {
    setopen(true);
  };

  const handleMouseLeave = () => {
    setopen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        open
          ? "w-64 transition-width duration-100 ease-in h-screen p-2 bg-black bg-opacity-90 rounded-tl-3xl"
          : "composes-sidenav transition-width duration-300 ease-in-out w-14 h-screen p-2  bg-black"
      }`}
    >
      <button
        className="self-start justify-end text-gray-300 bg-transparent border-none cursor-pointer pl-2"
        onClick={toggleOpen}
      >
        {open ? <ChevronsLeft /> : <ChevronsRight />}
      </button>
      <div
        className={`${
          open
            ? "w-36 h-16 text-white text-3xl font-bold font-['Inter'] visible capitalize flex items-center justify-center"
            : "w-36 h-16 text-white text-3xl font-bold font-['Inter'] invisible capitalize flex items-center justify-center"
        }`}
      >
        Browse
      </div>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            className="flex items-cenabsolute-center p-2 cursor-pointer text-gray-300 hover:bg-purple-500 hover:rounded-md"
            href={item.link}
          >
            {item.icon}
            {open && (
              <span className="pl-4 capitalize text-white text-lg font-semibold font-['Inter']">
                {item.text}
              </span>
            )}
          </Link>
        );
      })}
      <Separator className="my-4 bg-slate-50" />
      <div
        className={`${
          open
            ? "w-36 h-16 text-white text-3xl font-bold font-['Inter'] visible flex items-center justify-center"
            : "w-36 h-16 text-white text-3xl font-bold font-['Inter'] invisible flex items-center justify-center"
        }`}
      >
        LIBRARY
      </div>
      <Link
        className="flex items-center p-2 cursor-pointer text-gray-300 hover:bg-purple-500 hover:rounded-md"
        href={"/favourites"}
      >
        <Star />
        {open && (
          <span className="pl-4 capitalize text-white text-lg font-semibold font-['Inter']">
            Favourites
          </span>
        )}
      </Link>
      <Link
        className="flex items-center p-2 cursor-pointer text-gray-300 hover:bg-purple-500 hover:rounded-md"
        href={"/playlists"}
      >
        <Video />
        {open && (
          <span className="pl-4 capitalize text-white text-lg font-semibold font-['Inter']">
            Playlist
          </span>
        )}
      </Link>
    </div>
  );
}
