"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { getMovieTrailer} from "@/lib/api/get-movieTrailer"
import { MovieId } from "@/types";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
type MovieTrailerProps = {
    movieId: number
    id: number
}
export const MovieTrailer = ({ movieId }: MovieTrailerProps ) => {
  const [trailer, setTrailer] = useState<MovieId[]>([]);
  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);
        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);
  const movieTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );
  // console.log(trailer);
  return (
    <Dialog>
      <DialogTrigger asChild className="w-[145px] h-[40px]">
        <Button >Watch trailer</Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[991px]">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{
            height: "561",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
