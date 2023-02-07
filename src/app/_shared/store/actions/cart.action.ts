import { createAction, props } from '@ngrx/store';
import { Product } from "../../models/Product";

export const setCart = createAction(
  '[Cart] Set Cart',
  props<{ cart: Product[] }>()
);

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ cart: Product }>()
);

export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{ cart: Product }>()
);
