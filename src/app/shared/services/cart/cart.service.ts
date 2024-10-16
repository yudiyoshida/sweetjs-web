import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private DATA: Cart = {
    id: 'cart-1',
    items: [
      {
        id: 'cart-item-1',
        dessert: {
          id: 'id-1',
          image: '/assets/images/jpg/image-waffle-desktop.jpg',
          name: 'Waffle with Berries',
          category: 'Waffle',
          price: 6.50,
        },
        quantity: 1,
      },
      {
        id: 'cart-item-2',
        dessert: {
          id: 'id-2',
          image: '/assets/images/jpg/image-creme-brulee-desktop.jpg',
          name: 'Vanilla Bean Crème Brûlée',
          category: 'Crème Brûlée',
          price: 7.00,
        },
        quantity: 2,
      },
      {
        id: 'cart-item-3',
        dessert: {
          id: 'id-3',
          image: '/assets/images/jpg/image-macaron-desktop.jpg',
          name: 'Macaron Mix of Five',
          category: 'Macaron',
          price: 8.00,
        },
        quantity: 3,
      },
    ],
  };

  public getAll(): Observable<Cart> {
    return of(this.DATA);
  }
}
