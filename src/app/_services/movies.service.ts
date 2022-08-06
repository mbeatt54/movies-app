import { GenreDto } from '../_dtos/genreDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';
import { MovieCredits } from '../_models/movieCredits';
import { MovieDto } from '../_dtos/movieDto';
import { MovieImages } from '../_models/movieImages';
import { VideoDto } from '../_dtos/videoDto';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'a38b1155064f055f942ba88b2f3bef28';

  constructor(private http: HttpClient) {}

  getMovie(movieId: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId.toString()}?api_key=${this.apiKey}`);
  }

  getMovies(movieType = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${movieType}?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      })
    );
  }

  getMoviesByGenre(genreId: number, page: number = 1) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }

  getVideos(id: number) {
    return this.http.get<VideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results);
      })
    );
  }

  getImages(id: number) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getCredits(id: number) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getGenres() {
    return this.http.get<GenreDto>(`${this.baseUrl}/genre/movie/list?&api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.genres);
      })
    );
  }

  searchMovies(page: number = 1, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }

  similiarMovies(id: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?&api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, 6));
      })
    );
  }
}
