import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { CarSaloonService } from '../common.service';

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

  constructor(fb: FormBuilder, private carSaloonService: CarSaloonService) {
    this.myForm = fb.group(
      {
        'shortInfo': ['', Validators.required],
        'details': ['', Validators.compose([Validators.required])]
      }
    );

    this.shortInfo = this.myForm.controls['shortInfo'];
    this.details = this.myForm.controls['details'];

  }

  mySubmit(value: any) {
    console.log(value);
    this.carSaloonService.addCar(value);
  }

  userClicked(modelName: string) {
      console.log(`From Parent ${modelName}`);
  }

  removeItem(modelName: any) {
      this.carSaloonService.removeCar(modelName);
  }

  ngOnInit() {
    this.cars = this.carSaloonService.getCars();
  }

}
