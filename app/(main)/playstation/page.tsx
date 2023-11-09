"use client";
import Banner from "@/components/banner";
import HomePlaylist from "@/components/home-playlist";
import Index from "@/components/music-player";
import SideNavigation from "@/components/navigation-bar/sidenavigation";
import { getUserFromLocalCookie, unsetToken } from "@/lib/auth";
import CurrentProfile from "@/lib/currentProfile";
import { usePathname, useRouter } from "next/navigation";

export default function PlayStation() {
  const router = useRouter();
  const pathname = usePathname();
  const profile = getUserFromLocalCookie();
  console.log(profile);
  if (!profile) router.push(`/login?redirect=${pathname}`);
  const logout = () => {
    unsetToken(router);
  };
  return (
    <div className="flex flex-col p-0">
      <div className="flex">
        <SideNavigation />
        <div className="w-full">
          <Banner />
          <HomePlaylist />
        </div>
      </div>
    </div>
  );
}
