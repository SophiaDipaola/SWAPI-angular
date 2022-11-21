import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  id: number;
  vehicle: any;
  films: Array<Observable<{ title: string }>> = [];

  constructor(private swapiService : SwapiService,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id'];
     }


  ngOnInit(): void {
    this.swapiService.getVehicle(this.id).subscribe((data:any) => {
      this.vehicle = data
      this.getFilms();
    })
  }
  getFilms() {

    this.films = this.vehicle.films.map((film: string) => {
      return this.swapiService.getFilms2(film);
    });
  }
}
