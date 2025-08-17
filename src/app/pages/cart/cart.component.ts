import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { CardComponent } from '../../Reuseable component/card/card.component';
import { RatingComponent, RatingModule } from 'ngx-bootstrap/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, CardComponent,RatingComponent,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  max = 5;
  rate = 2;
 
 
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
     
    }
  }
 

}
