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
  private authService = inject(AuthService);
  private token = this.authService.getCurrentToken();

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: this.token ? `${this.token}` : ''
    });
  }

  getCadastro(id: string): Observable<Cadastro> {
    return this.http.get<Cadastro>(`/api/user/${id}`,
      { headers: this.getAuthHeaders() }
    );
    
  }

  getAllCadastro(): Observable<
    Cadastro[]> {
    return this.http.get<any>(`/api/cadastro`,
      { headers: this.getAuthHeaders() });
  }

}
