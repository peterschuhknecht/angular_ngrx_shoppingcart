import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../../_shared/models/Product";
import { ProductsState } from "../../_shared/store/reducers/products.reducer";
import { Store } from "@ngrx/store";
import { CartState } from "../../_shared/store/reducers/cart.reducer";
import { addProduct } from "../../_shared/store/actions/cart.action";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<readonly Product[]>
  cart$: Observable<readonly Product[]>

  constructor(
    private productsStore: Store<ProductsState>,
    private cartStore: Store<CartState>,
  ) {
    this.products$ = this.productsStore.select('products');
    this.cart$ = this.cartStore.select('cart');
  }

  public addProductToCart(product: Product) {
    this.cartStore.dispatch(addProduct({ cart: product }));
  }

}
