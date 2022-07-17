import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero.model";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero; //O "!" indica que vamos receber um valor, mas ainda não temos o valor para inserir nessa variável.

  constructor(private heroService: HeroService, //Esse serviço é necessário para buscarmos um herói.
              private location: Location, //Essa biblioteca permite a interação com o histórico do browser.
              private router: ActivatedRoute) { } //Essa biblioteca contém as informações sobre o momento atual da rota.

  ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = Number(this.router.snapshot.paramMap.get('id')); //Quando esse método for executado, será tirada uma "snapshot", ou seja, uma foto da URL atual e estamos obtendo o valor do parâmetro "id" dessa URL.

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back(); //Retornando à última página do histórico do nosso browser.
  }
}
