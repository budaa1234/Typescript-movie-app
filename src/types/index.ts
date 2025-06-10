export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genre: string;
  name: string;
  key: string;
  genres: Genre[];
};

export type MoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
export type MovieId = {
  id: number;
  name: string;
  key: string;
};
export type Genre = {
  id: number;
  name: string;
};
export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Director = {
  cast: Cast[]
  crew: Crew[]
  id: number
}
export type Cast ={
  adult: false
cast_id: number
character: string
credit_id: string
gender: 1
id: number
known_for_department: string
name: string
order: 0
original_name: string
popularity: number
profile_path: string
}
export type Crew ={
  adult: false
credit_id: string
department: string
gender: number
id: number
job: string
known_for_department: string
name: string
original_name: string
popularity: number
profile_path: null
}