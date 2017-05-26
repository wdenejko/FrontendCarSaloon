import { Component, OnInit, ReflectiveInjector, Inject} from '@angular/core';
import { Adder } from '../services/calculator.service';
import { Multiplier } from '../services/calculator.service.multiply';
import { Divider } from '../services/calculator.service.divider';
import { Powerer } from '../services/calculator.service.power';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  adder: Adder
  addedValue = 0;

  multiplier: Multiplier;
  multipliedValue = 0;

  dividedValue = 0;

  poweredValue = 0;

  constructor(private divider: Divider, @Inject('POWER') public power: number, private powerer: Powerer) {
    this.adder = new Adder();
    const injector = ReflectiveInjector.resolveAndCreate([Multiplier])
    this.multiplier = injector.get(Multiplier);

  }

  calculate() {
    this.addedValue = this.adder.add(2,3);
    this.multipliedValue = this.multiplier.multiply(2,3);
    this.dividedValue = this.divider.divide(2,3);
    this.poweredValue = this.powerer.pow(2);
  }

  ngOnInit() {
  }

}
