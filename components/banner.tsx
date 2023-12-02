import Image from "next/image";
import banner_music from "../public/images/banner_music.jpeg";
import { Play } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full h-96 xs:h-[236px] sm:h-64 md:h-70 lg:h-96 flex items-center justify-center overflow-hidden z-0 bg-[url('/images/banner_music.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="w-full flex p-2 justify-around">
        <div className="flex flex-col items-start justify-center gap-14">
          <div className="flex flex-col">
            <div className="text-fuchsia-50 text-lg sm:text-xl md:text-3xl lg:text-6xl xl:text-10xl font-extrabold font-['Roboto']">
              VibesTalk
            </div>
            <div className="text-black text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-extrabold font-['Roboto']">
              Harmonizing the Globe through Music
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="w-60 sm:w-20 md:w-40 lg:w-60 bg-purple-800 hover:bg-purple-600 flex items-center justify-evenly p-2 cursor-pointer rounded-3xl">
              <div className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-extrabold font-['Roboto']">
                Join VibesTalk
              </div>
              <div>
                <Play />
              </div>
            </div>
            <p className="text-white text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-medium font-['Roboto'] mt-4">
              Unlock the Rhythm of Conversation
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-80 w-80 ">
          <div className="flex items-end justify-start">
          <Image src="/images/banner_music.jpeg" width={660} layout="full" height={840} alt="nice images" className="relative"/>
            <div className="absolute">
              <div className="left-0 bottom-0 w-20 sm:w-30 md:w-60 lg:w-80 bg-opacity-80 rounded-3xl flex items-center justify-evenly p-4">
                <Image src="/images/play.png" width={660} layout="full" height={840} alt="nice images" className="w-16 h-16 cursor-pointer"/>
                <div className="text-white text-2xl lg:text-4xl font-extrabold font-['Roboto'] flex items-center justify-center">
                  Play Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
