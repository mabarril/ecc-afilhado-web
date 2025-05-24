import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginCredentials } from '../../core/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
})
export class LoginComponent {
  credentials: LoginCredentials = {
    email_institucional: '',
    senha_acesso: ''
  };
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    if (!this.credentials.email_institucional || !this.credentials.senha_acesso) {
      this.errorMessage = 'Por favor, preencha email e senha.';
      this.isLoading = false;
      return;
    }

    this.authService.login(this.credentials).subscribe(response => {
      this.isLoading = false;
      if (response && response.token) {
        this.router.navigate(['/admin']); // Redireciona para a página de admin ou dashboard
      } else {
        this.errorMessage = 'Credenciais inválidas ou erro no servidor. Tente novamente.';
      }
    });
  }
}