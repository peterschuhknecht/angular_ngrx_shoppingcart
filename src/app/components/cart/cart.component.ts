import { Component, OnInit } from '@angular/core';
import { Product } from "../../_shared/models/Product";
import { Observable } from "rxjs";
import { CartState } from "../../_shared/store/reducers/cart.reducer";
import { Store } from "@ngrx/store";
import { removeProduct } from "../../_shared/store/actions/cart.action";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  implements OnInit{
  cart$: Observable<readonly Product[]>
  cartItems = 0;

  constructor(
    private cartStore: Store<CartState>,
  ) {
    this.cart$ = this.cartStore.select('cart');
  }

  ngOnInit() {
    this.subscribeToCart();
  }

  private subscribeToCart(): void {
    this.cart$.subscribe(async (product: readonly Product[]) => {
      // Anzahl Warenkorbartikel updaten
      this.cartItems = product.length;
    })

  }

  public removeProductFromCart(product: Product) {
    this.cartStore.dispatch(removeProduct({ cart: product }));
  }

}
