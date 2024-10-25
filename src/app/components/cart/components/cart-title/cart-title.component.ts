import { AsyncPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';

@Component({
  selector: 'app-cart-title',
  standalone: true,
  templateUrl: './cart-title.component.html',
  styleUrl: './cart-title.component.scss',
  imports: [AsyncPipe],
})
export class CartTitleComponent implements OnChanges {
  @Input({ required: true }) cart!: Dessert[] | null;

  public totalItems = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cart']) {
      this.calculateTotalItems();
    }
  }

  private calculateTotalItems(): void {
    if (this.cart) {
      this.totalItems = this.cart.reduce((acc, dessert) => acc + dessert.quantityInCart, 0);
    }
  }
}
