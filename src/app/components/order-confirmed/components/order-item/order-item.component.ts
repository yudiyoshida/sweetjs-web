import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

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
  get subtotal(): number {
    return 10;
  }
}
