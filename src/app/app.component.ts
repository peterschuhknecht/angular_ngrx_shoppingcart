import { Component, OnInit } from '@angular/core';
import { Product } from "./_shared/models/Product";
import { Store } from "@ngrx/store";
import { ProductsState } from "./_shared/store/reducers/products.reducer";
import { Observable } from "rxjs";
import { CartState } from "./_shared/store/reducers/cart.reducer";
import { addProduct, removeProduct } from "./_shared/store/actions/cart.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  products$: Observable<readonly Product[]>
  cart$: Observable<readonly Product[]>
  cartItems = 0;
  showGreenMessage = false;
  showRedMessage = false;

  constructor(
    private productsStore: Store<ProductsState>,
    private cartStore: Store<CartState>,
  ) {
    this.products$ = this.productsStore.select('products');
    this.cart$ = this.cartStore.select('cart');
  }

  ngOnInit() {
    this.subscribeToCart();
  }

  private subscribeToCart(): void {
    this.cart$.subscribe(async (product: readonly Product[]) => {
      // Warenkorbmeldung anzeigen je nach hinzugefügt oder entfernt
      if(product.length !== 0 && this.cartItems < product.length) {
        this.showGreenMessage = true;
      }

      if(this.cartItems > product.length) {
        this.showRedMessage = true;
      }

      // Anzahl Warenkorbartikel updaten
      this.cartItems = product.length;

      // Alle Meldungen nach einer Sekunde schließen
      setTimeout(() => {
        this.showGreenMessage = false;
        this.showRedMessage= false;
      }, 1000)
    })

  }

  public addProductToCart(product: Product) {
    this.cartStore.dispatch(addProduct({ cart: product }));
  }

  public removeProductFromCart(product: Product) {
    this.cartStore.dispatch(removeProduct({ cart: product }));
  }

}
