import React, { useState, useRef, useEffect } from "react";
import Controls from "./controls";
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Player(props: any) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      startTimer();
    } else {
      audioEl.current.pause();
    }
  });
  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTime((t) => t + 1);
      console.log(time);
    }, 1000);
  };

  const SkipSong = (forwards = true) => {
    const { songs, currentSongIndex, setCurrentSongIndex } = props;
    setCurrentSongIndex((prevIndex: any) => {
      let newIndex = forwards ? prevIndex + 1 : prevIndex - 1;
      if (newIndex < 0) {
        newIndex = songs.length - 1;
      } else if (newIndex >= songs.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-700 p-4 flex flex-col justify-center shadow-md backdrop-opacity-50 z-20 h-22">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <div className="flex items-center flex-1">
        <div className="flex items-center">
          {/* <img
            src={props.songs[props.currentSongIndex].img_src}
            alt="Album Cover"
            className="w-12 h-12 mr-4 rounded-md"
          /> */}
          <div>
            <h4 className="text-white">Now Playing</h4>
            <p className="text-red-400 text-lg font-semibold">
              {props.songs[props.currentSongIndex].title}
            </p>
            <p className="text-red-400">
              {
                props.songs[props.currentSongIndex].artist[0].attributes
                  .artistName
              }
            </p>
          </div>
        </div>
        <div className="flex flex-col m-auto justify-center items-center flex-1">
          <p className="text-white">
            Next up:{" "}
            <span>
              {props.songs[props.nextSongIndex].title} by{" "}
              {props.songs[props.nextSongIndex].artist[0].attributes.artistName}
            </span>
          </p>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
        </div>
        <div className="flex flex-col justify-center items-center group">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Volume2 />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <Slider />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="timeline bg-gray-300 h-1 mt-2 relative">
        <div
          className="progress-bar bg-green-500 h-full"
          style={{
            width: `${
              time && props.songs[props.currentSongIndex].duratiion
                ? (time / props.songs[props.currentSongIndex].duratiion) * 100
                : 0
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Player;
