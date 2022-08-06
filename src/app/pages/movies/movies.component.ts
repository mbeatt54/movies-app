import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/_models/movie';
import { MoviesService } from 'src/app/_services/movies.service';
import { Paginator } from 'primeng/paginator';
import { ThisReceiver } from '@angular/compiler';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: number | null = null;
  searchText: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getPagedMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
    this.getPagedMovies(1);
  }

  private getPagedMovies(page: number, searchText?: string) {
    this.moviesService.searchMovies(page, searchText).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getPagedMoviesByGenre(genreId: number, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  pageChange(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getPagedMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchText) {
        this.getPagedMovies(pageNumber, this.searchText);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchText) {
      this.getPagedMovies(1, this.searchText);
    }
  }
}
