"use client"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { Movie } from "@/types";
import { MovieCard } from "./MovieCard";
import { MoviesLouding } from "./MoviesLouding";
import Link from "next/link";
import { getUpcomingMovies } from "@/lib/api/get-upcoming-movies";

export const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [louding, setLoudig] = useState(false);
  useEffect(() => {
    setLoudig(true);
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();

      const firstTenMovies = upcomingMovies?.results?.slice(0, 10);

      setUpcomingMovies(firstTenMovies);

      // console.log(upcomingMovies);
    };
    fetchMovies();
    setLoudig(false);
  }, []);
  if(louding) return <MoviesLouding/>
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Upcoming</h1>
        <Link href={`/upcoming`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {upcomingMovies?.map((movie) => (
          <MovieCard key={movie.id} id={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
