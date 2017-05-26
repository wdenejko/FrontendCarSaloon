import { Injectable } from '@angular/core';

@Injectable()
export class Multiplier {
    constructor() {

    }

    multiply(a: number, b: number){
        return a * b;
    }
}