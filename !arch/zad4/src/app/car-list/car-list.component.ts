import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

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

  userClicked(modelName: string) {
      console.log(`From Parent ${modelName}`);
  }

  ngOnInit() {
  }

}
