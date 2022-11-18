import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http:HttpClient) { }

  getPeople(){
    return this.http.get('https://swapi.dev/api/people/')

  }
  getPerson(){
    return this.http.get('https://swapi.dev/api/people/:id/')

  }
  getPlanets(){
    return this.http.get('https://swapi.dev/api/planets/')

  }
  getPlanet(){
    return this.http.get('https://swapi.dev/api/planets/:id/')

  }
  getFilms(){
    return this.http.get('https://swapi.dev/api/films/')

  }
  getFilm(){
    return this.http.get('https://swapi.dev/api/films/:id/')

  }
  getSpecies(){
    return this.http.get('https://swapi.dev/api/species/')

  }
  getSpecie(){
    return this.http.get('https://swapi.dev/api/species/:id/')

  }
  getStarships(){
    return this.http.get('https://swapi.dev/api/starships/')

  }
  getStarship(){
    return this.http.get('https://swapi.dev/api/starships/:id/')

  }
  getVehicles(){
    return this.http.get('https://swapi.dev/api/vehicles/')

  }
  getVehicle(){
    return this.http.get('https://swapi.dev/api/vehicles/:id/')

  }
}
