import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes.slice(1, 5) //Pegaremos os heróis que estão nos índices "1" até "4", pois ele é exclusivo no final. Esses 4 heróis serão enviados para o array "heroes".
    )
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
