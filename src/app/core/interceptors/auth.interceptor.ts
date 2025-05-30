import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
  // Intercepta todas as requisições HTTP

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getCurrentToken();
      console.log('AuthInterceptor');

   // Acessando a propriedade privada para este exemplo

    // Não adicionar token para o endpoint de login ou se não houver token
    console.log('sssss', request.url);
    if (request.url.startsWith('/api') && !request.url.includes('/login') && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
      console.log('xxxx ', request.url);
    }

    return next.handle(request);
  }
}