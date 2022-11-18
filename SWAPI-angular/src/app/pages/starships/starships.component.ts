import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getStarships().subscribe((data:any) => {
      this.starships = data
    })
  }
}
