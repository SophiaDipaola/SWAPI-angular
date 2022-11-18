import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
// import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SWAPI-angular';


constructor(private http:HttpClient) {
  // this.getPeople();
}

// getPeople(){
//   this.http.get('https://swapi.dev/api/people/')
//   .subscribe((Response) => {
//     console.log(Response)
//   })
// }

// getPlanets(){
//   this.http.get('https://swapi.dev/api/planets/').subscribe((Response) => {
//     console.log(Response)
//   })
// }
// getFilms(){
//   this.http.get('https://swapi.dev/api/films/').subscribe((Response) => {
//     console.log(Response)
//   })
// }
// getStarships(){
//   this.http.get('https://swapi.dev/api/starships/').subscribe((Response) => {
//     console.log(Response)
//   })
// }
// getVehicles(){
//   this.http.get('https://swapi.dev/api/vehicles/').subscribe((Response) => {
//     console.log(Response)
//   })
// }
}

