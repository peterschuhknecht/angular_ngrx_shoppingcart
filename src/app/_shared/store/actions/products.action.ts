import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/Product';

export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction(
  '[Products] Get Products Success',
  props<{ products: ReadonlyArray<Product> }>()
);
