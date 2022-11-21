import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  planet: any;
  id: number;
  residents: Array<Observable<{ name: string }>> = [];
  films: Array<Observable<{ title: string }>> = [];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.swapiService.getPlanet(this.id).subscribe((data: any) => {
      this.planet = data;
      this.getFilms();
      this.getResidents();
    });
  }
  getResidents() {
    this.residents = this.planet.residents.map((resident: string) => {
      return this.swapiService.getCharacters(resident);
    });
  }
  getFilms() {
    this.films = this.planet.films.map((film: string) => {
      return this.swapiService.getFilms2(film);
    });
  }
}
