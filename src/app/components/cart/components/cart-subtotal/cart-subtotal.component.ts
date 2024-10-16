import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartItem } from '../../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-subtotal',
  standalone: true,
  templateUrl: './cart-subtotal.component.html',
  styleUrl: './cart-subtotal.component.scss',
  imports: [
    CurrencyPipe,
  ],
})
export class CartSubtotalComponent {
  @Input({ required: true }) cartItems!: CartItem[];

  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.dessert.price * item.quantity, 0);
  }
}
