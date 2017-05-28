import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { CarSaloonService } from '../common.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input()
  shortInfo: AbstractControl;
  @Input()
  details: AbstractControl;
  @Input()
  myForm: FormGroup;


  @Output()
  clickEmmiter: EventEmitter<string> = new EventEmitter();

  constructor(fb: FormBuilder, private carSaloonService: CarSaloonService) { 
    this.myForm = fb.group(
      {
        'shortInfo': ['', Validators.required],
        'details': ['', Validators.compose([Validators.required])]
      }
    );
  }

  ngOnInit() {
  }

  mySubmit(value: any) {
      this.details = value.details;
  }

  removeItem() {
    console.log(`${this.shortInfo} removed`);
    this.carSaloonService.removeCar(this.shortInfo);
  }

  userClicked() {
    console.log(`User: ${this.details} selected`);
  }

  userSelected() {
    console.log(`User: ${this.shortInfo} selected`);
  }

}
