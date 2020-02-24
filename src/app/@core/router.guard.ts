import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {LoginRes} from '../domain/entities/authentication/login';
import {Constants} from '../config/constants';

@Injectable()
export class RouterAuthGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user: LoginRes = JSON.parse(localStorage.getItem(Constants.user));
    if (user) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
