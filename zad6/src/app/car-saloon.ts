import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

export class Car {
    public shortInfo: AbstractControl;
    public details: AbstractControl;

    constructor(shortInfoConst: AbstractControl, detailsConst: AbstractControl) {
        this.shortInfo = shortInfoConst;
        this.details = detailsConst;
    }
}