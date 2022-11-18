import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe((data:any) => {
      this.people = data

    })

  }
}
