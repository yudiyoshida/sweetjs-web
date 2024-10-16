import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DessertListComponent } from './components/dessert-list/dessert-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DessertListComponent, CartComponent],
  template: `
    <div class="grid grid-cols-[2fr_1fr] bg-cream">
      <app-dessert-list />
      <app-cart />
    </div>
  `,
})
export class AppComponent { }
