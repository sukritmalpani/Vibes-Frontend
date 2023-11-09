"use client";
import SongRow from "@/components/songRow";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTokenFromLocalCookie } from "@/lib/auth";
import { Separator } from "@radix-ui/react-separator";
import axios from "axios";
import { Play } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export const playlist = [
  {
    index: 1,
    title: "Song 1",
    album: "Album 1",
    duration: "3:45",
    dateAdded: "2023-11-09",
    like: true,
  },
  {
    index: 2,
    title: "Song 2",
    album: "Album 2",
    duration: "4:15",
    dateAdded: "2023-11-08",
    like: false,
  },
  {
    index: 3,
    title: "Song 3",
    album: "Album 1",
    duration: "2:30",
    dateAdded: "2023-11-07",
    like: true,
  },
  // Add more songs with album information
];
export default function PlaylistId() {
  const { playlistId } = useParams();
  const token = getTokenFromLocalCookie();
  const [songs, setSongs] = useState([]);
  const [songs1, setSongs1] = useState([]);
  const [songs2, setSongs2] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const getPlaylists = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/playlists?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    const playlists = data.data;
    playlists.map((playlist) => {
      if (playlist.attributes.playlistId === playlistId) {
        setSongs1(playlist.attributes.songs.data);
        setPlaylistName(playlist.attributes.playlistName);
      }
    });
    console.log(playlists);
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/songs?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSongs2(res.data.data);
  };
  const filterSongs = () => {
    const filteredSongs = songs2.filter((song2) =>
      songs1.some((song1) => song1.id === song2.id)
    );
    setSongs(filteredSongs);
  };
  useEffect(() => {
    getPlaylists();
  }, []);
  useEffect(() => {
    if (songs1.length > 0 && songs2.length > 0) {
      filterSongs();
    }
  }, [songs1, songs2]);
  // console.log("Songs1: ", songs1);
  // console.log("Songs2: ", songs2);
  // console.log("Songs: ", songs);
  return (
    <div className="">
      <div className="h-64 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white text-center flex items-end justify-start gap-5">
        <div>
          <Button className="h-20 w-20 bg-purple-700 rounded-full hover:bg-purple-800 shadow-lg shadow-black">
            <Play className="h-15 w-15" />
          </Button>
        </div>
        {/* You can replace the gradient with an image or customize it */}
        <div className="flex flex-col items-start justify-end">
          <h1 className="text-2xl font-bold mb-2">Playlist</h1>
          <h1 className="text-5xl font-bold mb-2">{playlistName}</h1>
          <p className="text-2xl">Your favorite songs in one place.</p>
        </div>
      </div>
      <Separator className="h-1" />
      <div className="p-4 rounded-3xl bg-gradient-to-b from-purple-700 to-black">
        <div className="flex items-center py-2 border-b font-semibold text-white justify-stretch">
          <div className="w-8 mr-4 flex-grow pl-4">#</div>
          {/* Placeholder for album artwork */}
          <div className="flex-grow">Title</div>
          <div className="flex-grow">Album</div>
          <div className="flex-grow">Duration</div>
          <div className="pl-4 flex-grow">Date Added</div>
          <div className="ml-4 flex-grow">Like</div>
        </div>
        {/* <h1 className="text-2xl font-bold mb-4">My Playlist</h1> */}
        <div className="border-t border-b border-gray-300 overflow-y-auto">
          <ScrollArea className="h-72">
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
            {songs.map((song) => (
              <SongRow key={song.index} song={song} />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
