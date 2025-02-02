import { Component, Input } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';
import { CartSubtotalComponent } from '../../../cart/components/cart-subtotal/cart-subtotal.component';
import { OrderItemComponent } from '../order-item/order-item.component';

@Component({
  selector: 'app-order-list-items',
  standalone: true,
  templateUrl: './order-list-items.component.html',
  styleUrl: './order-list-items.component.scss',
  imports: [
    CartSubtotalComponent,
    OrderItemComponent,
  ],
})
export class OrderListItemsComponent {
  @Input({ required: true }) cart!: Dessert[];
}
