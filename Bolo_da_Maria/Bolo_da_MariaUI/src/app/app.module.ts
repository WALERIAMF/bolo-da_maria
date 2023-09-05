import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { LogoComponent } from 'src/assets/svg/logo/logo.component';
import { BellComponent } from 'src/assets/svg/bell/bell-icon.component';
import { UserComponent } from 'src/assets/svg/user/user-icon.component';
import {SearchComponent} from 'src/assets/svg/search/search-icon.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EncomendaComponent } from './pages/encomenda/encomenda.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { DetalheBoloComponent } from './pages/detalhe-bolo/detalhe-bolo.component';
import { DetalhePirulitoComponent } from './pages/detalhe-pirulito/detalhe-pirulito.component';
import { DetalheDocinhosComponent } from './pages/detalhe-docinhos/detalhe-docinhos.component'; 


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    HeaderComponent,
    CarouselItemsComponent,
    SearchComponent,
    BellComponent,
    UserComponent,
    FooterComponent,
    CardapioComponent,
    ContatoComponent,
    EncomendaComponent,
    PageNotFoundComponentComponent,
    FormularioComponent,
    DetalheBoloComponent,
    DetalhePirulitoComponent,
    DetalheDocinhosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
