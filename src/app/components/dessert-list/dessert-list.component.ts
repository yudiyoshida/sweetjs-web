import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dessert } from '../../shared/models/dessert.model';
import { DessertCardComponent } from '../dessert-card/dessert-card.component';

@Component({
  selector: 'app-dessert-list',
  standalone: true,
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.scss',
  imports: [
    DessertCardComponent,
    AsyncPipe,
  ],
})
export class DessertListComponent {
  @Input({ required: true }) desserts!: Dessert[] | null;
}
