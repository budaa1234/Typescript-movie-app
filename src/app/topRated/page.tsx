"use client"
import { useEffect, useState } from "react";
import { MovieCard } from "@/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import { getTopRatedMovies } from "@/lib/api/get-topRated-movies";
import { Movie } from "@/types";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
  const [totalPage, setTotalPage] = useState(0)
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTopRatedMovies(page);

      setTopRatedMovies(data?.results);
      setTotalPage(data?.total_pages)

      console.log(topRatedMovies);
    };
    fetchMovies();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1)
  }

const selectPage = (pageNumber: number) => {
  setPage(pageNumber)
}

  const previous = () => {
    setPage(page-1)
  } 
  const paginations = new Array(totalPage)
    .fill(null)
    .map((_, index) => index + 1)
    .slice(0, 3);
  return (
    <div className="flex flex-col gap-13 mx-auto max-w-[1280px]">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-black">Top Rated</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {topRatedMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} id={movie.id}/>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={previous}/>
            </PaginationItem>
            {paginations?.map((pageNumber)=>{
              return( <PaginationItem>
              <PaginationLink onClick={()=>selectPage(pageNumber)}>{pageNumber}</PaginationLink>
            </PaginationItem>)
            })}
           
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={nextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default TopRated;
