import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { RatingComponent } from 'ngx-bootstrap/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, RatingComponent, FormsModule, RouterLink,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  max = 5;
  rate = 2;

  constructor(public cartService: CartService) {}

 
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
     
    }
  }
 



}
