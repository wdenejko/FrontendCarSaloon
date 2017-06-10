import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Pipe({ 
    name: 'carFilter' 
}) 

export class CarFilterPipe implements PipeTransform {
    transform(valueArray: any, term: any) {
        if (term) {
        let filterKeys = Object.keys(valueArray[0]);
        return valueArray.filter((item: any) =>
        filterKeys.reduce((memo, keyName) =>
        memo && item[keyName].toLowerCase().indexOf(term.toLowerCase()) > -1, true));
        } else {
            return valueArray;
        }
    }
}