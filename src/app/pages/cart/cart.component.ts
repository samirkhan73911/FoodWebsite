import { Component } from '@angular/core';
import { NewsletterComponent } from '../../component/newsletter/newsletter.component';
import { TitleComponent } from '../../Reuseable component/title/title.component';
import { RatingComponent } from 'ngx-bootstrap/rating';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NewsletterComponent, TitleComponent, RatingComponent, FormsModule, RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  max = 5;
  rate = 2;



 infoForm!: FormGroup;

  constructor(private fb: FormBuilder, public cartService: CartService) {}

  ngOnInit() {
    this.infoForm = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
     
    }
  }
 activeTab: string = 'cart'; // Default tab
 selectedpaymethod: string = 'visacard'; // Default tab

  setTab(tab: string) {
    this.activeTab = tab;
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab;
  }

    setMethod(method: string) {
    this.selectedpaymethod = method;
  }

isSelectedPayMethod(method: string): boolean {
    return this.selectedpaymethod === method;
  }

   continueToPayment() {
    if (this.infoForm.valid) {
      this.setTab('payment');
    } else {
      this.infoForm.markAllAsTouched(); // show validation errors
    }
  }
}
