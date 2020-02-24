import { Observable } from 'rxjs/index';
import { LoginReq, LoginRes } from '../../domain/entities/authentication/login';

export abstract class AuthenticationData {
  abstract login(parms: LoginReq): Observable<LoginRes>;
}
