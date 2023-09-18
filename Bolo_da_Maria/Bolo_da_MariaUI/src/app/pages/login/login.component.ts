// LoginComponent
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth-service.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent {
  email = '';
  password = '';
  errorMensagem = '';
  cards = [
    {
      imagemPath: 'assets/imagens/rose-cake.png',
      routerLink: '/home'
    }
  ];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  loginUser() {
    const userData = {
      email: 'eve.holt@reqres.in', // Email válido para teste
      password: 'cityslicka',      // Senha válida para teste
    };

    const apiUrl = 'https://reqres.in/api/login';

    this.http.post(apiUrl, userData).toPromise()
      .then((response: any) => {

        if (response.token) {

          this.authService.login();

          this.router.navigate(['/cardapio']);
        } else {

          this.errorMensagem = 'Login inválido';
        }
      })
      .catch((error) => {

        console.error('Erro ao fazer login:', error);


        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Mensagem de erro:', error.message);
          this.errorMensagem = 'Erro ao fazer login: ' + error.message;
        }
      });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/carousel']);
  }

  isAuthenticatedUser(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
