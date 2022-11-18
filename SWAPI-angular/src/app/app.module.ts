import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule }  from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { FilmComponent } from './pages/film/film.component';
import { FilmsComponent } from './pages/films/films.component';

import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { PersonComponent } from './pages/person/person.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpecieComponent } from './pages/specie/specie.component';
import { SpeciesComponent } from './pages/species/species.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';




@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    StarshipComponent,
    FilmComponent,
    FilmsComponent,
    HomeComponent,
    PeopleComponent,
    PersonComponent,
    PlanetComponent,
    PlanetsComponent,
    SpecieComponent,
    SpeciesComponent,
    VehicleComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    // MaterialModule,
    MatListModule,
     MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
