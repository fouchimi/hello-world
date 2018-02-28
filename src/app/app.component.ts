import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myHero = 'WindStorm';
  post = {
    title: 'Title',
    isFavorite: true
  };

  favoriteChanged() {
    console.log('Favorite value changed!');
  }
}
