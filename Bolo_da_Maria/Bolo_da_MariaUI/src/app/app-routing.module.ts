import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';
import * as M from 'materialize-css';

import { CardapioComponent } from 'src/app/pages/cardapio/cardapio.component';
import { ContatoComponent } from 'src/app/pages/contato/contato.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { EncomendaComponent } from 'src/app/pages/encomenda/encomenda.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';



const routes: Routes = [
  { path: 'carousel', component: CarouselItemsComponent},
  { path: 'cardapio', component: CardapioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'encomenda', component: EncomendaComponent },
  { path: 'detalhe/:produtoId', component: DetalheComponent },
  { path: '', redirectTo: 'carousel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
