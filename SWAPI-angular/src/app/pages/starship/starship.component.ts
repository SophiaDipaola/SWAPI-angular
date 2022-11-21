import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  id: number;
  starship: any;
  films: Array<Observable<{ title: string }>> = [];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.swapiService.getStarship(this.id).subscribe((data: any) => {
      this.starship = data;
      this.getFilms();
    });
  }
  getFilms() {
    this.films = this.starship.films.map((film: string) => {
      return this.swapiService.getFilms2(film);
    });
  }
}
