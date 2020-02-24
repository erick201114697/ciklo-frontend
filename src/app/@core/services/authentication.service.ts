import { Injectable } from '@angular/core';
import { HttpClientService } from '../http/http-client-service';
import { AuthenticationData } from '../data/authentication-data';
import { Observable } from 'rxjs/Rx';
import { LoginReq, LoginRes } from '../../domain/entities/authentication/login';


@Injectable()
export class AuthenticationService implements AuthenticationData {

  constructor(public http: HttpClientService) {
  }

  login(parms: LoginReq): Observable<LoginRes> {
    return this.http.post(parms, 'auth/login');
  }
}
