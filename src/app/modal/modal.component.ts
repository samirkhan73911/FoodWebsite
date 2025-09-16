import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  CartServ = inject(CartService);
  // @ViewChild('Modal') modalElement!: ElementRef;

  closeModal() {
    this.CartServ.showmodal.set(false);
    this.CartServ.itemadded.set(false);
  }
}
