import { Component, ViewEncapsulation } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BlogscardComponent } from '../../component/blogscard/blogscard.component';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';

@Component({
  selector: 'app-our-blogs',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent, TestimonalComponent,BlogscardComponent,CarouselModule,PaginationModule],
  templateUrl: './our-blogs.component.html',
  styleUrl: './our-blogs.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class OurBlogsComponent {

}
