import { Injectable } from '@angular/core';

@Injectable()
export class Powerer {
    constructor(private power: number) {

    }

    pow(a: number){
        return a ** this.power;
    }
}