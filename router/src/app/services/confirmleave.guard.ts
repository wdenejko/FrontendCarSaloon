import { AboutComponent } from './../components/about/about.component';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from "@angular/router";

@Injectable()
export class ConfirmLeaveGuard implements CanDeactivate<AboutComponent> {

    constructor(private router: Router) {
        
    }

    public canDeactivate(target: AboutComponent) {
        return window.confirm("Are you sure?");
    }
}