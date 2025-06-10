import { MoviesResponse } from "@/types";

export const getSimilarMovies = async ( movieId: string) => {
    
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    }
  );
  const data = await response.json();  
  
  return data as MoviesResponse

};
