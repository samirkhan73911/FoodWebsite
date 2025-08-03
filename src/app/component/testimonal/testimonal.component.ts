import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonal',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonal.component.html',
  styleUrl: './testimonal.component.css'
})
export class TestimonalComponent {
testimonalcarosul: OwlOptions = {
    loop: true,
    slideTransition:'ease-in-out 0.1s',
    autoplayTimeout: 10000,
    autoplay:false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    smartSpeed: 2000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
