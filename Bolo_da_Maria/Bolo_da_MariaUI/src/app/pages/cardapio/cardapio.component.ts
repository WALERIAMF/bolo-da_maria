import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  cards = [
    {
      id: 1,
      imagemPath: 'assets/imagens/bolo_baria_inteiro.JPG',
      titulo: 'Bolo',
      texto: 'Você escolhe o sabor da massa, recheio, cobertura e o layout do bolo, e nós fazemos a mágica!',
      corFundo: 'cyan darken-3',
      conteudo: 'Clique para mais detalhes',
      routerLink: '/detalheBolo'
    },
    {
      id: 2,
      imagemPath: 'assets/imagens/bolo_pirulito.JPG',
      titulo: 'Pirulito',
      texto: 'Você escole o sabor da massa e o recheio e o tema',
      corFundo: 'purple darken-4',
      conteudo: 'Clique para mais detalhes',
      routerLink: '/detalhePirulito' 
    },
    {
      id: 3,
      imagemPath: 'assets/imagens/brigadeiro.jpg',
      titulo: 'Docinhos',
      texto: 'Várias opções deliciosas a sua escolha',
      corFundo: 'cyan darken-3',
      conteudo: 'Clique para mais detalhes',
      routerLink: '/detalheDocinho' 
    }
  ];
}

