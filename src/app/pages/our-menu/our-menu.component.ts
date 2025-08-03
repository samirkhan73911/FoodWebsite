import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TestimonalComponent } from '../../component/testimonal/testimonal.component';
import { FoodcardComponent } from '../../Reuseable component/foodcard/foodcard.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { BooktableComponent } from '../booktable/booktable.component';


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent, TestimonalComponent, BooktableComponent,FoodcardComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css'
})
export class OurMenuComponent {

}
