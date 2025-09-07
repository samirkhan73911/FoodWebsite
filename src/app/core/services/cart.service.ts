import { computed, Injectable, signal } from '@angular/core';
import { CartItem, foodCard } from '../models/interface/Idata';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 cartItems = signal<CartItem[]>([]);
  // computed signal for total
  total = computed(() =>
    this.cartItems().reduce((sum, i) => sum + i.price * i.quantity, 0)
  );

  // computed signal for item count
  count = computed(() =>
    this.cartItems().reduce((sum, i) => sum + i.quantity, 0)
  );

  addItem(item: CartItem) {
    const items = [...this.cartItems()];
    const existing = items.find(i => i.id === item.id);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.push(item);
    }

    this.cartItems.set(items);
  }

  removeItem(id: number) {
    this.cartItems.set(this.cartItems().filter(i => i.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }

    updateQuantity(id: number, quantity: number) {
    const items = [...this.cartItems()];

    const item = items.find(i => i.id === id);

    if (item) {
      const newq=item.quantity+quantity
      item.quantity = newq < 1 ? 1 : newq; 
    }

    this.cartItems.set(items);
  }
}
