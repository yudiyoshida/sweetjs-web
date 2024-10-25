import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dessert } from '../../shared/models/dessert.model';
import { DessertService } from '../../shared/services/dessert/dessert.service';
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
export class OrderConfirmedComponent implements OnInit {
  @Output() startNewOrderClick = new EventEmitter<void>();

  constructor(private dessertService: DessertService) {}

  public cart!: Dessert[];

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe((desserts) => {
      this.cart = desserts.filter((dessert) => dessert.quantityInCart > 0);
    });
  }

  emptyCart(): void {
    this.dessertService.emptyCart();
    this.startNewOrderClick.emit();
  }
}
