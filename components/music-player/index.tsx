import axios from "axios";
import { useEffect, useState } from "react";
import Player from "./player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { Button } from "../ui/button";

const Index = () => {
  const [songs, setsongs]: any = useState([]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:1337/api/songs?populate=*"
        );
        let _musics = response.data;
        console.log(_musics);
        _musics.map((music: any) => {
          console.log(music);
          let pload = {
            title: music.attributes.songTitle,
            artist: music.attributes.artists.data,
            duratiion: music.attributes.duration,
            // img_src:
            //   "http://localhost:1337" +
            //   music.attributes.img_src.data[0].attributes.url,
            src:
              "http://localhost:1337" +
              music.attributes.audioFile.data[0].attributes.url,
          };
          console.log(pload);
          setsongs((oldSongs: any) => [...oldSongs, pload]);
          console.log(songs);
        });
      } catch (error) {
        console.error(error);
      }
    };
    console.log(songs);
    fetchData();
  }, []);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div>
      {songs.length > 0 && (
        <>
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </>
      )}
    </div>
  );
};

export default Index;
