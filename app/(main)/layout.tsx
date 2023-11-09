// import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
"use client";
import Index from "@/components/music-player";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0"> */}
      {/* <NavigationSidebar /> */}
      {/* </div> */}
      <main className="h-full">{children}</main>
      <Index />
    </div>
  );
};

export default MainLayout;
