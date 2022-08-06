import { MovieVideo } from '../_models/movieVideo';

export interface VideoDto {
  id: number;
  results: MovieVideo[];
}
