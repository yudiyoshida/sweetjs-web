import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-title',
  standalone: true,
  templateUrl: './cart-title.component.html',
  styleUrl: './cart-title.component.scss',
  imports: [AsyncPipe],
})
export class CartTitleComponent {}
