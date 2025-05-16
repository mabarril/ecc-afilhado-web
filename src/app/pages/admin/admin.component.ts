import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroService } from '../../services/cadastro.service';
import { Cadastro } from '../../class/cadastro';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  myControl = new FormControl();

  listaCadastros! : Observable<Cadastro[]>;
  cadastros? : Cadastro[];

  private cadastroService = inject(CadastroService);

  constructor() {
    this.listaCadastros = this.cadastroService.getAllCadastro();
  }

  
   
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.cadastros.filter(option => option.esposoNome.toLowerCase().includes(filterValue));
  // }


}
