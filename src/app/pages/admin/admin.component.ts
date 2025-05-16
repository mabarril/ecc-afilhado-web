import { Component, inject, OnInit } from '@angular/core';
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
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  myControl = new FormControl();

  listaCadastros! : Cadastro[];
  cadastros? : Cadastro[];

  private cadastroService = inject(CadastroService);

    private loadAllRegistros() {
    this.cadastroService.getAllCadastro().subscribe((data) => {
      this.cadastros = data;
      console.log(this.cadastros);
    
    });

 }

  ngOnInit() {
    this.loadAllRegistros();
  }

  

  
   
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.cadastros.filter(option => option.esposoNome.toLowerCase().includes(filterValue));
  // }


}
