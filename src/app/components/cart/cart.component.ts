import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Dessert } from '../../shared/models/dessert.model';
import { DessertService } from '../../shared/services/dessert/dessert.service';
import { ButtonComponent } from '../button/button.component';
import { OrderConfirmedBottomsheetComponent } from '../order-confirmed-bottomsheet/order-confirmed-bottomsheet.component';
import { OrderConfirmedModalComponent } from '../order-confirmed-modal/order-confirmed-modal.component';
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
export class CartComponent implements OnInit {
  public cart!: Dessert[];

  constructor(
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
    private dessertService: DessertService,
  ) {}

  ngOnInit(): void {
    this.dessertService.getDesserts().subscribe((desserts) => {
      this.cart = desserts.filter((dessert) => dessert.quantityInCart > 0);
    });
  }

  public openCart() {
    if (window.innerWidth < 960) {
      this.bottomSheet.open(OrderConfirmedBottomsheetComponent, {
        disableClose: true,
      });
    } else {
      this.dialog.open(OrderConfirmedModalComponent, {
        disableClose: true,
      });
    }
  }
}
