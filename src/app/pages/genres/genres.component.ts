import { Component, OnInit } from '@angular/core';

import { Genre } from 'src/app/_models/genre';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
