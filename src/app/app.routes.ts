import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard] // Proteger esta rota
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthGuard]
  }, // Rota de cadastro protegida 

  // Rota padrão: redireciona para login se não houver outra correspondência
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Rota curinga para qualquer outra coisa (pode ser uma página 404 ou redirecionar para login)
  { path: '**', redirectTo: '/login' },
]; 
