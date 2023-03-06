import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustMap, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { getProducts, getProductsSuccess } from '../actions/products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map(
            (products) => getProductsSuccess({ products }),
            catchError((error: any) => {
              throw Error('Error in ngrx effect: ' + error);
              return of(null);
            })
          )
        )
      )
    )
  );
}
