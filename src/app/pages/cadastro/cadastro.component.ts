import { inject, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgxMaskDirective } from 'ngx-mask';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


export interface filhoCasal {
  name: string;
  dt_nasc: string;
};

export interface devolucao {
  data: string;
  perc: string;
}

const ELEMENT_DATA: devolucao[] = [
  { data: "Até 30/06/2025", perc: "100%" },
  { data: "De 01/07 a 15/07/25", perc: "50%" },
  { data: "De 16/07/25 em diante", perc: "0%" },
];



@Component({
  selector: 'app-cadastro',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatExpansionModule, MatButtonModule, MatCardModule, MatListModule, NgxMaskDirective, ReactiveFormsModule, MatTableModule, MatCheckboxModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})


export class CadastroComponent {

  displayedColumns: string[] = ['data', 'perc'];
  dataSource = ELEMENT_DATA;


  filhosCasal: filhoCasal[] = [];

  cadastroEncontristaForm = new FormGroup({
    nomePadrinho: new FormControl(''),
    esposoNomeCompleto: new FormControl(''),
    esposoNome: new FormControl(''),
    esposoDtNasc: new FormControl(''),
    esposoProfissao: new FormControl(''),
    esposoEmail: new FormControl(''),
    esposoCelular: new FormControl(''),
    esposoIdentidade: new FormControl(''),
    esposoOrgao: new FormControl(''),
    esposoCpf: new FormControl(''),
    esposoSaude: new FormControl(''),
    esposoMedicamento: new FormControl(''),
    esposoDiabetico: new FormControl(''),
    esposoVegetariano: new FormControl(''),
    esposoReligiao: new FormControl(''),
    esposaNomeCompleto: new FormControl(''),
    esposaNome: new FormControl(''),
    esposaDtNasc: new FormControl(''),
    esposaProfissao: new FormControl(''),
    esposaEmail: new FormControl(''),
    esposaCelular: new FormControl(''),
    esposaIdentidade: new FormControl(''),
    esposaOrgao: new FormControl(''),
    esposaCpf: new FormControl(''),
    esposaSaude: new FormControl(''),
    esposaMedicamento: new FormControl(''),
    esposaDiabetico: new FormControl(''),
    esposaVegetariano: new FormControl(''),
    esposaReligiao: new FormControl(''),
    dtCasamento: new FormControl(''),
    endereco: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    cep: new FormControl(''),
  });


  onSubmit() {
    console.warn(this.cadastroEncontristaForm.value);
  }


  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroFilhoDialog, {
      data: {},
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.filhosCasal.push(result);
      }

      console.log(this.filhosCasal);
    });
  }


  removeFilho(filho: filhoCasal) {
    this.filhosCasal = this.filhosCasal.filter(f => f !== filho);
  }

}

@Component({
  selector: 'cadastro-filho-dialog',
  templateUrl: 'cadastroFilho.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    NgxMaskDirective
  ],
})
export class CadastroFilhoDialog {
  readonly dialogRef = inject(MatDialogRef<CadastroFilhoDialog>);
  readonly data = inject<filhoCasal>(MAT_DIALOG_DATA);
  readonly nome = this.data.name;
  readonly nascimento = this.data.dt_nasc;



  onNoClick(): void {
    this.dialogRef.close();
  }


}

