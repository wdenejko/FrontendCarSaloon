import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;
  myForm: FormGroup;
  shortInfo: AbstractControl;
  details: AbstractControl;
  searchField: FormControl;

  constructor(fb: FormBuilder) {

    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(
      searchItem => this.cars.find(myObj => myObj.shortInfo = searchItem)
    )

    this.myForm = fb.group(
      {
        'shortInfo': ['', Validators.required],
        'details': ['', Validators.compose([Validators.required])]
      }
    );
    this.shortInfo = this.myForm.controls['shortInfo'];
    this.details = this.myForm.controls['details'];

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

  mySubmit(value: any) {
    console.log(value);
    this.cars.push(value);
  }

  userClicked(modelName: string) {
      console.log(`From Parent ${modelName}`);

  }

  removeItem(modelName: string) {
      const index: number = this.cars.findIndex(i => i.model === modelName);
      this.cars.splice(index, 1);
  }

  ngOnInit() {
  }

}
