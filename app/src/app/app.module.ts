import { CarFilterPipe } from './carFilter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarSaloonService } from './common.service';
import { CarSearchComponent } from './car-search/car-search.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CarListComponent},
  {path: 'search', component: CarSearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarItemComponent,
    CarSearchComponent,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [CarSaloonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
