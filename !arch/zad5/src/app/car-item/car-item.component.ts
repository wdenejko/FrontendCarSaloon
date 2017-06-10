import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input()
  shortInfo: string;
  @Input()
  details: string;
  @Input()
  myForm: FormGroup;


  @Output()
  clickEmmiter: EventEmitter<string> = new EventEmitter();

  constructor(fb: FormBuilder) { 
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
    this.clickEmmiter.emit(this.shortInfo);
  }

  userClicked() {
    console.log(`User: ${this.details} selected`);
    this.clickEmmiter.emit(this.details);
  }

  userSelected() {
    console.log(`User: ${this.shortInfo} selected`);
    this.clickEmmiter.emit(this.shortInfo);
  }

}
