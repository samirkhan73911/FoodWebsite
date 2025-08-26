import { Component, inject, ViewEncapsulation } from '@angular/core';
import { BooktableComponent } from '../../component/booktable/booktable.component';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CardComponent } from '../../Reuseable component/card/card.component';
import { Blogcard, foodCard } from '../../core/models/interface/Idata';
import { CardServiceService } from '../../core/services/card-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BooktableComponent, RouterLink, CardComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private cardsrv: CardServiceService) {}
  // private cardsrv = inject(CardServiceService);

  selected: string = 'All';

  menudata: foodCard[] = [];
  
  blogdata: Blogcard[] = [];

  populardata: foodCard[] = [];
  filterdata: foodCard[] = [];

  ngOnInit() {
    this.getmenus();
    this.getpopular();
    this.getblogs();
  }
  ngAfterViewInit() {
    this.getelementbycategory(this.selected);
  }

  getmenus() {
    this.cardsrv.getMenus().subscribe((res: any) => {
      this.menudata = res;
    });
  }
  getpopular() {
    this.cardsrv.getpopular().subscribe((ids) => {
     
      this.populardata = this.menudata.filter(item => ids.includes(item.id));
      
    });
  }

  getblogs() {
    this.cardsrv.getBlogs().subscribe((res: any) => {
      this.blogdata = res;
      this.blogdata = this.blogdata.slice(0, 3);
    });
  }

  getelementbycategory(category: string) {
    this.filterdata = this.menudata
      // .filter((item) => item.category === category && item.isAvailable === true)
      .filter((item) => item.category === category )
      .slice(0, 8);
  }
  // elementmenupage() {
  //   this.filterdata.slice(0, 8);

  // }

  Owlhome1: OwlOptions = {
    loop: true,
    slideTransition: 'ease-in-out 0.1s',
    autoplayTimeout: 10000,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    smartSpeed: 2000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  Owlpopulardishes: OwlOptions = {
    loop: true,
    slideTransition: 'linear 0.1s',
    autoplayTimeout: 10000,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    smartSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      552: {
        items: 2,
      },
      720: {
        items: 3,
      },

      920: {
        items: 4,
      },
    },
    nav: false,
  };
}
