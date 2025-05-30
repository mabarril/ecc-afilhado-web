import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cadastro } from '../class/cadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})



export class CadastroService {

  private http = inject(HttpClient);

  authService = inject(AuthService);
  token = this.authService.getCurrentToken();

  headers = new HttpHeaders()
    .set('Authorization', `${this.token}`)
    .set('Content-Type', 'application/json');


  getCadastro(id: string): Observable<Cadastro> {
    return this.http.get<Cadastro>(`/api/user/${id}`, {headers: this.headers});
  }

  getAllCadastro(): Observable<
    Cadastro[]> {
    return this.http.get<any>(`/api/cadastro`,  {headers: this.headers})
      ;
  }

}
