import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth-service.component'; // Importe o serviço de autenticação

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      // O usuário está autenticado, permita o acesso à rota
      return true;
    } else {
      // O usuário não está autenticado, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}