import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Divider } from './services/calculator.service.divider';
import { Powerer } from './services/calculator.service.power';
import { Adder } from './services/calculator.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: Divider, useClass: Divider},
    {provide: 'POWER', useValue: 4},
    {provide: 'ADDER', useValue: new Adder},
    {
      provide: Powerer, 
      deps:['POWER', 'ADDER', Divider], 
      useFactory(power: number, adder: Adder, divider: Divider) {

      let p = adder.add(power, 2);
      p = divider.divide(p, 2);

      return new Powerer(p);
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
