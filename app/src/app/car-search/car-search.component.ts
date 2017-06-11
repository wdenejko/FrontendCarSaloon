import { CarFilterPipe } from './../carFilter.pipe';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { CarSaloonService } from '../common.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})

export class CarSearchComponent implements OnInit {

  cars: Array<any>;
  myForm: FormGroup;
  shortInfo: AbstractControl;
  details: AbstractControl;
  searchField: FormControl;

  constructor(fb: FormBuilder, private carSaloonService: CarSaloonService) {
    this.myForm = fb.group(
      {
        'shortInfo': ['', Validators.required],
        'details': ['', Validators.compose([Validators.required])]
      }
    );

    this.cars = this.carSaloonService.getCars();
    this.shortInfo = this.myForm.controls['shortInfo'];
    this.details = this.myForm.controls['details'];
   }

  ngOnInit() {
    this.cars = this.carSaloonService.getCars();
  }
}
