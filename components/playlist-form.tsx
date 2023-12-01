import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { getTokenFromLocalCookie } from "@/lib/auth";
import { randomUUID } from "crypto";
import { redirect, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
function PlaylistForm() {
  const { isOpen, onClose, type, data } = useModal();
  const [songs, setSongs]: any = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const token = getTokenFromLocalCookie();
  const router = useRouter();
  const isModalOpen = isOpen && type === "createPlaylist";
  const fetchSongs = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:1337/api/songs?populate=*"
      );
      const _musics = response.data;
      console.log(_musics);

      setSongs(_musics);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);
  const [name, setName] = useState("");
  const [value, setValue] = React.useState("");
  const [description, setDescription] = useState("");
  const [tracks, setTracks] = useState([]);
  const [addSongs, setAddSongs] = useState([]);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = (song) => {
    const updatedSongs = songs.filter((item) => item.id !== song.id);
    setSongs(updatedSongs);
    setAddSongs([...addSongs, song]);
  };
  const handleSubmit = async () => {
    try {
      if (name === "") return;
      const requestBody = {
        data: {
          playlistId: uuidv4(),
          playlistName: name,
          songs: addSongs,
        },
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/playlists`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Success");
        const obj = response.data;
        const id = obj.data.id;
        UserAssignToPlaylist(id);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const UserAssignToPlaylist = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userId = response.data.id;
      const updatedPlaylists = [...response.data.playlists, { id: id }];
      setPlaylists(updatedPlaylists);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`,
        { playlists: updatedPlaylists },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // if (res.status === 200) {
      // console.log("OK");
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
    // }
    // console.log(response);
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Playlist</DialogTitle>
          <DialogDescription>
            Create a Playlist of your Choice. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Playlist Name"
              className="col-span-3"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="">
            <Command>
              <CommandInput placeholder="Search songs..." />
              <CommandEmpty>No music found.</CommandEmpty>
              <CommandGroup>
                {songs.map((song) => (
                  <CommandItem
                    key={song.id}
                    value={song.attributes.songTitle}
                    onSelect={() => handleClick(song)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === song.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {song.attributes.songTitle}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PlaylistForm;
