import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  species: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getSpecies().subscribe((data:any) => {
      this.species = data
    })
  }
}
