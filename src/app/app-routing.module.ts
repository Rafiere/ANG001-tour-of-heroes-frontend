import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent } //Se tivermos na URL o "/heroes", o component "HeroesComponent" deverá ser exibido na página.
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //Esse é um módulo comum do Angular que possui algumas diretivas como "ngIf", "ngFor" e etc.
    RouterModule.forRoot(routes), //A aplicação raiz, que é a inicial, deverá iniciar com a constante "routes", que criamos acima.
  ],
  exports: [
    RouterModule //Estamos importando para dentro do "RouterModule" a constante de rotas, e, após isso, estamos exportando esse módulo com a constante "routes" para dentro dele. O "app.module.ts" está importando esse módulo com a constante "routes" para dentro dele.
  ]
})
export class AppRoutingModule { }
