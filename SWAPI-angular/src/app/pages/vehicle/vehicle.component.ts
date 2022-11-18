import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicle: any

  constructor(private swapiService : SwapiService) { }

  ngOnInit(): void {
    this.swapiService.getVehicle().subscribe((data:any) => {
      this.vehicle = data
    })
  }
}
