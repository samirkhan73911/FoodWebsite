import { CartService } from './../../core/services/cart.service';
import { encryption } from '../../core/constant/encryption';
import { CardServiceService } from './../../core/services/card-service.service';
import { Component } from '@angular/core';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem, foodCard } from '../../core/models/interface/Idata';

import { RatingModule } from 'ngx-bootstrap/rating';

import { FormsModule } from '@angular/forms';
import { EncryptionService } from '../../core/services/encryption.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [TitleComponent, NewsletterComponent, RatingModule, FormsModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  max = 5;
  rate: number = 0;

  productId!: number;
  product: foodCard | null = null;
  constructor(
    private route: ActivatedRoute,
    private cardsrv: CardServiceService,
    private router: Router,
    private encSrv: EncryptionService,
    public CartServ: CartService
  ) {}

  ngOnInit(): void {
    this.productDecryption();
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
    }
  }

  productDecryption() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.productId = Number(
          this.encSrv.decrypt(decodeURIComponent(id.toString()))
        );
        this.getProductDetails(this.productId);
      } catch (error) {
        this.router.navigate(['/our-menu']);
      }
    }
  }

  getProductDetails(id: number) {
    this.cardsrv.getProductById(id).subscribe({
      next: (res) => {
        this.product = res;
        this.rate = this.product.rating;
        window.scrollTo(0, 0);
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });
  }

addToCart() {
  if (this.product) {
    this.CartServ.addItem({ ...this.product,total:this.product.price, quantity: 1 });
  }
}
}
