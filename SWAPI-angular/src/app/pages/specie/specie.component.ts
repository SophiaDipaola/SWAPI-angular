import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss'],
})
export class SpecieComponent implements OnInit {
  specie: any;
  id: number;
  people: Array<Observable<{ name: string }>> = [];
  films: Array<Observable<{ title: string }>> = [];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.swapiService.getSpecie(this.id).subscribe((data: any) => {
      this.specie = data;
      this.getFilms();
      this.getPeople();
    });
  }
  getPeople() {
    this.people = this.specie.people.map((person: string) => {
      return this.swapiService.getCharacters(person);
    });
  }
  getFilms() {
    this.films = this.specie.films.map((film: string) => {
      return this.swapiService.getFilms2(film);
    });
  }
}
