import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario} from '../_models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = `http://localhost:53702/api`;
  public currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  public usuarioL: any;
  public authentication;
  public currentTokenBehavior: BehaviorSubject<string>;
  public currentTokenOb: Observable<string>;
  public datosLoginEnc: string;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentAccess')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  login(usuario: string, password: string):any {
    //Encriptar datos
    this.datosLoginEnc = `${usuario}|${password}`;
    let user: Usuario;
    return this.http.get<any>(`${this.API_URL}/auth/login`, {}).pipe(map(data => {
        if (data && data.token) {
          localStorage.setItem('currentAccess', JSON.stringify(data));
          this.currentUserSubject.next(data);
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentAccess');
    this.currentUserSubject.next(null);
  }

}
