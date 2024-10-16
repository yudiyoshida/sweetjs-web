import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { ButtonComponent } from '../button/button.component';
import { CartSubtotalComponent } from '../cart/components/cart-subtotal/cart-subtotal.component';
import { OrderListItemsComponent } from './components/order-list-items/order-list-items.component';
import { OrderTitleComponent } from './components/order-title/order-title.component';

@Component({
  selector: 'app-order-confirmed',
  standalone: true,
  templateUrl: './order-confirmed.component.html',
  styleUrl: './order-confirmed.component.scss',
  imports: [
    ButtonComponent,
    CartSubtotalComponent,
    AsyncPipe,
    OrderTitleComponent,
    OrderListItemsComponent,
  ],
})
export class OrderConfirmedComponent {
  constructor(private cartService: CartService) {}

  public cart$ = this.cartService.getAll();
}
