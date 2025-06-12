"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { ChevronRight } from "lucide-react";
import { Genre } from "@/types";

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Genre[]>([]);

  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const data = await response.json();
      setGenres(data?.genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const handleSelectGenre = (id: number) => {
    const newGenreIds = genreIds.includes(id)
      ? genreIds.filter((t) => t !== id)
      : [...genreIds, id];
    setGenreIds(newGenreIds);
    // router.push(`/genres?genreIds=${genreIds}name=${newGenreIds}`);

    window.location.replace(
      `/genres?genreIds=${newGenreIds}`
    );
  };

  return (
    <div className="flex flex-wrap gap-4 w-[387px]">
      {genres?.map((genre) => {
        const isSelected = genreIds?.includes(genre.id);
        return (
          <Button
            variant="outline"
            className={`w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold h-[20px] ${
              isSelected ? "bg-blue-600" : "bg-white"
            }`}
            onClick={() => handleSelectGenre(genre.id)}
          >
            {genre.name}
            <ChevronRight />
          </Button>
        );
      })}
    </div>
  );
};
