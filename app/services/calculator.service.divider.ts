import { Injectable } from '@angular/core';

@Injectable()
export class Divider {
    constructor() {

    }

    divide(a: number, b: number){
        return a / b;
    }
}