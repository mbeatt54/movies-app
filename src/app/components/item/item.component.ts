import { Component, Input, OnInit } from '@angular/core';

import { IMAGES_SIZES } from 'src/app/_constants/image-sizes';
import { Movie } from 'src/app/_models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imageSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
