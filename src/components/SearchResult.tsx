import Link from "next/link";

import { SearchResultCard } from "./SearchResultCart";
import { Movie } from "@/types";
type SearchResultProps = {
    movies: Movie[]
    setSearchValue:  (value: string) => void
}
export const SearchResult = ({ movies, setSearchValue }: SearchResultProps) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      
      {movies &&
        movies.slice(0, 5)
          .map((movie: Movie, i) => (
            <SearchResultCard
            key={i}
              movie={movie}
              setSearchValue={setSearchValue}
            />
          ))}
      <Link href={`/search`}>
        <p className="p-3">See all results for "Wicked"</p>
      </Link>
    </div>
  );
};
