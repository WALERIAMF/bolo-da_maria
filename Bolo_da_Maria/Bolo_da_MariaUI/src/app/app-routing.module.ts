import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';
import * as M from 'materialize-css';
import { FormsModule } from '@angular/forms';
import { CardapioComponent } from 'src/app/pages/cardapio/cardapio.component';
import { ContatoComponent } from 'src/app/pages/contato/contato.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { EncomendaComponent } from 'src/app/pages/encomenda/encomenda.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetalheBoloComponent } from './pages/detalhe-bolo/detalhe-bolo.component';
import { DetalheDocinhosComponent } from './pages/detalhe-docinhos/detalhe-docinhos.component';
import { DetalhePirulitoComponent } from './pages/detalhe-pirulito/detalhe-pirulito.component';



const routes: Routes = [
  { path: 'carousel', component: CarouselItemsComponent},
  { path: 'cardapio', component: CardapioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'encomenda', component: EncomendaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalheBolo', component: DetalheBoloComponent },
  { path: 'detalheDocinho', component: DetalheDocinhosComponent },
  { path: 'detalhePirulito', component: DetalhePirulitoComponent },
  { path: '', redirectTo: 'carousel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
