import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
 bolo= 'assets/imagens/bolo_baria_inteiro.JPG';
 pirulito= 'assets/imagens/bolo_pirulito.JPG';

 cards = [
  {
    id: 1,
    imagemPath: 'assets/imagens/bolo_baria_inteiro.JPG',
    titulo: 'Bolo',
    texto: 'Texto do Card 1',
    corFundo: 'cyan darken-3',
    conteudo: ''
  },
  {
    id: 2,
    imagemPath: 'assets/imagens/bolo_pirulito.JPG',
    titulo: 'Pirulito',
    texto: 'Texto do Card 2',
    corFundo: 'purple darken-4',
    conteudo: ''
  },

];
}

