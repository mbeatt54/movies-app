import { Genre } from './genre';
import { MovieVideo } from './movieVideo';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}
