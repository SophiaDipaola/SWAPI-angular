import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getPerson().subscribe((data:any) => {
      this.person = data
    })
  }

}
