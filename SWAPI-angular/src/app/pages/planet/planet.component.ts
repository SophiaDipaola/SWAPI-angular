import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getPlanet().subscribe((data:any) => {
      this.planet = data
    })
  }
}
