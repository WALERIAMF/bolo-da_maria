import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as M from 'materialize-css';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cep: string = '';
  ddd: string = '';
  logradouro: string = '';
  numero: string = '';
  bairro: string = '';
  complemento: string = '';
  localidade: string = '';
  uf: string = '';
  nome: string = '';
  telefone: string = '';
  dataEntrega: string = '';
  tema: string = '';
  boloMassa: string = '';
  boloRecheio: string = '';
  boloCobertura: string = '';
  pirulitoMassa: string = '';
  pirulitoRecheio: string = '';
  docinhos: string[] = [];
  numeroPessoas: number | null = null;
  imagem: File | null = null;
  dataEntregaInvalida: boolean = false;
  cepInvalido: boolean = false;
  valorPac: string | null = null;
  prazoPac: string | null = null;
  valorSedex: string | null = null;
  prazoSedex: string | null = null;
  formulario: FormGroup | undefined;




  handleImageUpload(event: any): void {
    this.imagem = event.target.files[0];

  }

  todosCamposPreenchidos(): boolean {
    return !!this.nome && !!this.telefone && !!this.dataEntrega && !!this.tema && !!this.numero;
  }




  validarDataEntrega(): void {
    const hoje = new Date();
    const dataMinima = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 2);

    if (new Date(this.dataEntrega) <= dataMinima) {
      this.dataEntregaInvalida = true;
    } else {
      this.dataEntregaInvalida = false;
    }
  }

  /**
 * Gerar link para envio dos dados do pedido pelo WhatsApp para o Bolo da Maria
 */

  gerarLink(): void {
    const numeroTelefone = '55 11 992538934';
    const mensagem = `
      Bolo Cobertura: ${this.boloCobertura}
      Bolo Massa: ${this.boloMassa}
      Bolo Recheio: ${this.boloRecheio}
      Pirulito Massa: ${this.pirulitoMassa}
      Pirulito Recheio: ${this.pirulitoRecheio}
      Doces: ${this.docinhos}
      Nome: ${this.nome}
      Telefone: ${this.telefone}
      Endereço: ${this.logradouro}
      Número: ${this.numero}
      Complemento: ${this.complemento}
      Bairro: ${this.bairro}
      Cidade: ${this.localidade}
      Estado: ${this.uf}
      DDD: ${this.ddd}
      Data de Entrega: ${this.dataEntrega}
      Tema: ${this.tema}
    `;


    const mensagemFormatada = encodeURIComponent(mensagem);
    const numeroTelefoneFormatado = encodeURIComponent(numeroTelefone);


    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefoneFormatado}&text=${mensagemFormatada}`;


    window.open(linkWhatsapp);
  }

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.numeroPessoas = 0;
    this.formulario = this.formBuilder.group({

      cep: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]

    });
  }

  buscarEnderecoPorCEP(): void {
    const url = `http://viacep.com.br/ws/${this.cep}/json/`;

    this.http.get(url).subscribe((data: any) => {
      if (!data.erro) {

        this.logradouro = data.logradouro;
        this.bairro = data.bairro;
        this.localidade = data.localidade;
        this.uf = data.uf;
        this.ddd = data.ddd;


        if (data.ddd === '11') {
          this.numero = '';
          this.complemento = '';
        } else {
          alert('Endereço fora da área de entrega. Por favor, verifique e tente novamente.');
          return;
        }

      } else {
        if (data.erro === true) {
          alert('CEP inválido ou não encontrado. Por favor, insira um CEP válido.');
        } else {
          alert('Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.');
        }
        this.cepInvalido = true;
      }
    }, error => {
      alert('CEP não encontrado ou CEP inválido');
      this.cepInvalido = true;
    });
  }

  calcularFrete(): void {
    const cepOrigem = '01001000'; // CEP de origem fixo
    const cepDestino = this.cep; // CEP de destino fornecido pelo usuário

    // Remova os '-' da data de entrega usando a função replace
    const dataEntrega = this.dataEntrega.replace(/-/g, '');

    if (!this.numeroPessoas || this.numeroPessoas <= 0) {
      alert('Por favor, insira um número válido de pessoas.');
      return; // Saia da função se o número de pessoas não for válido
    }

    const peso = this.numeroPessoas * 150; // Peso calculado

    const url = `https://www.cepcerto.com/ws/json-frete/${cepOrigem}/${cepDestino}/${dataEntrega}/${peso}`;

    this.http.get(url).subscribe((data: any) => {
      // Processaros dados recebidos da API (valorpac, prazopac, valorsedex, prazosedex) aqui
      console.log('Dados do frete:', data);

      // Atualiza as variáveis com os valores recebidos da API
      this.valorPac = data.valorpac;
      this.prazoPac = data.prazopac;
      this.valorSedex = data.valorsedex;
      this.prazoSedex = data.prazosedex;
    }, error => {
      console.error('Erro ao calcular o frete:', error)

    });
  }


  ngOnInit(): void {
    M.AutoInit();
  }
}
