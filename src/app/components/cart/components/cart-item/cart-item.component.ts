import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartItem } from '../../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [
    MatIconModule,
    MatTooltipModule,
    CurrencyPipe,
  ],
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: CartItem;

  get subtotal(): number {
    return this.cartItem.dessert.price * this.cartItem.quantity;
  }
}
