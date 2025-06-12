// import Link from "next/link";
// // import { MovieCard } from "./MovieCard";
// import { SearchResultCard } from "./SearchResultCart";
// import { Movie } from "@/types";
// type SearchResultProps = {
//     movies: Movie
    
// }
// export const SearchResult = ({ movies, setSearchValue }: SearchResultProps) => {
//   return (
//     <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
//       {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//         {movies?.results?.slice(0, 5).map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div> */}
//       {movies &&
//         movies?.results
//           ?.slice(0, 5)
//           .map((movie, i) => (
//             <SearchResultCard
//               key={i}
//               movie={movie}
//               setSearchValue={setSearchValue}
//             />
//           ))}
//       <Link href={`/search`}>
//         <p className="p-3">See all results for "Wicked"</p>
//       </Link>
//     </div>
//   );
// };
