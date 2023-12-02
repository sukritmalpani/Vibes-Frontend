"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SideNavigation from "@/components/navigation-bar/sidenavigation";
import Banner from "@/components/banner";
import HomePlaylist from "@/components/home-playlist";
import Image from "next/image";
import { Play } from "lucide-react";

const fetcher = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/songs`);
  const data = await response.json();
  console.log(data);
};
export default function Home() {
  return(
    <div className="flex flex-col p-0">
      <div className="flex">
        <SideNavigation />
        <div className="w-full">
        <div className="w-full h-[548px] xs:h-[236px] sm:h-64 md:h-70 lg:h-[548px] flex items-center justify-between overflow-hidden z-0 bg-[url('/images/eepe.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full flex p-2 justify-around">
        <div className="flex flex-col items-start justify-center gap-14">
          <div className="flex flex-col">
            <div className="text-fuchsia-50 text-lg sm:text-xl md:text-3xl lg:text-6xl xl:text-10xl font-extrabold font-['Roboto']">
              VibesTalk
            </div>
            <div className="text-[#ffffff] text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-extrabold font-['Roboto']">
              Harmonizing the Globe through Music
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="w-60 sm:w-20 md:w-40 lg:w-60 bg-purple-800 hover:bg-purple-600 flex items-center justify-evenly p-2 cursor-pointer rounded-3xl">
              <div className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-extrabold font-['Roboto']">
                Start Playing
              </div>
              <div>
                <Play />
              </div>
            </div>
            <p className="text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-medium font-['Roboto'] mt-4">
              Start playing the songs and join the party world of music.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[660px] h-[840px] ">
          <Image src="/images/hero222.png" width={660} layout="full" height={840} alt="Description of the image" className="relative"/>
        </div>
      </div>
          </div>
      <div className="w-full h-7 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
