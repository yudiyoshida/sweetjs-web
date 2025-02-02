import { Component, Input } from '@angular/core';
import { Dessert } from '../../shared/models/dessert.model';
import { DessertButtonComponent } from './components/dessert-button/dessert-button.component';
import { DessertImageComponent } from './components/dessert-image/dessert-image.component';
import { DessertInformationComponent } from './components/dessert-information/dessert-information.component';

@Component({
  selector: 'app-dessert-card',
  standalone: true,
  templateUrl: './dessert-card.component.html',
  styleUrl: './dessert-card.component.scss',
  imports: [
    DessertButtonComponent,
    DessertImageComponent,
    DessertInformationComponent,
  ],
})
export class DessertCardComponent {
  @Input({ required: true }) dessert!: Dessert;
}
