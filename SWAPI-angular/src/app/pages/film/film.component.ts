import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  film: any;
  id: number;
  characters: Array<Observable<{ name: string }>> = [];
  planets: Array<Observable<{ name: string }>> = [];
  starships: Array<Observable<{ name: string }>> = [];
  vehicles: Array<Observable<{ name: string }>> = [];
  species: Array<Observable<{ name: string }>> = [];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.swapiService.getFilm(this.id).subscribe((data: any) => {
      this.film = data;
      this.getCharacters();
      this.getPlanets();
      this.getStarships();
      this.getVehicles();
      this.getSpecies();
    });
  }
  getCharacters() {
    this.characters = this.film.characters.map((character: string) => {
      return this.swapiService.getCharacters(character);
    });
  }
  getPlanets() {
    this.planets = this.film.planets.map((planet: string) => {
      return this.swapiService.getPlanets2(planet);
    });
  }

  getStarships() {
    this.starships = this.film.starships.map((starship: string) => {
      return this.swapiService.getStarships2(starship);
    });
  }

  getVehicles() {
    this.vehicles = this.film.vehicles.map((vehicle: string) => {
      return this.swapiService.getVehicles2(vehicle);
    });
  }

  getSpecies() {
    this.species = this.film.species.map((specie: string) => {
      return this.swapiService.getSpecies2(specie);
    });
  }
}
