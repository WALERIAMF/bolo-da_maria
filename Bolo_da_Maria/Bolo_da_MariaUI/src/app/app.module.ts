import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { LogoComponent } from 'src/assets/svg/logo/logo.component';
import { BellComponent } from 'src/assets/svg/bell/bell-icon.component';
import { UserComponent } from 'src/assets/svg/user/user-icon.component';
import {SearchComponent} from 'src/assets/svg/search/search-icon.component'


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    HeaderComponent,
    CardBoxComponent,
    CarouselItemsComponent,
    AmountBoxComponent,
    SearchComponent,
    BellComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
