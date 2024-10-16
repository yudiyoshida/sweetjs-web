import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dessert-information',
  standalone: true,
  templateUrl: './dessert-information.component.html',
  styleUrl: './dessert-information.component.scss',
  imports: [
    CurrencyPipe,
  ],
})
export class DessertInformationComponent {

}
