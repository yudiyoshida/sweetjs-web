import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Dessert } from '../../../../shared/models/dessert.model';
import { DessertService } from '../../../../shared/services/dessert/dessert.service';

@Component({
  selector: 'app-dessert-button',
  standalone: true,
  templateUrl: './dessert-button.component.html',
  styleUrl: './dessert-button.component.scss',
  imports: [
    MatIconModule,
  ],
})
export class DessertButtonComponent {
  @Input({ required: true }) dessert!: Dessert;

  constructor(private dessertService: DessertService) {}

  decrement() {
    this.dessertService.decrementDessertQuantity(this.dessert);
  }

  increment() {
    this.dessertService.incrementDessertQuantity(this.dessert);
  }
}
