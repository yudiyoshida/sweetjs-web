import { Dessert } from './dessert.model';

export type Cart = {
  id: string;
  items: CartItem[];
}

export type CartItem = {
  id: string;
  dessert: Dessert;
  quantity: number;
}
