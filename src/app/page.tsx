import { MovieCarousel } from "@/components/MovieCarousel";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div className="container mx-auto">
      <MovieCarousel/>
      <div className="flex flex-col gap-13 mx-auto max-w-[1280px]">
        <Upcoming />
        <Popular/>
        <TopRated/>
      </div>
    </div>
  );
}
