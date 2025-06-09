"use client"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { Movie } from "@/types";
import { useEffect, useState } from "react";
import { getNowPlayingMovies} from "@/lib/api/get-nowPlaying-movies"
import { CarouselLouding } from "./CarouselLouding";

export const MovieCarousel = () => {
    const [nowplayingMoveis, setNowPlayingMovies]=useState<Movie[]>([])
    const [louding, setLouding] = useState(false)
    useEffect(()=>{
      setLouding(true)
       const fetchMovies = async () => {
        const nowplayingMoveis = await getNowPlayingMovies()
        const firstFive = nowplayingMoveis?.results?.slice(0, 6)
        setNowPlayingMovies(firstFive)
       }
       console.log(nowplayingMoveis);
       
       fetchMovies()
       setLouding(false)
    },[])
    if(louding) return <CarouselLouding/>
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="pb-13"
    >
      <CarouselContent>
        {nowplayingMoveis?.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem movie={movie} id={movie.id} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="invisible lg:visible absolute left-10 to-50%" />
      <CarouselNext className="invisible lg:visible absolute right-10 to-50%" />
    </Carousel>
  );
};
