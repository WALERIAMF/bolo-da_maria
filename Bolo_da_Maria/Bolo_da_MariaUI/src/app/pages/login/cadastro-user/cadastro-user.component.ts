import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})

export class CadastroUserComponent {

  cadastroForm: FormGroup;
  erroCadastro: string | null = null;
  mensagemCadastro: string | null = null;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  transformText(text: string, toUpperCase: boolean): string {
    return toUpperCase ? text.toUpperCase() : text.toLowerCase();
  }

  onNomeInput(event: any) {
    const input = event.target;
    input.value = this.transformText(input.value, true); 
    this.cadastroForm?.get('nome')?.setValue(input.value);
  }

  onEmailInput(event: any) {
    const input = event.target;
    input.value = this.transformText(input.value, false); 
    this.cadastroForm?.get('email')?.setValue(input.value);
  }

  async cadastrarUsuario() {
    if (this.cadastroForm && this.cadastroForm.get('nome') && this.cadastroForm.get('email') && this.cadastroForm.get('senha')) {
      if (this.cadastroForm.valid) {
        const nomeControl = this.cadastroForm.get('nome');
        const emailControl = this.cadastroForm.get('email');
        const senhaControl = this.cadastroForm.get('senha');

        if (nomeControl && emailControl && senhaControl) {
          const userData = {
            nome: nomeControl.value,
            email: emailControl.value,
            senha: senhaControl.value,
          };

          const apiUrl = 'https://reqres.in/api/users';

          try {
            const response: any = await firstValueFrom(this.http.post(apiUrl, userData));

            console.log('Usuário cadastrado:', response);
            this.erroCadastro = null;
            this.mensagemCadastro = 'Usuário cadastrado com sucesso!';
            this.router.navigate(['/login']);

          } catch (error) {

            console.error('Erro ao cadastrar usuário:', error);
            this.erroCadastro = 'Ocorreu um erro ao cadastrar o usuário. Tente novamente.';
          }
        }
      }
    }
  }
}