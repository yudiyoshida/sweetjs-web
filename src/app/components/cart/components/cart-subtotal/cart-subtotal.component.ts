import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

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
  get subtotal(): number {
    return 40;
  }
}
