import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/Product';
import { addProduct, removeProduct, setCart } from '../actions/cart.action';

export interface CartState {
  cart: ReadonlyArray<Product>;
}

export const initialState: ReadonlyArray<Product> = [];

export const cartReducer = createReducer(
  initialState,
  on(setCart, (state, { cart }) => [...cart]),
  on(addProduct, (state, { cart }) => {
    return [...state, cart];
  }),
  on(removeProduct, (state, { cart }) => {
    let cart2 = state.filter((t) => t.id != cart.id);
    return [...cart2];
  })
);
