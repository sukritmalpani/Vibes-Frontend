"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SongsContextProps {
  songs: any;
  updateSongs: (newSongs: any) => void;
}

const SongsContext = createContext<SongsContextProps | undefined>(undefined);

export const useSongsContext = (): SongsContextProps => {
  const context = useContext(SongsContext);

  if (!context) {
    throw new Error("useSongsContext must be used within a SongsProvider");
  }

  return context;
};

interface SongsProviderProps {
  children: ReactNode;
  // initialSongs: string[];
}

export const SongsProvider: React.FC<SongsProviderProps> = ({
  children,
}: // initialSongs,
SongsProviderProps) => {
  const [songs, setSongs] = useState<string[]>([]);

  const updateSongs = (newSongs: string[]) => {
    setSongs(newSongs);
  };

  return (
    <SongsContext.Provider value={{ songs, updateSongs }}>
      {children}
    </SongsContext.Provider>
  );
};
