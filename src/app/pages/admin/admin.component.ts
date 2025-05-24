import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service'; // Ajuste o caminho se necessário
import { map, startWith } from 'rxjs/operators';  
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroService } from '../../services/cadastro.service';
import { Cadastro } from '../../class/cadastro';
import { TabAfilihadosComponent } from "../../components/tab-afilihados/tab-afilihados.component";

@Component({
  selector: 'app-admin',
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    TabAfilihadosComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  myControl = new FormControl();

  cadastros?: Cadastro[];

  private cadastroService = inject(CadastroService);
  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.cadastroService.getAllCadastro().subscribe((data) => {
      this.cadastros = data;
    });

    this.myControl.valueChanges.subscribe(value => {
      this.cadastros = this._filter(value);
    });
  }  

    logout(): void {
    this.authService.logout();
  }

  private _filter(value: string): Cadastro[] | undefined {
    const filterValue = value.toLowerCase();
    return this.cadastros?.filter(cadastro => cadastro.esposa_nome!.toLowerCase().includes(filterValue));
  }
}

