import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get('https://swapi.dev/api/people/');
  }
  getPerson(id: number) {
    return this.http.get(`https://swapi.dev/api/people/${id}/`);
  }
  getPlanets() {
    return this.http.get('https://swapi.dev/api/planets/');
  }
  getPlanet(id: number) {
    return this.http.get(`https://swapi.dev/api/planets/${id}/`);
  }
  getFilms() {
    return this.http.get('https://swapi.dev/api/films/');
  }
  getFilm(id: number) {
    return this.http.get(`https://swapi.dev/api/films/${id}/`);
  }
  getSpecies() {
    return this.http.get('https://swapi.dev/api/species/');
  }
  getSpecie(id: number) {
    return this.http.get(`https://swapi.dev/api/species/${id}/`);
  }
  getStarships() {
    return this.http.get('https://swapi.dev/api/starships/');
  }
  getStarship(id: number) {
    return this.http.get(`https://swapi.dev/api/starships/${id}/`);
  }
  getVehicles() {
    return this.http.get('https://swapi.dev/api/vehicles/');
  }
  getVehicle(id: number) {
    return this.http.get(`https://swapi.dev/api/vehicles/${id}/`);
  }
  getCharacters(url: string) {
    return this.http.get(url);
  }
  getPlanets2(url: string) {
    return this.http.get(url);
  }
  getStarships2(url: string) {
    return this.http.get(url);
  }
  getVehicles2(url: string) {
    return this.http.get(url);
  }
  getSpecies2(url: string) {
    return this.http.get(url);
  }
  getFilms2(url: string) {
    return this.http.get(url);
  }
}
