import axios from "axios";
import { useEffect, useState } from "react";
import Player from "./player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { Button } from "../ui/button";
import { useSongsContext } from "@/lib/songsContext";

const Index = () => {
  const { songs, updateSongs } = useSongsContext();
  const [newSongs, setNewSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Accumulate payloads in a separate array
        const payloads = songs.map((music: any) => ({
          title: music.attributes.songTitle,
          artist: music.attributes.artists.data,
          duration: music.attributes.duration,
          songId: music.id,
          src:
            "http://localhost:1337" +
            music.attributes.audioFile.data[0].attributes.url,
        }));

        // Update state once with all payloads
        setNewSongs(payloads);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [songs]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > newSongs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, newSongs]);

  return (
    <div>
      {newSongs.length > 0 && (
        <>
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={newSongs}
          />
        </>
      )}
    </div>
  );
};

export default Index;
