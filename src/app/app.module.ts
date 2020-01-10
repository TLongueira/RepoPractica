import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HolaMundo} from './primercomponente/primer.componente';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    SegundocomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
