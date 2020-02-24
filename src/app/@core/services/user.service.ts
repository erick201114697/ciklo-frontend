import {Injectable} from '@angular/core';
import {HttpClientService} from '../http/http-client-service';
import {Observable} from 'rxjs/Rx';
import {IUser} from '../../domain/entities/user/user';
import {UserAData} from '../data/user';


@Injectable()
export class UserAService implements UserAData {
  constructor(public http: HttpClientService) {
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get(`user/${id}`);
  }

  getCamion(): Observable<any> {
    return this.http.get(`camion`);
  }

  getPaquete(): Observable<any> {
    return this.http.get(`paquete`);
  }

  getPiloto(): Observable<any> {
    return this.http.get(`piloto`);
  }

  getAsignacion(): Observable<any> {
    return this.http.get(`asignacion`);
  }

  postAsignacion(params: any): Observable<any> {
    return this.http.post(params, `asignacion`);
  }

  deleteAsignacion(id: string): Observable<IUser> {
    return this.http.delete(`asignacion/${id}`);
  }
}
