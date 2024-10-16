import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dessert } from '../../../../shared/models/dessert.model';

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
  @Input({ required: true }) dessert!: Dessert;
}
