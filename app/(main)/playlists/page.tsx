"use client";
import Playlist from "@/components/playlist";
import PlaylistForm from "@/components/playlist-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const router = useRouter();
  // router.refresh();

  const handlePlaylistCreate = (newPlaylist) => {
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <div className="playlists-page p-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mb-4 mr-auto">My Playlists</h1>
        <PlaylistForm onPlaylistCreate={handlePlaylistCreate} />
      </div>
      <div className="">
        {/* {playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            playlist={playlist}
            onClick={(playlistId) => setSelectedPlaylist(playlistId)}
          />
        ))} */}
        <Playlist />
      </div>
      {/* {selectedPlaylist && ( */}
      {/* // <div className="selected-playlist"> */}
      {/* Render the selected playlist details and tracks */}
      {/* </div> */}
    </div>
  );
}

export default PlaylistsPage;
