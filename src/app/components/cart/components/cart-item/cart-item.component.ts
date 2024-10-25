import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Dessert } from '../../../../shared/models/dessert.model';
import { DessertService } from '../../../../shared/services/dessert/dessert.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [
    MatIconModule,
    MatTooltipModule,
    CurrencyPipe,
  ],
})
export class CartItemComponent {
  @Input({ required: true }) dessert!: Dessert;

  constructor(private dessertService: DessertService) {}

  get subtotal() {
    return this.dessert.quantityInCart * this.dessert.price;
  }

  deleteDessert(): void {
    this.dessertService.deleteDessert(this.dessert);
  }
}
