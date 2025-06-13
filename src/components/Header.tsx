import { Search, Film } from "lucide-react";
import Link from "next/link";
// import { HeaderGenre } from "./HeaderGenre";


import { cn } from "@/lib/utils";
import { HeaderGenre } from "./HeaderGenre";
import { ModeToggle } from "./ModeToggle";
import { HomeSearch } from "./Search";

export const Header = () => {
  return (
    <div>
      {/* logo */}

      <div className="h-[59px] w-full flex p-[20px] items-center justify-between ">
        <Link href={`/`}>
          <div className="flex ">
            <Film color="#4338CA" />
            <p className="text-[16px, #4338CA] text-[#4338CA] font-bold">\\
              Movie Z
            </p>
          </div>
        </Link>

        <div className="hidden md:flex md:gap-[70px]">
          {/* genre button */}
          <HeaderGenre />
          {/* search */}
          <div className="flex items-center gap-[12px]">
            <div className={cn("relative text-muted-foreground", "w-[379px]")}>
              <Search
                size={16}
                className="absolute -translate-y-1/2 left-3 top-1/2"
              />
              <HomeSearch />
            </div>
          </div>
        </div>

        {/* dark mode button */}
        <div className="flex gap-[12px]">
          <button className="w-[36px] h-[36px] border-[#F4F4F5] shadow-sm flex items-center justify-center rounded-md md:hidden">
            {" "}
            <Search className="w-[12px] h-[12px]" />
          </button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
