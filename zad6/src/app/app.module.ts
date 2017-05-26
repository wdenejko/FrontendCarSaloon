import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarSaloonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CarSaloonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
