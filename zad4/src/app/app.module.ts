import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarItemComponent } from './car-item/car-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
