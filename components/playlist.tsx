import { getTokenFromLocalCookie } from "@/lib/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import SongCard from "./songcard";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Playlist({ playlist, onClick }) {
  const token = getTokenFromLocalCookie();
  const [playlists, setPlaylists] = useState([]);
  const getPlaylists = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      setPlaylists(data.playlists);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPlaylists();
  }, []);
  console.log("Here");
  console.log(playlists);
  return (
    <div className="w-auto overflow-x-hidden flex flex-wrap flex-1 justify-center items-center gap-8">
      {/* <ScrollArea className="w-[350px] rounded-md border p-4 bg-slate-600"> */}
      {playlists?.map((playlist: any) => (
        <SongCard
          key={playlist.id}
          title={playlist.playlistName}
          id={playlist.playlistId}
          // song={song}
          // isPlaying={isPlaying}
          // activeSong={activeSong}
          // data={data}
          // i={i}
        />
      ))}
      {/* </ScrollArea> */}
    </div>
  );
}
