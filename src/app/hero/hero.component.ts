import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title: string;
  myHero: Hero;
  heroes: Hero[];

  constructor() {
    this.title  = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }

  ngOnInit() {
  }

  callPhone(phoneNumber) {
    console.log(phoneNumber);
  }

  deleteHero(hero) {
    this.heroes.splice(this.heroes.indexOf(hero.name), 1);
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
}
