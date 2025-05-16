import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cadastro } from '../class/cadastro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private http = inject(HttpClient);

  getCadastro(id: string): Observable<Cadastro> {
    return this.http.get<Cadastro>(`/api/user/${id}`);
  }

  getAllCadastro(): Observable<
  Cadastro[]> {
    return this.http.get<any>(`/api/cadastro`);
  }

}
