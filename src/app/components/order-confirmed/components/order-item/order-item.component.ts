import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';

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
  @Input({ required: true }) dessert!: Dessert;

  get subtotal(): number {
    return this.dessert.quantityInCart * this.dessert.price;
  }
}
