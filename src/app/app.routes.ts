import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {path: "", component: CadastroComponent},
    {path: "admin", component: AdminComponent}
];
