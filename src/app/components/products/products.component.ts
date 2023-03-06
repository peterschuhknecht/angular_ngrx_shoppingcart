import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../_shared/models/Product';
import { ProductsState } from '../../_shared/store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { CartState } from '../../_shared/store/reducers/cart.reducer';
import { addProduct } from '../../_shared/store/actions/cart.action';
import { getProducts } from '../../_shared/store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<readonly Product[]> = this.productsStore.select(
    (state) => state.products
  );
  cart$: Observable<readonly Product[]>;

  constructor(
    private productsStore: Store<ProductsState>,
    private cartStore: Store<CartState>
  ) {
    this.cart$ = this.cartStore.select('cart');
  }

  ngOnInit() {
    this.productsStore.dispatch(getProducts());
  }

  public addProductToCart(product: Product) {
    this.cartStore.dispatch(addProduct({ cart: product }));
  }
}
