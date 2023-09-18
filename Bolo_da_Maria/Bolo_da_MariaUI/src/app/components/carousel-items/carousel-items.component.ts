import { AfterViewInit, Component, ElementRef } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const elems = this.elementRef.nativeElement.querySelectorAll('.carousel');
    const options = {
      fullWidth: true,
      interval: 1000
    };
    const instances = M.Carousel.init(elems, options);
  }

  prevSlide() {
    const instance = M.Carousel.getInstance(this.elementRef.nativeElement.querySelector('.carousel'));
    if (instance) {
      instance.prev();
    }
  }

  nextSlide() {
    const instance = M.Carousel.getInstance(this.elementRef.nativeElement.querySelector('.carousel'));
    if (instance) {
      instance.next();
    }
  }
}
