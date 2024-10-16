import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartItem } from '../../../../shared/models/cart.model';

@Component({
  selector: 'app-order-item',
  standalone: true,
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
  imports: [
    CurrencyPipe,
  ],
})
export class OrderItemComponent {
  @Input({ required: true }) item!: CartItem;

  get subtotal(): number {
    return this.item.dessert.price * this.item.quantity;
  }
}
