import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CadastroService } from '../../services/cadastro.service';
import { Cadastro } from '../../class/cadastro';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';



const cadastros: Cadastro[] = [];

@Component({
  selector: 'app-tab-afilihados',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatIcon, MatIconButton],
  templateUrl: './tab-afilihados.component.html',
  styleUrl: './tab-afilihados.component.css'
})

export class TabAfilihadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'casal', 'acao'];
  dataSource = new MatTableDataSource<Cadastro>();
  listaCadastros = cadastros;

  private cadastroService = inject(CadastroService);
  ngOnInit() {
    this.cadastroService.getAllCadastro().subscribe((data) => {
      this.listaCadastros = data;
      this.dataSource = new MatTableDataSource(this.listaCadastros);
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

function orderBy(dataSource: Cadastro[], arg1: string[], arg2: string): Cadastro[] {
  throw new Error('Function not implemented.');
}
