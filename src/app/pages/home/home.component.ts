import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { CartComponent } from '../../components/cart/cart.component';
import { DessertListComponent } from '../../components/dessert-list/dessert-list.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Dessert } from '../../shared/models/dessert.model';
import { DessertService } from '../../shared/services/dessert/dessert.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    DessertListComponent,
    CartComponent,
    ToolbarComponent,
    AsyncPipe,
  ],
})
export class HomeComponent implements OnInit {
  public desserts$!: Observable<Dessert[]>;

  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dessertService: DessertService,
  ) {}

  ngOnInit(): void {
    this.desserts$ = this.dessertService.getAll();
  }
}
