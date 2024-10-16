import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CartCarbonCardComponent } from './components/cart-carbon-card/cart-carbon-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    CartItemComponent,
    CartSubtotalComponent,
    CartCarbonCardComponent,
    ButtonComponent,
  ],
})
export class CartComponent {
  public count = 7;
}
