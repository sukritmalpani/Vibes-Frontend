import Link from "next/link";

export default function SongCard(props: any) {
  console.log("Props");
  console.log(props);
  return (
    <div className="flex flex-col w-60 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-44 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex`}
        ></div>
        <img
          alt="song_img"
          src="https://via.placeholder.com/200x200"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link href={`/playlists/${props.id}`}>{props.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {props.title}
        </p>
      </div>
    </div>
  );
}
