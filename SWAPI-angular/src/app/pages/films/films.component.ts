import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getFilms().subscribe((data:any) => {
      this.films = data
    })
  }
}
