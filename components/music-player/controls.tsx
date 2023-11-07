import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { Play, SkipBack, SkipForward } from "lucide-react";

function Controls(props: any) {
  return (
    <div className="flex space-x-4 items-center mt-4 m-auto">
      <Button
        variant="outline"
        className="text-red-400 hover:text-red-500"
        onClick={() => props.SkipSong(false)}
      >
        <SkipBack />
      </Button>
      <Button
        variant="outline"
        className="text-red-400 hover:text-red-500"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <Play />
      </Button>
      <Button
        variant="outline"
        className="text-red-400 hover:text-red-500"
        onClick={() => props.SkipSong()}
      >
        <SkipForward />
      </Button>
    </div>
  );
}

export default Controls;
