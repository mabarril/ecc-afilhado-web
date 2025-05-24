import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.isLoggedIn().pipe(
      take(1), // Pega o valor mais recente e completa
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        }
        // Redireciona para a página de login se não estiver logado, passando a URL de retorno
        return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }});
      })
    );
  }
}