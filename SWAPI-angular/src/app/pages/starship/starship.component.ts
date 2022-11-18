import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  starship: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getStarship().subscribe((data:any) => {
      this.starship = data
    })
  }
}
