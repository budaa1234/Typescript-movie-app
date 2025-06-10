"use client";
import { Star } from "lucide-react";
import { Movie } from "@/types";
import { useEffect, useState } from "react";
import { MovieTrailer } from "@/components/MovieTrailer";
import { getMovieById } from "@/lib/api/getMovieById";
import { Button } from "@/components/ui/button";
export const Cover = ({ movieId }: { movieId: string }) => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      console.log(data);
      setMovie(data);
    };
     getMovie();
  }, [movieId]);
  console.log(movie);
  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`;
  const poster = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`;
  return (
    <div>
      <div className="flex justify-between p-5 mx-auto max-w-[1280px]">
        <div className="flex-col">
          <p className="text-[24px] font-normal">{movie?.title}</p>
          <p className="text-[12px] md:text-[18px]">
            {movie?.release_date} · PG · {movie?.runtime}m
          </p>
        </div>
        <div className="flex">
          <div className="">
            <Star className="text-yellow-300 fill-amber-300" />
          </div>
          <div>
            <p className="text-[14px] ">{movie?.vote_average?.toFixed(1)}/10</p>
            <p className="text-[12px] text-[#71717A]">
              {movie?.popularity?.toFixed(0)}k
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:gap-8 md:justify-center">
        <img
          src={poster}
          className="md:w-[290px] md:h-[428px] hidden md:inline "
        />
        <div className="relative flex">
          <img
            src={imgUrl}
            className="w-screen md:w-[760px]  h-[211px]  md:h-[428px]"
          />
          <div className="absolute flex items-center content-end p-[12px] gap-3">
            <MovieTrailer movieId={movieId} />
          </div>
        </div>
      </div>
      <div className="flex p-[20px] gap-8">
        <img src={poster} className="w-[100px] h-[148px] md:hidden" />
        <div className="flex flex-col gap-y-4 md:justify-center">
          <div className="flex flex-wrap gap-3">
            {movie?.genres?.map((genre) => (
              <Button key={genre.id} variant="outline" className="rounded-full h-[20px]">
                {genre.name}
              </Button>
            ))}
          </div>
          <p className="text-[16px]">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};
