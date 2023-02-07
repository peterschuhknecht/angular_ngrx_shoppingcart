import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from "./_shared/store/reducers/products.reducer";
import { cartReducer } from "./_shared/store/reducers/cart.reducer";

@NgModule({
  declarations: [
    AppComponent
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
