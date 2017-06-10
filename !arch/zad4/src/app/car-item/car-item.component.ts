import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  @Output()
  clickEmmiter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userSelected() {
    console.log(`User: ${this.shortInfo} selected`);
    this.clickEmmiter.emit(this.shortInfo);
  }

}
