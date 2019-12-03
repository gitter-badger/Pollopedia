import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  // controle toestemming tot rout
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
      return this.checkLogin(url);
  }
  
  // slimme login check, oorspronkelijk webadres word bijgehouden
  checkLogin(url: string) {
    if (this._authenticateService.isLoggedIn()) {
      return true;
    }

    this._authenticateService.redirectUrl = url;

    this.router.navigate(['/login'], {queryParams: { returnUrl: url }} );
  }
}
