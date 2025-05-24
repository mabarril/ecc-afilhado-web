import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Interface para a resposta do login (ajuste conforme o seu backend)
export interface AuthResponse {
  token: string;
  // você pode adicionar outros campos que seu backend retorna, como nome do usuário, roles, etc.
}

// Interface para as credenciais de login
export interface LoginCredentials {
  email_institucional: string; // ou username, dependendo do seu backend
  senha_acesso: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // ATENÇÃO: Substitua pela URL real do seu endpoint de login no backend
  private tokenKey = 'ecc_auth_token';

  private loggedInStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInStatus.asObservable();
  }

  getCurrentToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  login(credentials: LoginCredentials): Observable<AuthResponse | null> {
    return this.http.post<AuthResponse>(`/api/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.token) {
            localStorage.setItem(this.tokenKey, response.token);
            this.loggedInStatus.next(true);
          }
        }),
        catchError(error => {
          console.error('Login failed:', error);
          this.loggedInStatus.next(false);
          return of(null); // Retorna um observable nulo em caso de erro para o componente tratar
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedInStatus.next(false);
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}