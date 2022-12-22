import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NietoComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
        maxAge: 25
      }),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
