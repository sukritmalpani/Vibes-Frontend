import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <div className="bg-black flex items-center justify-around gap-8">
      <img
        className="h-10 sm:h-10 md:h-15 lg:h-20 mr-auto"
        src="/images/Logo.jpeg"
      />
      <div className="flex items-center">
        <div className="relative">
          <div className="bg-stone-700 bg-opacity-40 rounded-3xl relative flex items-center">
            <Search className="absolute left-2 h-4 sm:h-6 md:h-8 lg:h-8 text-white" />
            <Input
              className="flex-grow bg-transparent border-none outline-none pl-11"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="h-4 sm:h-6 md:h-8 lg:h-10 bg-purple-800 rounded-3xl flex items-center justify-around hover:cursor-pointer hover:bg-purple-600 ml-auto p-4 gap-4 mr-4">
        <div className="text-white md:text-1l lg:text-1xl font-extrabold font-['Roboto']">
          Friends
        </div>
        <img
          className="w-5 h-3 sm:w-4 sm:h-2 md:w-5 md:h-3 lg:w-6 lg:h-4"
          src="/images/ff.png"
        />
      </div>
    </div>
  );
}
