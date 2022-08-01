import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/_models/movie';
import { MoviesService } from 'src/app/_services/movies.service';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(1);
  }

  private getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  pageChange(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
