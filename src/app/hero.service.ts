import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {} //Injetando o "messageService" pelo construtor nesse serviço.

  getHeroes(): Observable<Hero[]> { //Será retornado um "observable" de uma lista de "Hero".
    const heroes = of(HEROES); //Essa lista se tornará um observable.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
