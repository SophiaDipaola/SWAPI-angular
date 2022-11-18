import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
  specie: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getSpecie().subscribe((data:any) => {
      this.specie = data
    })
  }
}
