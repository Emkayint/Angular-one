import { Injectable } from '@angular/core';
import { Car } from './cars';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  subaru: Car = { make: 'subaru', model: "outback", miles: 200000 };
  honda: Car = { make: "Toyata", model: 'V8', miles: 20 };
  mercedece: Car = { make: "Mercedes", model: 'gWagon', miles: 2000 };
  cars: Car[] = [this.subaru, this.honda, this.mercedece];

  constructor() { }

  getCars(){
    return this.cars;
  }
}
