import { createAction, props } from '@ngrx/store';
import { Product } from "../../models/Product";

export const setProducts = createAction('[Products] Set Products', props<{ products: Product[] }>());
