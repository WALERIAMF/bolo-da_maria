import { AfterViewInit, Component } from '@angular/core';


declare const M: any;

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})

export class CarouselItemsComponent implements AfterViewInit {
  images: string[] = [
    'assets/imagens/carosel_01.jpg',
    'assets/imagens/carosel_02.jpg',
    'assets/imagens/carosel_03.jpg'
  ];
  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.carousel');
    const options = {
      fullWidth: true,

      interval: 3000
    };
    const instances = M.Carousel.init(elems, options);
  }
}
