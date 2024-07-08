import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UsuarioLogged, Usuario } from '../../interfaces/user.interface';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggeduser ?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);

  constructor(private http: HttpClient) {   }

  login(usuario : Usuario): Observable<UsuarioLogged> {
    return this.http.post<UsuarioLogged>(`${environment.apiUrlBase}auth/login`, usuario).pipe(
      tap((response:any) => this.doLoginUser(usuario.sNombre, response.data.token))
    );
  }

  private doLoginUser(user:string, token:any){
    this.loggeduser = user;
    this.storageJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storageJwtToken(jwt:any){
    localStorage.setItem(this.JWT_TOKEN,jwt);
  }

  logout() {
    alert('entro');
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }
}
