"use client"
import { MovieCard } from "@/components/MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Movie } from "@/types";
import { useEffect, useState } from "react";
import { getSimilarMovies } from "@/lib/api/get-similar";
export const Similar = ({movieId}:{movieId: string}) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getSimilarMovies(movieId);
      const firstFiveMovies = data?.results?.slice(0, 5)
      setSimilarMovies(firstFiveMovies );
    };
    getMovie();
  }, [movieId ]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">More like this</h1>
        <Link href={`/similar`}>
        <Button variant="ghost">
          see more
          <MoveRight />
        </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {similarMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
};
