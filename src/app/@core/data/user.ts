import { Observable } from 'rxjs';
import { IUser } from '../../domain/entities/user/user';



export abstract class UserAData {
  abstract getUser(id: string): Observable<IUser>;

  abstract getCamion(): Observable<any>;

  abstract getPaquete(): Observable<any>;

  abstract getPiloto(): Observable<any>;

  abstract postAsignacion(params: any): Observable<any>;

  abstract getAsignacion(): Observable<any>;

  abstract deleteAsignacion(id: string): Observable<any>;

}
