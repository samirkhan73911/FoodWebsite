import { Component, ViewEncapsulation } from '@angular/core';
import { BooktableComponent } from "../booktable/booktable.component";
import { BlogscardComponent } from "../blogscard/blogscard.component";
import { RouterLink } from '@angular/router';
import { FoodcardComponent } from '../Reuseable component/foodcard/foodcard.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BooktableComponent, BlogscardComponent,RouterLink,FoodcardComponent,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
