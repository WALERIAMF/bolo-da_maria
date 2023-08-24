import { AfterViewInit, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})

export class CarouselItemsComponent implements AfterViewInit {
  images: string[] = [
    'assets/imagens/Birthday_Cake-scaled.jpg',
    'assets/imagens/bolo-rustico.png',
    'assets/imagens/rose-cake.png'
  ];
  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.carousel');
    const options = {
      fullWidth: true,
      indicators: true, 
      interval: 3000
    };
    const instances = M.Carousel.init(elems, options);
  }
}
