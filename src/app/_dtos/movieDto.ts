import { Movie } from '../_models/movie';

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
