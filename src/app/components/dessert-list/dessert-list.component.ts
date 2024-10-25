import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DessertService } from '../../shared/services/dessert/dessert.service';
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
  constructor(private dessertService: DessertService) {}

  public desserts$ = this.dessertService.getDesserts();
}
