import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'Lista de Pokemones Angular';
  nextPage:string = "";
  prevPage:string = "";
  pokemons: any[] = [];
  selectedPokemon: any = null;


  constructor(private pokemonService:PokemonService){

  }

  ngOnInit(){
    this.getPokemons()
  }

  getPokemons(url:string = "https://pokeapi.co/api/v2/pokemon/"){
    this.pokemonService.getPokemonsPage(url).subscribe((page:any)=>{
      console.log({page})
      this.nextPage = page.next ? page.next : "";
      this.prevPage = page.previous ? page.previous : "";
      this.pokemons = page.results; 
    })
  }

  getNext(){
    if (this.nextPage!=""){
    this.getPokemons(this.nextPage)
    }

  }

  getPrev(){
    if (this.prevPage!=""){
      this.getPokemons(this.prevPage)
    }
  }

  showPokemon(url : string){
      console.log(url)
      this.pokemonService.getPokemon(url).subscribe((pokemon:any)=>{
        this.selectedPokemon = pokemon;
        console.log(this.selectedPokemon)
      })
  }

  unselectPokemon(){
    this.selectedPokemon=null;
  }
}
