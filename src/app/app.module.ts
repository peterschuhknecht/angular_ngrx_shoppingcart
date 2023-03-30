import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './_shared/store/reducers/products.reducer';
import { cartReducer } from './_shared/store/reducers/cart.reducer';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './_shared/components/menu/menu.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './_shared/store/effects/products.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestComponent } from './_shared/components/test/test.component';
import { ProductListComponent } from './_shared/components/product-list/product-list.component';
import { HighlightDirective } from './_shared/directives/highlight.directive';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './_shared/interceptors/http-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    MenuComponent,
    TestComponent,
    ProductListComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    MessagesModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({products: productsReducer, cart: cartReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    }),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
