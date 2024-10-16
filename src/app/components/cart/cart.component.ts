import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CartCarbonCardComponent } from './components/cart-carbon-card/cart-carbon-card.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    ButtonComponent,
    CartSubtotalComponent,
    CartCarbonCardComponent,
    CartListItemComponent,
  ],
})
export class CartComponent {
  public count = 7;
}
