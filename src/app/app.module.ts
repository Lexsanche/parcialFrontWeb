import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngresoInformacionComponent } from './ingreso-informacion/ingreso-informacion.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoInformacionComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
