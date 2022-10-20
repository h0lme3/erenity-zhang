import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GeneralService } from '../services/general/general.service';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private _general: GeneralService,
        private route: Router,
        private _auth: AuthService,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let token = this._general.getLocalStorage("UD")
        if (token) {
            return true;
        } else {
            // this._auth.logout();
            this.route.navigate(['/login']);
            return false;
        }
    }

}