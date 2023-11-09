"use client";
const recentlyPlayedData = [
  { id: 1, title: "Song 1", artist: "Artist 1" },
  { id: 2, title: "Song 2", artist: "Artist 2" },
  { id: 3, title: "Song 3", artist: "Artist 3" },
  // Add more items as needed
];
export default function HomePlaylist() {
  return (
    <div className="overflow-y-auto">
      <div className="p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
        <div className="music-card w-64 border rounded-lg shadow-lg mx-4 my-6">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Album Cover"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="music-details p-4">
            <h2 className="music-title text-xl font-bold">Song Title</h2>
            <p className="music-artist text-lg text-gray-600">Artist Name</p>
          </div>
          <div className="music-controls flex justify-between p-2">
            <button className="text-3xl">&lt;&lt;</button>
            <button className="text-3xl">▶</button>
            <button className="text-3xl">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
