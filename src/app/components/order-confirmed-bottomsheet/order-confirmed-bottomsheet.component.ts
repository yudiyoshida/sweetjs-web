import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OrderConfirmedComponent } from '../order-confirmed/order-confirmed.component';

@Component({
  selector: 'app-order-confirmed-bottomsheet',
  standalone: true,
  imports: [OrderConfirmedComponent],
  templateUrl: './order-confirmed-bottomsheet.component.html',
  styleUrl: './order-confirmed-bottomsheet.component.scss',
})
export class OrderConfirmedBottomsheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<OrderConfirmedBottomsheetComponent>) {}

  close() {
    this.bottomSheetRef.dismiss();
  }
}
