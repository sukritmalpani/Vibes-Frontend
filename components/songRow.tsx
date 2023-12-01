// components/SongRow.js
import React from "react";

const SongRow = ({ song }) => {
  return (
    <div className="group relative flex items-center py-4 border-b border-gray-200">
      <div className="w-8 text-gray-600 font-semibold ml-4">{song.index}</div>
      <div className="flex-grow flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-md mr-4"></div>
        <h3 className="text-lg font-medium text-white">
          {song?.attributes?.songTitle}
        </h3>
      </div>
      <div className="flex-grow">
        <p className="text-gray-400">
          {song?.attributes?.album?.data?.albumTitle}
        </p>
      </div>
      <div className="w-24 flex-grow text-gray-400">{song?.duration}</div>
      <div className="w-32 flex-grow text-gray-400">{song?.dateAdded}</div>
      <div className="ml-4">
        {song?.like ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          ></svg>
        )}
      </div>
      <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default SongRow;
