import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/_constants/image-sizes';
import { Movie } from 'src/app/_models/movie';
import { MovieCredits } from 'src/app/_models/movieCredits';
import { MovieImages } from 'src/app/_models/movieImages';
import { MovieVideo } from 'src/app/_models/movieVideo';
import { MoviesService } from 'src/app/_services/movies.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  imagesSizes = IMAGES_SIZES;

  movie: Movie | null = null;
  videos: MovieVideo[] = [];
  images: MovieImages | null = null;
  credits: MovieCredits | null = null;
  similarMovies: Movie[] = [];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getVideos(id);
      this.getImages(id);
      this.getCredits(id);
      this.getSimiliarMovies(id);
    });
  }

  ngOnDestroy(): void {}

  private getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  private getVideos(id: number) {
    this.moviesService.getVideos(id).subscribe((videos) => {
      this.videos = videos;
    });
  }

  private getImages(id: number) {
    this.moviesService.getImages(id).subscribe((images) => {
      this.images = images;
    });
  }

  private getCredits(id: number) {
    this.moviesService.getCredits(id).subscribe((credits) => {
      this.credits = credits;
    });
  }

  private getSimiliarMovies(id: number) {
    this.moviesService.similiarMovies(id).subscribe((movies) => {
      this.similarMovies = movies;
    });
  }
}
