// "use client"
// import { MovieCard } from "@/components/MovieCard";
// import { useEffect, useState } from "react";
// import { parseAsInteger, useQueryState } from "nuqs";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { getSimilarMovies } from "@/lib/api/get-similar";
// import { Movie } from "@/types";
// const Similar = () => {
//   const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
//   const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1))
//   const [totalPage, setTotalPage] = useState(0)
//   useEffect(() => {
//     const getMovie = async () => {
//       const data = await getSimilarMovies(page);
//       setSimilarMovies(data?.results);
//       setTotalPage(data?.total_pages)
//        console.log(data.results);
//     };
   
    
//     getMovie();
//   }, [page]);

//   const nextPage = () => {
//     setPage(page + 1)
//   }

//   const selectPage = (pageNumber: number) => {
//     selectPage(pageNumber)
//   }

//   const  previous = () => {
//     setPage(page - 1)
//   }

//   const paginations = new Array(totalPage).fill(null).map((_, index)=>index+1).slice(0, 2);

//   return (
//     <div className="flex flex-col gap-8">
//       <div className="flex justify-between">
//         <h1 className="text-[24px] font-black">More like this</h1>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//         {similarMovies?.slice(0, 10).map((movie) => (
//           <MovieCard key={movie.id} movie={movie} id={movie.id}/>
//         ))}
//       </div>
//      <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious onClick={previous} />
//             </PaginationItem>
//             {paginations?.map((pageNumber) => {
//               return (
//                 <PaginationItem>
//                   <PaginationLink onClick={() => selectPage(pageNumber)}>
//                     {pageNumber}
//                   </PaginationLink>
//                 </PaginationItem>
//               );
//             })}

//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext onClick={nextPage} />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
      
//     </div>
//   );
// };
// export default Similar;