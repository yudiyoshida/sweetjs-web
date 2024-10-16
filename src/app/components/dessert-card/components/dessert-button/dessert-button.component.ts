import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  addedToCart = false;
  count = 1;

  addToCart() {
    this.addedToCart = true;
  }

  decrement() {
    if (this.count === 1) {
      this.addedToCart = false;
    } else {
      this.count--;
    }
  }

  increment() {
    this.count++;
  }
}
