import { Component, ViewEncapsulation } from '@angular/core';
import { BooktableComponent } from "../booktable/booktable.component";
import { RouterLink } from '@angular/router';
import { CarouselModule ,OwlOptions} from 'ngx-owl-carousel-o';
import { CardComponent } from '../../Reuseable component/card/card.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BooktableComponent, RouterLink, CardComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {



  Owlhome1: OwlOptions = {
    loop: true,
    slideTransition:'ease-in-out 0.1s',
    autoplayTimeout: 10000,
    autoplay:true,
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

  Owlhome2: OwlOptions = {
    loop: true,
    slideTransition:'linear 0.1s',
    autoplayTimeout: 10000,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    smartSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
