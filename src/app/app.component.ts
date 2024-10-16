import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertCardComponent } from './components/dessert-card/dessert-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DessertCardComponent],
  template: `
    <div class="grid grid-cols-5 gap-4">
      <app-dessert-card />
      <app-dessert-card />
      <app-dessert-card />
    </div>
  `,
})
export class AppComponent { }
