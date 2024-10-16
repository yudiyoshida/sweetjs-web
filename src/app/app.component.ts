import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertListComponent } from './components/dessert-list/dessert-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DessertListComponent],
  template: `
    <app-dessert-list />
  `,
})
export class AppComponent { }
