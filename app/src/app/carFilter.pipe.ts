import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Pipe({ 
    name: 'carFilter' 
}) 

export class CarFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
       let filter = args[0]; 
       return filter ? value.filter(car=> car.shortInfo.indexOf(filter) != -1) : value; 
    } 
}