import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  person: any;
  id: number;
  starships: Array<Observable<{ name: string }>> = [];
  vehicles: Array<Observable<{ name: string }>> = [];
  films: Array<Observable<{ title: string }>> = [];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.swapiService.getPerson(this.id).subscribe((data: any) => {
      this.person = data;
      this.getStarships();
      this.getVehicles();
      this.getFilms();
    });
  }
  getStarships() {
    this.starships = this.person.starships.map((starship: string) => {
      return this.swapiService.getStarships2(starship);
    });
  }

  getVehicles() {
    this.vehicles = this.person.vehicles.map((vehicle: string) => {
      return this.swapiService.getVehicles2(vehicle);
    });
  }

  getFilms() {
    this.films = this.person.films.map((film: string) => {
      return this.swapiService.getFilms2(film);
    });
  }
}
