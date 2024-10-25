import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';

@Component({
  selector: 'app-cart-subtotal',
  standalone: true,
  templateUrl: './cart-subtotal.component.html',
  styleUrl: './cart-subtotal.component.scss',
  imports: [
    CurrencyPipe,
  ],
})
export class CartSubtotalComponent implements OnChanges {
  @Input({ required: true }) cart!: Dessert[] | null;

  public subtotal!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cart']) {
      this.calculateSubtotal();
    }
  }

  private calculateSubtotal(): void {
    if (this.cart) {
      this.subtotal = this.cart.reduce((acc, { price, quantityInCart }) => {
        return acc + (price * quantityInCart);
      }, 0);
    }
  }
}
