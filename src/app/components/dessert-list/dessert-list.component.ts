import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from '../../shared/models/dessert.model';
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
export class DessertListComponent implements OnInit {
  public desserts$!: Observable<Dessert[]>;

  constructor(
    private dessertService: DessertService,
  ) {}

  public ngOnInit() {
    this.desserts$ = this.dessertService.getAll();
  }
}
