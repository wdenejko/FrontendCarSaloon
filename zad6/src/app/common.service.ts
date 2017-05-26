import { Injectable } from '@angular/core';
import { Car } from './car-saloon';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Injectable()
export class CarSaloonService {
    cars: Array<any>;

    constructor() {
        this.cars = [
      { shortInfo: 'VW Polo', 
        details: `
          Oferta od	Firmy
          Marka	Volkswagen
          Model	Polo
          Rok produkcji	2003
          Poj. silnika	1 200 cm3
          Paliwo	Benzyna
          Moc silnika	65 KM
          Przebieg	131 000 km
          Typ nadwozia	Hatchback
          Kolor	Czarny
          Stan techniczny	Nieuszkodzony
          Skrzynia biegów	Manualna
          Kraj pochodzenia	Niemcy
          `
      },
      { shortInfo: 'Ford Focus ST170', 
        details: `
          Oferta od	Osoby prywatnej
          Marka	Ford
          Model	Focus
          Rok produkcji	2003
          Poj. silnika	2 000 cm3
          Paliwo	Benzyna
          Moc silnika	173 KM
          Przebieg	197 000 km
          Typ nadwozia	Hatchback
          Kolor	Czarny
          Stan techniczny	Nieuszkodzony
          Skrzynia biegów	Manualna
          Kraj pochodzenia	Niemcy
          ` 
      },
      { shortInfo: 'Opel Corsa', 
      details: `
          Oferta od	Firmy
          Marka	Opel
          Model	Corsa
          Rok produkcji	2004
          Poj. silnika	1 200 cm3
          Paliwo	Benzyna
          Moc silnika	80 KM
          Przebieg	212 000 km
          Typ nadwozia	Hatchback
          Kolor	Czerwony
          Stan techniczny	Nieuszkodzony
          Skrzynia biegów	Manualna
          Kraj pochodzenia	Polska 
          ` 
      }
    ];

}

    addCar(value: Car) {
        this.cars.push(new Car(value.shortInfo, value.details));
    }

    removeCar(which: AbstractControl) {
        this.cars.splice(this.cars.findIndex(i => i.shortInfo === which), 1);
    }

    modifyCar(value: any, which: any) {
        if (value.shortInfo != null || value.shortInfo != "") {
            this.cars[this.cars.findIndex(i => i.shortInfo === which)].shortInfo = value.shortInfo;
        }

        if (value.detals != null || value.detals != "") {
            this.cars[this.cars.findIndex(i => i.details === which)].details = value.details;
        }
    }

    getCars() {
        return this.cars;
    }
}