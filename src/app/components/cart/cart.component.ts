import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { ButtonComponent } from '../button/button.component';
import { CartCarbonCardComponent } from './components/cart-carbon-card/cart-carbon-card.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartSubtotalComponent } from './components/cart-subtotal/cart-subtotal.component';
import { CartTitleComponent } from './components/cart-title/cart-title.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    CartTitleComponent,
    CartListItemComponent,
    CartSubtotalComponent,
    CartCarbonCardComponent,
    ButtonComponent,
    AsyncPipe,
  ],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
  ) {}

  public cart$ = this.cartService.getAll();
}
