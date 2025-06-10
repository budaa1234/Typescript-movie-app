"use client"
import { MovieCard } from "@/components/MovieCard";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getPopularMovies } from "@/lib/api/get-popular-movies";
import { Movie } from "@/types";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
  useEffect(() => {
    const fetchMovies = async () => {
      const data= await getPopularMovies(page);

      setPopularMovies(data?.results)
      setTotalPage(data?.total_pages)
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
    setPage(page - 1)
  }
   
  const pagination = new Array(totalPage).fill(null).map((_, index) => index + 1).slice(0, 3)
  return (
    <div>
      <div className="flex flex-col gap-13 mx-auto max-w-[1280px]">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-black">Popular</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {popularMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} id={movie.id}/>
          ))}
        </div>
        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={previous}/>
    </PaginationItem>
    {pagination?.map((pageNumber)=>{return( <PaginationItem>
      <PaginationLink onClick={()=>selectPage(pageNumber)}>{pageNumber}</PaginationLink>
    </PaginationItem>)})}
   
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={nextPage}/>
    </PaginationItem>
  </PaginationContent>
</Pagination>
      </div>
    </div>
  );
};
export default Popular;
