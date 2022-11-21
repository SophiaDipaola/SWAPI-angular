import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipComponent } from './pages/starship/starship.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  { path: 'films/:id', component: FilmComponent },

  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonComponent },
  {
    path: 'planets',
    component: PlanetsComponent,
  },
  { path: 'planets/:id', component: PlanetComponent },
  {
    path: 'species',
    component: SpeciesComponent,
  },
  { path: 'species/:id', component: SpecieComponent },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
  { path: 'vehicles/:id', component: VehicleComponent },
  {
    path: 'starships',
    component: StarshipsComponent,
  },
  { path: 'starships/:id', component: StarshipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
