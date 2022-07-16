import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> { //Será retornado um "observable" de uma lista de "Hero".
    const heroes = of(HEROES); //Essa lista se tornará um observable.

    return heroes;
  }

}
