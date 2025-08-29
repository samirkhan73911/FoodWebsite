import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { CardComponent } from '../../Reuseable component/card/card.component';
import { Blogcard } from '../../core/models/interface/Idata';
import { CardServiceService } from '../../core/services/card-service.service';
import { privateDecrypt } from 'crypto';

@Component({
  selector: 'app-our-blogs',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent, TestimonalComponent,CardComponent,CarouselModule,PaginationModule,NgxPaginationModule],
  templateUrl: './our-blogs.component.html',
  styleUrl: './our-blogs.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class OurBlogsComponent {

  constructor(private cardsrv :CardServiceService) {}
  // private cardsrv = inject(CardServiceService);
 itemsPerPage: number = 6;
  page: number = 1;
  blogdata: Blogcard[] = [];

  ngOnInit() {
    this.getblogs();
  }
  getblogs() {
    this.cardsrv.getBlogs().subscribe((res: any) => {
      this.blogdata = res;
      // this.totalitems = this.blogdata.length;
      // this.blogdata = this.blogdata.slice(0, 6);
    });
  }
}
