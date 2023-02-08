import { createReducer, on } from '@ngrx/store';
import { getProducts, getProductsSuccess } from "../actions/products.action";
import { Product } from "../../models/Product";

export interface ProductsState {
  products: ReadonlyArray<Product>;
}

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(getProducts, (state) => [...state]),
  on(getProductsSuccess, (state, {products}) => [...products])
);
