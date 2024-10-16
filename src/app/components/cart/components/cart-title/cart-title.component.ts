import { Component, Input } from '@angular/core';
import { Cart } from '../../../../shared/models/cart.model';

@Component({
  selector: 'app-cart-title',
  standalone: true,
  templateUrl: './cart-title.component.html',
  styleUrl: './cart-title.component.scss',
  imports: [],
})
export class CartTitleComponent {
  @Input({ required: true }) cart!: Cart;
}
