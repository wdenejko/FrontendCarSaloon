import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class LoggedUserGuard implements CanActivate {

    constructor(private router: Router) {
        
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // User not logged
        this.router.navigate(['/about']);
        return false;
    }
}