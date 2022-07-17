import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Quando a aplicação for inicializada, ela estará na url "", ou seja, vazia, assim, ela será redirecionada para o "/dashboard", dessa forma, o "/dashboard" será a página inicial.
  { path: 'heroes', component: HeroesComponent }, //Se tivermos na URL o "/heroes", o component "HeroesComponent" deverá ser exibido na página.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes/:id', component: HeroDetailComponent } //O ":id" representa um valor que será enviado pela URL.
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
