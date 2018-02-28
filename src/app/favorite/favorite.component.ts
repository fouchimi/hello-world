import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isFavorite = true;
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
