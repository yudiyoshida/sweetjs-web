import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OrderConfirmedComponent } from '../order-confirmed/order-confirmed.component';

@Component({
  selector: 'app-order-confirmed-modal',
  standalone: true,
  templateUrl: './order-confirmed-modal.component.html',
  styleUrl: './order-confirmed-modal.component.scss',
  imports: [
    MatCardModule,
    OrderConfirmedComponent,
  ],
})
export class OrderConfirmedModalComponent {

}
