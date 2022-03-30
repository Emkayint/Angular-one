import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "star student";
  colors: string[] = ['red', 'blue', 'green', 'purple'];

  // subaru: Car = {make : 'subaru', model: "outback", miles: 200000};
  // honda: Car = { make: "Toyata", model: 'V8', miles: 20 };
  // mercedece: Car = { make: "Mercedes", model: 'gWagon', miles: 2000 };
  // cars: Car [] = [this.subaru, this.honda, this.mercedece];

  cars: Car[];

constructor(private transportationService: TransportationService){
  this.cars = this.transportationService.getCars();
}
}
