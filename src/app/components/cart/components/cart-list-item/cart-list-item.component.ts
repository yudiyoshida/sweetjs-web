import { Component } from '@angular/core';
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

}
