import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, subscribeOn } from 'rxjs';

import { Movie } from 'src/app/_models/movie';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  moviesServiceSubscription: Subscription = new Subscription();

  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesServiceSubscription = this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesServiceSubscription = this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.moviesServiceSubscription = this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
  }

  ngOnDestroy(): void {
    this.moviesServiceSubscription?.unsubscribe();
  }
}
