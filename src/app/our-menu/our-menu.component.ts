import { Component } from '@angular/core';
import { TitleComponent } from '../Reuseable component/title/title.component';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { TestimonalComponent } from "../testimonal/testimonal.component";
import { BooktableComponent } from "../booktable/booktable.component";
import { FoodcardComponent } from '../Reuseable component/foodcard/foodcard.component';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent, TestimonalComponent, BooktableComponent,FoodcardComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css'
})
export class OurMenuComponent {

}
