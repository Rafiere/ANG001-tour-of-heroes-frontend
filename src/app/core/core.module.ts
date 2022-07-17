import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MessagesComponent} from "./components/messages/messages.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";

const COMPONENTS = [
  ToolbarComponent,
  MessagesComponent
]

const MODULES = [
  FlexLayoutModule,
  MaterialModule
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    MODULES,
    RouterModule,
    CommonModule
  ],
  exports: [
    MODULES,
    COMPONENTS
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) { //Se o "parentModule" já estiver carregado no projeto e existir a tentativa de importá-lo novamente, uma exception será lançada.
    if(parentModule){
      throw new Error('O core module já foi carregado. Importe esse módulo.')
    }
  }
}
