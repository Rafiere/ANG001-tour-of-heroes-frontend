import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  heroes: Hero[] = [];
  // selectedHero?: Hero;

  constructor(private heroService: HeroService ) { //Esse component não sabe a origem da lista de heróis, pois ele é responsável apenas por exibir, e não por obter os dados.

  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero; //Obtendo o "hero" do template e setando ele no objeto "selectedHero".
  //   this.messageService.add("HeroesComponent: Selected Hero id =" + hero.id);
  // }

  getHeroes(): void { //Esse método obterá a lista de heróis do service.
    this.heroService.getHeroes().subscribe(heroes =>  //Não sabemos quanto tempo vai demorar, pois estamos utilizando o "subscribe()".
      this.heroes = heroes
    ); //O "getHeroes()" retornará um observable de uma lista de "Hero". Estamos transformando esse observable em uma lista de "Hero".
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
