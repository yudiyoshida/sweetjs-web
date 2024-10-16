import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { CartComponent } from '../../components/cart/cart.component';
import { DessertListComponent } from '../../components/dessert-list/dessert-list.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

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
export class HomeComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );
}
