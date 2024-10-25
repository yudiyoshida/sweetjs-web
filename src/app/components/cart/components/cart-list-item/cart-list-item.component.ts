import { Component, Input } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list-item',
  standalone: true,
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.scss',
  imports: [
    CartItemComponent,
  ],
})
export class CartListItemComponent {
  @Input({ required: true }) cart!: Dessert[] | null;
}
