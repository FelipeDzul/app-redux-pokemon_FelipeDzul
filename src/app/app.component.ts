import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from './services/pokemon.service';

interface AppState{
  contador: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pokemon: Pokemon = {id:0,name:"",sprites:{back_default:"",back_shiny:"",front_default:"",front_shiny:""}};
  contador: number=0;

  constructor(private store: Store<AppState>, private pokemonService:PokemonService){
    //this.contador = 10;
    this.store.select('contador').subscribe(
      state =>{
        this.contador = state
        this.getPokemon()
      } )
  }

  incrementar(){
    //this.contador++;
    const accion = new IncrementarAction();

    this.store.dispatch (accion);
  }

  decrementar(){
    //this.contador--;
    const accion = new DecrementarAction();

    this.store.dispatch (accion);
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.contador).subscribe(result=> this.pokemon = result);
  }
}
