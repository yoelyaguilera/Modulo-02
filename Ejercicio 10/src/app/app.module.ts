import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
