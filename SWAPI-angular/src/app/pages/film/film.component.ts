import { Component, OnInit } from '@angular/core';

import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
film: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getFilm().subscribe((data:any) => {
      this.film = data
    })
  }

}
