"use client"
import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Movie } from "@/types";
import { MoviesLouding } from "./MoviesLouding";
import { getTopRatedMovies } from "@/lib/api/get-topRated-movies";
export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [louding, setLoudig]= useState(false)
  useEffect(() => {
    setLoudig(true)
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();

      const firstTenMovies = topRatedMovies?.results?.slice(0, 10)

      setTopRatedMovies(firstTenMovies);

      // console.log(topRatedMovies);
    };
    setLoudig(false)
    fetchMovies();
  }, []);
  if(louding) return <MoviesLouding/>
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Top Rated</h1>
        <Link href={`/topRated`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {topRatedMovies?.map((movie) => (
          <MovieCard key={movie?.id} id={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
