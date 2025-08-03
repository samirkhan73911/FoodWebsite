import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { FoodcardComponent } from '../../Reuseable component/foodcard/foodcard.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, FoodcardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
