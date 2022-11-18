import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getPlanets().subscribe((data:any) => {
      this.planets = data
    })
  }
}
