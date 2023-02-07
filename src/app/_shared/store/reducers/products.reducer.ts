import { createReducer, on } from '@ngrx/store';
import { setProducts } from "../actions/products.action";
import { Product } from "../../models/Product";

export interface ProductsState {
  products: ReadonlyArray<Product>;
}

export const initialState: ReadonlyArray<Product> = [
  {id: 0, title: 'Produkt Eins', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 1245},
  {id: 1, title: 'Produkt Zwei', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 145},
  {id: 2, title: 'Produkt Drei', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price: 27},
  {id: 3, title: 'Produkt Vier', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing dolor', price: 1065},
  {id: 4, title: 'Produkt Fünf', description: 'At accusam dolor sit amet, consetetur sit dolores elitr', price: 459},
  {id: 5, title: 'Produkt Sechs', description: 'At accusam dolor sit amet, consetetur sit dolores elitr', price: 459},
  {id: 6, title: 'Produkt Sieben', description: 'At vero eos et accusam et justo duo dolores et ea rebum', price: 12},
];

export const productsReducer = createReducer(
  initialState,
  on(setProducts, (state, {products}) => [...products])
);
