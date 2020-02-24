import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';
import { ErrorResponse } from '../../domain/error-response';


@Injectable()
export class HttpClientService {
  // url: string = 'http://ec2-3-80-199-109.compute-1.amazonaws.com:9090';
  url: string = 'http://localhost:9090';

  constructor(private http: HttpClient) {
  }
  delete(endpoint: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.http
        .delete<any>(this.url + '/' + endpoint)
        .subscribe((response: HttpResponse<any>) => {
          this.validateResponse(response, observer);
        }, (error: any) => {
          this.validateSpecialStatusCodes(error, observer);
        });
    });
  }

  put(parms: any, endpoint: string): Observable<any> {
    const headers = this.initHeaders();
    return new Observable((observer: Observer<any>) => {
      this.http
        .put<any>(this.url + '/api/' + endpoint, parms, { headers })
        .subscribe((response: HttpResponse<any>) => {
          this.validateResponse(response, observer);
        }, (error: any) => {
          this.validateSpecialStatusCodes(error, observer);
        });
    });
  }

  get(endpoint: string): Observable<any> {
    const headers = this.initHeaders();
    return new Observable((observer: Observer<any>) => {
      this.http
        .get<any>(this.url + '/' + endpoint, { headers })
        .subscribe((response: HttpResponse<any>) => {
          this.validateResponse(response, observer);
        }, (error: any) => {
          this.validateSpecialStatusCodes(error, observer);
        });
    });
  }

  post(parms: any, endpoint: string, isFile?: boolean): Observable<any> {
    const headers = isFile ? this.fileHeaders() : this.initHeaders();
    return new Observable((observer: Observer<any>) => {
      this.http
        .post<any>(this.url + '/' + endpoint, parms, { headers })
        .subscribe((response: HttpResponse<any>) => {
          this.validateResponse(response, observer);
        }, (error: any) => {
          this.validateSpecialStatusCodes(error, observer);
        });
    });
  }

  private validateResponse(response: HttpResponse<any>, observer: Observer<any>) {
    try {
      observer.next(response['data']);
      observer.complete();
    } catch (errorParsingJSON) {
      observer.error(new ErrorResponse('Error en respuesta del servidor', 0));
      observer.complete();
    }
  }


  private validateSpecialStatusCodes(response: HttpResponse<any>, observer: Observer<any>) {
    const respuesta: any = response['error'];
    observer.error(new ErrorResponse(respuesta.message, respuesta.message));
    observer.complete();
  }

  private initHeaders() {
    const headers: any = {};
    headers['Content-Type'] = 'application/json; charset=utf-8';
    const usrStorage = JSON.parse(localStorage.getItem('user'));
    if (usrStorage !== null) {
      headers['Authorization'] = 'Bearer ' + usrStorage.token;
      headers['terminal'] = 'Bearer ';
    }
    return new HttpHeaders(headers);
  }

  private fileHeaders() {
    const headers: any = {};
    const usrStorage = JSON.parse(localStorage.getItem('user'));
    if (usrStorage !== null) {
      headers['Authorization'] = 'Bearer ' + usrStorage.token;
      headers['terminal'] = 'Bearer ';
    }
    return new HttpHeaders(headers);
  }
}
