import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from "./_shared/store/reducers/products.reducer";
import { cartReducer } from "./_shared/store/reducers/cart.reducer";
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './_shared/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({products: productsReducer, cart: cartReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
