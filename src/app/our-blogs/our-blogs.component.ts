import { Component, ViewEncapsulation } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { TestimonalComponent } from "../testimonal/testimonal.component";
import { BlogscardComponent } from '../blogscard/blogscard.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';

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
