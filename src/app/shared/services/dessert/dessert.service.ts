import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dessert } from '../../models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class DessertService {
  private _desserts = new BehaviorSubject<Dessert[]>([
    {
      id: 'id-1',
      image: '/assets/images/jpg/image-waffle-desktop.jpg',
      name: 'Waffle with Berries',
      category: 'Waffle',
      price: 6.50,
      quantityInCart: 0,
    },
    {
      id: 'id-2',
      image: '/assets/images/jpg/image-creme-brulee-desktop.jpg',
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.00,
      quantityInCart: 0,
    },
    {
      id: 'id-3',
      image: '/assets/images/jpg/image-macaron-desktop.jpg',
      name: 'Macaron Mix of Five',
      category: 'Macaron',
      price: 8.00,
      quantityInCart: 0,
    },
    {
      id: 'id-4',
      image: '/assets/images/jpg/image-tiramisu-desktop.jpg',
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.50,
      quantityInCart: 0,
    },
    {
      id: 'id-5',
      image: '/assets/images/jpg/image-baklava-desktop.jpg',
      name: 'Pistachio Baklava',
      category: 'Baklava',
      price: 4.00,
      quantityInCart: 0,
    },
    {
      id: 'id-6',
      image: '/assets/images/jpg/image-meringue-desktop.jpg',
      name: 'Lemon Meringue Pie',
      category: 'Pie',
      price: 5.00,
      quantityInCart: 0,
    },
    {
      id: 'id-7',
      image: '/assets/images/jpg/image-cake-desktop.jpg',
      name: 'Red Velvet Cake',
      category: 'Cake',
      price: 4.50,
      quantityInCart: 0,
    },
    {
      id: 'id-8',
      image: '/assets/images/jpg/image-brownie-desktop.jpg',
      name: 'Salted Caramel Brownie',
      category: 'Brownie',
      price: 4.50,
      quantityInCart: 0,
    },
    {
      id: 'id-9',
      image: '/assets/images/jpg/image-panna-cotta-desktop.jpg',
      name: 'Vanilla Panna Cotta',
      category: 'Panna Cotta',
      price: 6.50,
      quantityInCart: 0,
    },
  ]);

  public getDesserts(): Observable<Dessert[]> {
    return this._desserts.asObservable();
  }

  public incrementDessertQuantity(dessert: Dessert): void {
    const desserts = this._desserts.getValue();
    const dessertIndex = desserts.findIndex((d) => d.id === dessert.id);
    desserts[dessertIndex].quantityInCart++;
    this._desserts.next(desserts);
  }

  public decrementDessertQuantity(dessert: Dessert): void {
    const desserts = this._desserts.getValue();
    const dessertIndex = desserts.findIndex((d) => d.id === dessert.id);
    desserts[dessertIndex].quantityInCart--;
    this._desserts.next(desserts);
  }

  public deleteDessert(dessert: Dessert): void {
    const desserts = this._desserts.getValue();
    const dessertIndex = desserts.findIndex((d) => d.id === dessert.id);
    desserts[dessertIndex].quantityInCart = 0;
    this._desserts.next(desserts);
  }

  public emptyCart(): void {
    const desserts = this._desserts.getValue();
    desserts.forEach((d) => d.quantityInCart = 0);
    this._desserts.next(desserts);
  }
}
