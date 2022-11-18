import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getVehicles().subscribe((data:any) => {
      this.vehicles = data
    })
  }
}
