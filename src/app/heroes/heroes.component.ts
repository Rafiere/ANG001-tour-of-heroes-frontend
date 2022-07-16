import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //Obtendo o "hero" do template e setando ele no objeto "selectedHero".
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
