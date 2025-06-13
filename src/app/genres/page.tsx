"use client";
import { AllGenres } from "@/components/AllGenres";
import { MovieCard } from "@/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import { MoviesResponse } from "@/types";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const Genres = () => {
  const [genreMovies, setGenreMovie] = useState<MoviesResponse>();
  const [genreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, [genreIds]);

  return (
    <div className="mx-auto max-w-[1280px]">
      <h1 className="text-[30px]">Search filter</h1>
      <div className="md:flex md:gap-y-6 md:mt-8">
        <div className="w-[387px]">
          <AllGenres />
        </div>
        <Separator orientation="vertical" className="h-full mx-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ">
          {genreMovies?.results?.map((movie, i) => (
            <MovieCard movie={movie} id={movie.id} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Genres;
