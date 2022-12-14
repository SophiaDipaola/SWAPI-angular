import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { NavigationComponent } from './navigation/navigation.component';

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
    VehiclesComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
