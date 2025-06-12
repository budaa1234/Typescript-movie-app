"use client"
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Movie} from "@/types";
import { SearchResult } from "./SearchResult";



export const HomeSearch = () => {
  const [searchValue, setSearchValue] = useState("");
 
  
  const [movies, setMovies] = useState<Movie[]>([]);
  
  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const data = await response.json();
      
      

      setMovies(data.results)
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    searchMovie();
  }, [searchValue]);
  return (
    <div >
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", "rounded-lg shadow-sm border-none", "h-[36px]")}
      />
     
      {movies?.length > 0 && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
